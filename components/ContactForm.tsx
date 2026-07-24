"use client";
import { useState, FormEvent } from "react";

const STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
  "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
  "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","DC",
];

function formatPhone(raw: string): string {
  const d = raw.replace(/\D/g, "").slice(0, 10);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
}

export default function ContactForm() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function set(name: string, value: string) {
    setValues((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => { const e = { ...p }; delete e[name]; return e; });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company_website: "", ...values }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.details) setErrors(data.details);
        setSubmitError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "2rem 0" }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }} aria-hidden="true">✅</div>
        <h3 style={{ fontFamily: "'Oswald', sans-serif", color: "#3c4a2a", fontSize: "1.4rem", marginBottom: "0.5rem" }}>Message Sent!</h3>
        <p style={{ color: "#3d4536" }}>Thanks for reaching out — we&apos;ll get back to you shortly.</p>
      </div>
    );
  }

  const eb = (n: string) => (errors[n] ? "#b3401d" : undefined);

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off"
        value={values.company_website || ""} onChange={(e) => set("company_website", e.target.value)}
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} aria-hidden="true" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.1rem", marginBottom: "1.1rem" }}>
        <div>
          <label className="form-label" htmlFor="c-first">First Name <span style={{ color: "#b3401d" }}>*</span></label>
          <input id="c-first" className="form-input" autoComplete="given-name" value={values.firstName || ""} onChange={(e) => set("firstName", e.target.value)} style={{ borderColor: eb("firstName") }} />
          {errors.firstName && <p className="form-error">⚠ {errors.firstName[0]}</p>}
        </div>
        <div>
          <label className="form-label" htmlFor="c-last">Last Name <span style={{ color: "#b3401d" }}>*</span></label>
          <input id="c-last" className="form-input" autoComplete="family-name" value={values.lastName || ""} onChange={(e) => set("lastName", e.target.value)} style={{ borderColor: eb("lastName") }} />
          {errors.lastName && <p className="form-error">⚠ {errors.lastName[0]}</p>}
        </div>
        <div>
          <label className="form-label" htmlFor="c-email">Email <span style={{ color: "#b3401d" }}>*</span></label>
          <input id="c-email" type="email" className="form-input" autoComplete="email" value={values.email || ""} onChange={(e) => set("email", e.target.value)} style={{ borderColor: eb("email") }} />
          {errors.email && <p className="form-error">⚠ {errors.email[0]}</p>}
        </div>
        <div>
          <label className="form-label" htmlFor="c-phone">Phone <span style={{ color: "#b3401d" }}>*</span></label>
          <input id="c-phone" type="tel" inputMode="tel" className="form-input" autoComplete="tel" placeholder="xxx-xxx-xxxx" maxLength={12}
            value={values.phone || ""} onChange={(e) => set("phone", formatPhone(e.target.value))} style={{ borderColor: eb("phone") }} />
          {errors.phone && <p className="form-error">⚠ {errors.phone[0]}</p>}
        </div>
        <div>
          <label className="form-label" htmlFor="c-state">State</label>
          <select id="c-state" className="form-input" value={values.state || ""} onChange={(e) => set("state", e.target.value)}>
            <option value="">—</option>
            {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <label className="form-label" htmlFor="c-msg">How can we help you? <span style={{ color: "#b3401d" }}>*</span></label>
        <textarea id="c-msg" className="form-input" rows={5} style={{ resize: "vertical", borderColor: eb("message") }}
          placeholder="Tell us about your property preservation or field inspection business, what coverage you're looking for, or any questions you have…"
          value={values.message || ""} onChange={(e) => set("message", e.target.value)} />
        {errors.message && <p className="form-error">⚠ {errors.message[0]}</p>}
      </div>

      {submitError && (
        <div style={{ background: "#fdece7", border: "1px solid #f0c1af", borderRadius: "0.5rem", padding: "0.875rem 1rem", marginBottom: "1.25rem", color: "#b3401d", fontSize: "0.9rem" }}>
          ⚠ {submitError}
        </div>
      )}

      <button type="submit" disabled={submitting} className="btn-primary" style={{ width: "100%", justifyContent: "center", opacity: submitting ? 0.7 : 1, cursor: submitting ? "not-allowed" : "pointer" }}>
        {submitting ? "Sending…" : "Send Message →"}
      </button>
    </form>
  );
}
