import { NextRequest, NextResponse } from "next/server";
import { ContactSchema } from "@/lib/schemas";
import { sendContactEmail } from "@/lib/smtp2go";
import { checkRateLimit } from "@/lib/rate-limit";
import { honeypotFilled, readJson } from "@/lib/requestGuard";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_ORIGINS = [
  "https://propertypreservationinsurance.com",
  "https://www.propertypreservationinsurance.com",
];

const BLOCKED_COUNTRIES = new Set(["CN", "RU", "KP"]);

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

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country");
  if (country && BLOCKED_COUNTRIES.has(country)) {
    return NextResponse.json({ error: "Access denied." }, { status: 403 });
  }

  if (!checkOrigin(request)) {
    return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  }

  if (!checkRateLimit(getClientIp(request)).allowed) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  const body = await readJson(request);
  if (!body) return NextResponse.json({ error: "Invalid request." }, { status: 400 });

  // Honeypot — pretend it worked so bots learn nothing.
  if (honeypotFilled(body, "company_website")) {
    return NextResponse.json({ success: true });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  try {
    await sendContactEmail(parsed.data);
  } catch (err) {
    console.error("Contact email failed:", err);
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again in a few minutes." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
