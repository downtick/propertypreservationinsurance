import { z } from "zod";

const optStr = (max = 200) => z.string().max(max).trim().optional().or(z.literal(""));
// Coerce missing/undefined values to "" so our friendly min/regex messages show
// instead of zod's default "expected string, received undefined".
const reqStr = <T extends z.ZodTypeAny>(schema: T) => z.preprocess((v) => v ?? "", schema);
// A required Yes/No toggle — must be explicitly chosen (no default).
const reqYesNo = (msg: string) =>
  z.preprocess((v) => v ?? "", z.enum(["Yes", "No"], { error: msg }));
const optCurrency = (max = 12) =>
  z.string().max(max).regex(/^[\d,]*$/, "Numbers only").trim().optional().or(z.literal(""));
const optCount = (max = 6) =>
  z.string().max(max).regex(/^\d*$/, "Numbers only").trim().optional().or(z.literal(""));

// ── Property preservationist / mortgage field inspector GL quote form ──
export const QuoteSchema = z
  .object({
    // Contact
    firstName: reqStr(z.string().min(1, "First name is required").max(50).trim()),
    lastName: reqStr(z.string().min(1, "Last name is required").max(50).trim()),
    email: reqStr(z.string().min(1, "Email is required").email("A valid email is required").max(255).trim().toLowerCase()),
    phone: reqStr(
      z.string().min(10, "A valid phone number is required").max(20).regex(/^[\d\s\-().+]+$/, "Invalid phone number").trim()
    ),

    // Business
    businessName: optStr(120),
    entityType: optStr(60),
    description: z.string().max(1000).trim().optional().or(z.literal("")),

    // Full address (mandatory)
    address: reqStr(z.string().min(1, "Street address is required").max(200).trim()),
    city: reqStr(z.string().min(1, "City is required").max(100).trim()),
    state: reqStr(z.string().min(2, "State is required").max(2).trim().toUpperCase()),
    zip: reqStr(z.string().regex(/^\d{5}$/, "Enter a 5-digit ZIP code").trim()),

    // Type of work (check all that apply — optional)
    workWinterization: z.boolean().optional().default(false),
    workLawnLandscaping: z.boolean().optional().default(false),
    workHandyman: z.boolean().optional().default(false),
    workTrashOut: z.boolean().optional().default(false),
    workSecuring: z.boolean().optional().default(false),
    workInspections: z.boolean().optional().default(false),
    workJanitorial: z.boolean().optional().default(false),

    // A few numbers
    yearsInBusiness: z.string().max(3).regex(/^\d*$/, "Numbers only").trim().optional().or(z.literal("")),
    grossReceipts: reqStr(
      z.string().min(1, "Estimated annual gross receipts are required").max(15).regex(/^[\d,]+$/, "Numbers only").trim()
    ),
    numOwners: reqStr(z.string().min(1, "Enter the number of owners active in the business").max(3).regex(/^\d+$/, "Numbers only").trim()),

    // Employees (required Yes/No → count if Yes)
    hasEmployees: reqYesNo("Let us know whether you have any employees."),
    numEmployees: optCount(6),

    // 1099 subcontractors (required Yes/No → count + annual pay if Yes)
    usesSubcontractors: reqYesNo("Let us know whether you use any 1099 subcontractors."),
    numSubcontractors: optCount(6),
    subcontractorAnnualPay: optCurrency(12),

    // Mortgage field inspector — extra required Yes/No, in addition to the work checkboxes
    isMortgageFieldInspector: reqYesNo("Let us know whether you do mortgage field inspection work."),

    // Claims history (required Yes/No → detail if Yes)
    priorClaims: reqYesNo("Let us know about any prior claims."),
    priorClaimsDetails: optStr(1000),

    // Coverage interest
    wantsGL: z.boolean().optional().default(false),
    wantsProfessional: z.boolean().optional().default(false),
    wantsCyber: z.boolean().optional().default(false),

    // Consent + tracking
    tcpaConsent: z.literal(true, {
      error: "Please agree to be contacted so someone can follow up with you.",
    }),
    referrerUrl: z.string().max(2000).trim().optional().or(z.literal("")),
    pageUrl: z.string().max(2000).trim().optional().or(z.literal("")),
    // Honeypot — must stay empty (bots fill it).
    company_website: z.string().max(0, "Bot detected").optional().or(z.literal("")),
  })
  .refine((d) => d.wantsGL || d.wantsProfessional || d.wantsCyber, {
    message: "Select at least one coverage you're interested in.",
    path: ["wantsGL"],
  })
  .refine((d) => !(d.hasEmployees === "Yes" && !d.numEmployees), {
    message: "Enter how many employees you have.",
    path: ["numEmployees"],
  })
  .refine((d) => !(d.usesSubcontractors === "Yes" && !d.numSubcontractors), {
    message: "Enter how many 1099 subcontractors you use.",
    path: ["numSubcontractors"],
  })
  .refine((d) => !(d.usesSubcontractors === "Yes" && !d.subcontractorAnnualPay), {
    message: "Enter the amount paid annually to subcontractors.",
    path: ["subcontractorAnnualPay"],
  });

export type QuoteFormData = z.infer<typeof QuoteSchema>;

// ── Consumer contact form ──
export const ContactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50).trim(),
  lastName: z.string().min(1, "Last name is required").max(50).trim(),
  email: z.string().email("A valid email is required").max(255).trim().toLowerCase(),
  phone: z
    .string()
    .min(10, "A valid phone number is required")
    .max(20)
    .regex(/^[\d\s\-().+]+$/, "Invalid phone number")
    .trim(),
  state: optStr(2),
  message: z.string().min(1, "Please tell us how we can help").max(2000).trim(),
  company_website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof ContactSchema>;
