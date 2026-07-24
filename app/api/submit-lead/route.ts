import { NextRequest, NextResponse } from "next/server";
import { QuoteSchema } from "@/lib/schemas";
import { sendLeadEmail } from "@/lib/smtp2go";
import { checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_ORIGINS = [
  "https://propertypreservationinsurance.com",
  "https://www.propertypreservationinsurance.com",
];

const BLOCKED_COUNTRIES = new Set(["CN", "RU", "KP"]);

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function checkOrigin(request: NextRequest): boolean {
  if (process.env.NODE_ENV !== "production") return true;
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    const originHost = new URL(origin).host;
    const requestHost = request.headers.get("host");
    if (requestHost && originHost === requestHost) return true;
    if (originHost.endsWith(".vercel.app")) return true;
    return ALLOWED_ORIGINS.includes(origin);
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country");
  if (country && BLOCKED_COUNTRIES.has(country)) {
    return NextResponse.json({ error: "Access denied." }, { status: 403 });
  }

  if (!checkOrigin(request)) {
    return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  }

  const ip = getClientIp(request);
  if (!checkRateLimit(ip).allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in 15 minutes." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = QuoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please review the highlighted fields.", details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const d = parsed.data;

  // Honeypot — silently accept but drop bots.
  if (d.company_website) {
    return NextResponse.json({ success: true, redirect: "/thank-you" });
  }

  const coverage = [
    d.wantsGL ? "General Liability" : null,
    d.wantsProfessional ? "Professional Liability (E&O)" : null,
    d.wantsCyber ? "Cyber Liability" : null,
  ]
    .filter(Boolean)
    .join(", ");

  const workTypes = [
    d.workWinterization ? "Winterization" : null,
    d.workLawnLandscaping ? "Lawn maintenance / landscaping" : null,
    d.workHandyman ? "Handyman / repairs" : null,
    d.workTrashOut ? "Debris removal / trash-out" : null,
    d.workSecuring ? "Securing (lock changes, boarding)" : null,
    d.workInspections ? "Property inspections" : null,
    d.workJanitorial ? "Light janitorial" : null,
  ]
    .filter(Boolean)
    .join(", ");

  try {
    await sendLeadEmail({
      leadType: "Property Preservation / Field Inspection Quote Request",
      replyTo: d.email,
      fields: {
        "First Name": d.firstName,
        "Last Name": d.lastName,
        Email: d.email,
        Phone: d.phone,
        "Business Name": d.businessName,
        "Business Structure": d.entityType,
        "Services Description": d.description,
        Address: d.address,
        City: d.city,
        State: d.state,
        ZIP: d.zip,
        "Type of Work": workTypes,
        "Mortgage Field Inspector?": d.isMortgageFieldInspector,
        "Years in Business": d.yearsInBusiness,
        "Estimated Annual Gross Receipts": d.grossReceipts ? `$${d.grossReceipts}` : "",
        "Number of Owners Active in Business": d.numOwners,
        "Has Employees": d.hasEmployees,
        "Number of Employees": d.numEmployees,
        "Uses 1099 Subcontractors": d.usesSubcontractors,
        "Number of 1099 Subcontractors": d.numSubcontractors,
        "Annual Amount Paid to Subcontractors": d.subcontractorAnnualPay ? `$${d.subcontractorAnnualPay}` : "",
        "Coverage Requested": coverage,
        "Prior Claims (5 yrs)": d.priorClaims,
        "Claim Details": d.priorClaimsDetails,
        "TCPA Consent": d.tcpaConsent ? "Yes — agreed to be contacted (calls/SMS)" : "No",
        "Referrer URL": d.referrerUrl,
        "Page URL": d.pageUrl,
        "Consent IP": ip,
      },
    });
  } catch (err) {
    console.error("Property preservation lead email failed", err);
    return NextResponse.json({ error: "We couldn't submit your request. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true, redirect: "/thank-you" });
}
