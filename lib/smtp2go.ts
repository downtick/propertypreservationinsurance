// SMTP2GO delivery for propertypreservationinsurance.com.
// Every lead / contact submission is emailed to leads@runquotes.com from
// propertypreservation@runquotes.com (a verified SMTP2GO sender).
const SMTP2GO_API_URL = "https://api.smtp2go.com/v3/email/send";
const SMTP2GO_API_KEY = process.env.SMTP2GO_API_KEY!;
const RECIPIENT = "leads@runquotes.com";
const SENDER = process.env.SMTP2GO_SENDER_EMAIL || "propertypreservation@runquotes.com";

export interface MailAttachment {
  filename: string;
  fileblob: string; // base64
  mimetype: string;
}

interface LeadEmailData {
  leadType: string;
  fields: Record<string, string | boolean | undefined | null>;
  subject?: string;
  replyTo?: string;
  attachments?: MailAttachment[];
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildSubject(data: LeadEmailData): string {
  if (data.subject) return data.subject;
  const state = String(data.fields.State || "");
  const name = `${data.fields["First Name"] || ""} ${data.fields["Last Name"] || ""}`.trim();
  return ["PropertyPreservationistInsurance", state, name].filter(Boolean).join(" - ");
}

function rows(data: LeadEmailData) {
  return Object.entries(data.fields).filter(
    ([, v]) => v !== undefined && v !== null && v !== "" && v !== false
  );
}

function buildTextBody(data: LeadEmailData): string {
  const now = new Date().toUTCString();
  const body = rows(data)
    .map(([k, v]) => `  ${k}: ${typeof v === "boolean" ? (v ? "Yes" : "No") : v}`)
    .join("\n");
  return `Lead Source: propertypreservationinsurance.com
Lead Type: ${data.leadType}
Submitted: ${now}

---

${body}

---
This lead was submitted via propertypreservationinsurance.com
`;
}

function buildHtmlBody(data: LeadEmailData): string {
  const now = new Date().toUTCString();
  const body = rows(data)
    .map(([k, v]) => {
      const value = typeof v === "boolean" ? (v ? "Yes" : "No") : escapeHtml(String(v));
      return `<tr><td style="padding:8px 12px;font-weight:600;color:#2b3324;width:42%;border-bottom:1px solid #eae5d6;vertical-align:top">${escapeHtml(
        k
      )}</td><td style="padding:8px 12px;color:#3d4536;border-bottom:1px solid #eae5d6;white-space:pre-wrap">${value}</td></tr>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>New Lead - ${escapeHtml(data.leadType)}</title></head>
<body style="font-family:Arial,sans-serif;background:#f7f5ee;margin:0;padding:20px">
  <div style="max-width:640px;margin:0 auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(32,38,27,0.1)">
    <div style="background:linear-gradient(135deg,#3c4a2a,#55663d);padding:24px 32px">
      <h1 style="color:white;margin:0 0 4px;font-size:22px">New Lead: ${escapeHtml(data.leadType)}</h1>
      <p style="color:rgba(255,255,255,0.82);margin:0;font-size:13px">Source: propertypreservationinsurance.com &nbsp;|&nbsp; ${now}</p>
    </div>
    <div style="padding:24px 32px">
      <table style="width:100%;border-collapse:collapse;font-size:14px">${body}</table>
    </div>
    <div style="background:#f7f5ee;padding:16px 32px;font-size:12px;color:#7b8271;border-top:1px solid #eae5d6">
      Submitted via propertypreservationinsurance.com &nbsp;|&nbsp; Tag: [propertypreservationinsurance]
    </div>
  </div>
</body>
</html>`;
}

export async function sendLeadEmail(data: LeadEmailData): Promise<void> {
  if (!SMTP2GO_API_KEY) {
    console.error("SMTP2GO_API_KEY is not configured — lead not emailed");
    return;
  }

  const response = await fetch(SMTP2GO_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: SMTP2GO_API_KEY,
      to: [RECIPIENT],
      sender: SENDER,
      ...(data.replyTo ? { reply_to: data.replyTo } : {}),
      subject: buildSubject(data),
      text_body: buildTextBody(data),
      html_body: buildHtmlBody(data),
      ...(data.attachments && data.attachments.length ? { attachments: data.attachments } : {}),
    }),
  });

  if (!response.ok) {
    console.error("SMTP2Go error:", await response.text());
    throw new Error("Email send failed");
  }
}

export async function sendContactEmail(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state?: string;
  message: string;
}): Promise<void> {
  if (!SMTP2GO_API_KEY) {
    console.error("SMTP2GO_API_KEY is not configured");
    return;
  }

  const subject = `[propertypreservationinsurance] Contact: ${data.firstName} ${data.lastName}`;
  const html = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Contact Form Submission</title></head>
<body style="font-family:Arial,sans-serif;background:#f7f5ee;margin:0;padding:20px">
  <div style="max-width:600px;margin:0 auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(32,38,27,0.1)">
    <div style="background:linear-gradient(135deg,#3c4a2a,#55663d);padding:24px 32px">
      <h1 style="color:white;margin:0;font-size:22px">Contact Form Submission</h1>
      <p style="color:rgba(255,255,255,0.82);margin:4px 0 0;font-size:13px">Source: propertypreservationinsurance.com/contact</p>
    </div>
    <div style="padding:24px 32px">
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr><td style="padding:8px 12px;font-weight:600;color:#2b3324;width:35%;border-bottom:1px solid #eae5d6">Name</td><td style="padding:8px 12px;color:#3d4536;border-bottom:1px solid #eae5d6">${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:600;color:#2b3324;border-bottom:1px solid #eae5d6">Email</td><td style="padding:8px 12px;color:#3d4536;border-bottom:1px solid #eae5d6">${escapeHtml(data.email)}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:600;color:#2b3324;border-bottom:1px solid #eae5d6">Phone</td><td style="padding:8px 12px;color:#3d4536;border-bottom:1px solid #eae5d6">${escapeHtml(data.phone)}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:600;color:#2b3324;border-bottom:1px solid #eae5d6">State</td><td style="padding:8px 12px;color:#3d4536;border-bottom:1px solid #eae5d6">${escapeHtml(data.state || "")}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:600;color:#2b3324;vertical-align:top">Message</td><td style="padding:8px 12px;color:#3d4536;white-space:pre-wrap">${escapeHtml(data.message)}</td></tr>
      </table>
    </div>
  </div>
</body></html>`;

  await fetch(SMTP2GO_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: SMTP2GO_API_KEY,
      to: [RECIPIENT],
      sender: SENDER,
      reply_to: data.email,
      subject,
      text_body: `Contact Form Submission\n\nName: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: ${data.phone}\nState: ${data.state || ""}\n\nMessage:\n${data.message}\n\n---\nSubmitted via propertypreservationinsurance.com/contact`,
      html_body: html,
    }),
  });
}
