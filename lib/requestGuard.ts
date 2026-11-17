// Shared guards for the public form endpoints: a capped JSON body reader,
// a raw-body honeypot check, and header-safe text for email subjects.

/**
 * Reads a JSON object body, rejecting anything over `maxBytes`. Returns null
 * on any failure (too big, not JSON, not an object) so callers answer 400.
 */
export async function readJson(req: Request, maxBytes = 64_000): Promise<Record<string, unknown> | null> {
  if (Number(req.headers.get("content-length") || 0) > maxBytes) return null;
  const text = await req.text().catch(() => "");
  if (!text || text.length > maxBytes) return null;
  try {
    const body = JSON.parse(text);
    return body && typeof body === "object" && !Array.isArray(body) ? (body as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

/** True when the hidden honeypot field was filled in (bots fill every field). */
export function honeypotFilled(body: Record<string, unknown>, field: string): boolean {
  const v = body[field];
  return typeof v === "string" ? v.trim() !== "" : v != null && v !== false && v !== "";
}

/** Strips CR/LF and angle brackets so visitor text can't break out of an email header. */
export function headerSafe(v: unknown, max = 200): string {
  return String(v ?? "").replace(/[\r\n<>"]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}
