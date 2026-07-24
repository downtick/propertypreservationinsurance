"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
  "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
  "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","DC",
];

const ENTITY_TYPES = ["LLC", "Sole Proprietor", "Corporation", "Partnership", "Non-Profit", "Other"];

function formatPhone(raw: string): string {
  const d = raw.replace(/\D/g, "").slice(0, 10);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
}
function formatCurrency(raw: string, max = 12): string {
  const d = raw.replace(/\D/g, "").slice(0, max);
  return d ? Number(d).toLocaleString("en-US") : "";
}
function digits(raw: string, max: number): string {
  return raw.replace(/\D/g, "").slice(0, max);
}

type Vals = Record<string, string | boolean>;

function YesNoButtons({
  id, value, onSet, labelledBy,
}: { id: string; value?: string; onSet: (v: "Yes" | "No") => void; labelledBy?: string }) {
  return (
    <div id={id} role="group" aria-labelledby={labelledBy} style={{ display: "flex", gap: "0.5rem" }}>
      <button type="button" className="yn-btn" data-on={value === "No"} aria-pressed={value === "No"} onClick={() => onSet("No")}>No</button>
      <button type="button" className="yn-btn" data-on={value === "Yes"} aria-pressed={value === "Yes"} onClick={() => onSet("Yes")}>Yes</button>
    </div>
  );
}

const sectionLegend: React.CSSProperties = {
  fontFamily: "'Oswald', sans-serif", color: "#3c4a2a", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.9rem",
};

export default function QuoteForm() {
  const router = useRouter();
  const [v, setV] = useState<Vals>({ numOwners: "1" });
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showGate, setShowGate] = useState(false);

  function set(name: string, value: string | boolean) {
    setV((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => { const e = { ...p }; delete e[name]; return e; });
  }

  const employeesYes = v.hasEmployees === "Yes";
  const subsYes = v.usesSubcontractors === "Yes";
  const claimsYes = v.priorClaims === "Yes";

  // ── Live required-toggle tracking (banner ticks down as the user answers) ──
  const requiredToggles: { key: string; label: string }[] = [
    { key: "hasEmployees", label: "Do you have any employees?" },
    { key: "usesSubcontractors", label: "Do you use any 1099 subcontractors?" },
    { key: "isMortgageFieldInspector", label: "Are you a mortgage field inspector?" },
    { key: "priorClaims", label: "Any claims in the last 5 years?" },
  ];
  const missingToggles = requiredToggles.filter((t) => !v[t.key]);
  const missingCount = missingToggles.length;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (missingCount > 0) {
      setShowGate(true);
      const first = document.getElementById(`q-${missingToggles[0].key}`);
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      const referrerUrl = document.referrer || "";
      const pageUrl = window.location.href;
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...v, referrerUrl, pageUrl }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.details) setErrors(data.details);
        setSubmitError(data.error || "Something went wrong. Please try again.");
        const firstErr = data.details ? Object.keys(data.details)[0] : null;
        if (firstErr) document.getElementById(firstErr)?.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      router.push(data.redirect || "/thank-you");
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const err = (n: string) => errors[n]?.[0];
  const req = <span style={{ color: "#b3401d" }}> *</span>;
  const fieldset: React.CSSProperties = { border: "none", padding: 0, margin: "0 0 1.6rem" };
  const grid2: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.1rem" };

  function Chip({ name, label }: { name: string; label: string }) {
    const on = Boolean(v[name]);
    return (
      <button type="button" className="chip" data-on={on} onClick={() => set(name, !on)} aria-pressed={on}>
        <span style={{ width: 18, height: 18, borderRadius: 5, border: on ? "none" : "2px solid #c9c3ac", background: on ? "#55663d" : "#fff", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0 }}>{on ? "✓" : ""}</span>
        {label}
      </button>
    );
  }

  function ToggleRow({ name, label, hint }: { name: string; label: string; hint?: string }) {
    const unanswered = showGate && !v[name];
    return (
      <div id={`q-${name}`} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", padding: "0.7rem 0.9rem", borderRadius: "0.55rem", background: unanswered ? "#fdece7" : "transparent", border: unanswered ? "1px solid #f0c1af" : "1px solid transparent" }}>
        <span id={`lbl-${name}`} style={{ fontWeight: 600, color: "#2b3324" }}>
          {label}{req}
          {hint && <span style={{ display: "block", fontWeight: 400, fontSize: "0.82rem", color: "#7b8271" }}>{hint}</span>}
        </span>
        <YesNoButtons id={name} value={String(v[name] || "")} labelledBy={`lbl-${name}`} onSet={(val) => set(name, val)} />
      </div>
    );
  }

  function CoverageCard({ name, title, desc }: { name: string; title: string; desc: string }) {
    const on = Boolean(v[name]);
    return (
      <div className="coverage-card" data-on={on} onClick={() => set(name, !on)} role="checkbox" aria-checked={on} tabIndex={0}
        onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); set(name, !on); } }}>
        <div>
          <div style={{ fontWeight: 700, color: "#2b3324" }}>{title}</div>
          <div style={{ fontSize: "0.85rem", color: "#7b8271" }}>{desc}</div>
        </div>
        <span style={{ width: 24, height: 24, borderRadius: 7, border: on ? "none" : "2px solid #c9c3ac", background: on ? "#55663d" : "#fff", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 }}>{on ? "✓" : ""}</span>
      </div>
    );
  }

  function NumberBoxes({ name, label, options, hint }: { name: string; label: string; options: number[]; hint?: string }) {
    const value = Number(v[name] || options[0]);
    return (
      <div>
        <label className="form-label" id={`lbl-${name}`}>{label}</label>
        <div role="group" aria-labelledby={`lbl-${name}`} style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {options.map((n) => (
            <button
              key={n}
              type="button"
              className="num-box"
              data-on={value === n}
              aria-pressed={value === n}
              onClick={() => set(name, String(n))}
            >
              {n}
            </button>
          ))}
        </div>
        {hint && <p style={{ fontSize: "0.78rem", color: "#7b8271", marginTop: 4 }}>{hint}</p>}
        {err(name) && <p className="form-error">⚠ {err(name)}</p>}
      </div>
    );
  }

  function NumberSelect({ name, label, max, hint }: { name: string; label: string; max: number; hint?: string }) {
    return (
      <div>
        <label className="form-label" htmlFor={name}>{label}{req}</label>
        <select id={name} className="form-input" value={String(v[name] || "")}
          onChange={(e) => set(name, e.target.value)} style={{ borderColor: err(name) ? "#b3401d" : undefined }}>
          <option value="">Select…</option>
          {Array.from({ length: max }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>{n === max ? `${n}+` : n}</option>
          ))}
        </select>
        {hint && <p style={{ fontSize: "0.78rem", color: "#7b8271", marginTop: 4 }}>{hint}</p>}
        {err(name) && <p className="form-error">⚠ {err(name)}</p>}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off"
        value={String(v.company_website || "")} onChange={(e) => set("company_website", e.target.value)}
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} aria-hidden="true" />

      {/* Contact */}
      <fieldset style={fieldset}>
        <legend style={sectionLegend}>Your contact information</legend>
        <div style={grid2}>
          <div>
            <label className="form-label" htmlFor="firstName">First Name{req}</label>
            <input id="firstName" className="form-input" autoComplete="given-name" value={String(v.firstName || "")}
              onChange={(e) => set("firstName", e.target.value)} style={{ borderColor: err("firstName") ? "#b3401d" : undefined }} />
            {err("firstName") && <p className="form-error">⚠ {err("firstName")}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="lastName">Last Name{req}</label>
            <input id="lastName" className="form-input" autoComplete="family-name" value={String(v.lastName || "")}
              onChange={(e) => set("lastName", e.target.value)} style={{ borderColor: err("lastName") ? "#b3401d" : undefined }} />
            {err("lastName") && <p className="form-error">⚠ {err("lastName")}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="email">Email{req}</label>
            <input id="email" type="email" className="form-input" autoComplete="email" placeholder="you@example.com" value={String(v.email || "")}
              onChange={(e) => set("email", e.target.value)} style={{ borderColor: err("email") ? "#b3401d" : undefined }} />
            {err("email") && <p className="form-error">⚠ {err("email")}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="phone">Phone{req}</label>
            <input id="phone" type="tel" inputMode="tel" className="form-input" autoComplete="tel" placeholder="xxx-xxx-xxxx" maxLength={12} value={String(v.phone || "")}
              onChange={(e) => set("phone", formatPhone(e.target.value))} style={{ borderColor: err("phone") ? "#b3401d" : undefined }} />
            {err("phone") && <p className="form-error">⚠ {err("phone")}</p>}
          </div>
        </div>
      </fieldset>

      {/* Business */}
      <fieldset style={fieldset}>
        <legend style={sectionLegend}>About your business</legend>
        <div style={grid2}>
          <div>
            <label className="form-label" htmlFor="businessName">Business Name <span style={{ fontWeight: 400, color: "#7b8271" }}>(optional)</span></label>
            <input id="businessName" className="form-input" autoComplete="organization" value={String(v.businessName || "")}
              onChange={(e) => set("businessName", e.target.value)} style={{ borderColor: err("businessName") ? "#b3401d" : undefined }} />
            {err("businessName") && <p className="form-error">⚠ {err("businessName")}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="entityType">Business Structure</label>
            <select id="entityType" className="form-input" value={String(v.entityType || "")} onChange={(e) => set("entityType", e.target.value)}>
              <option value="">Select…</option>
              {ENTITY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
        <div style={{ marginTop: "1.1rem" }}>
          <label className="form-label" htmlFor="description">Briefly describe your services <span style={{ fontWeight: 400, color: "#7b8271" }}>(optional)</span></label>
          <textarea id="description" className="form-input" rows={2} style={{ resize: "vertical" }} value={String(v.description || "")} onChange={(e) => set("description", e.target.value)} />
        </div>
      </fieldset>

      {/* Address */}
      <fieldset style={fieldset}>
        <legend style={sectionLegend}>Business address</legend>
        <div style={{ marginBottom: "1.1rem" }}>
          <label className="form-label" htmlFor="address">Street Address{req}</label>
          <input id="address" className="form-input" autoComplete="street-address" value={String(v.address || "")}
            onChange={(e) => set("address", e.target.value)} style={{ borderColor: err("address") ? "#b3401d" : undefined }} />
          {err("address") && <p className="form-error">⚠ {err("address")}</p>}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "1.1rem" }}>
          <div>
            <label className="form-label" htmlFor="city">City{req}</label>
            <input id="city" className="form-input" autoComplete="address-level2" value={String(v.city || "")}
              onChange={(e) => set("city", e.target.value)} style={{ borderColor: err("city") ? "#b3401d" : undefined }} />
            {err("city") && <p className="form-error">⚠ {err("city")}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="state">State{req}</label>
            <select id="state" className="form-input" value={String(v.state || "")} onChange={(e) => set("state", e.target.value)} style={{ borderColor: err("state") ? "#b3401d" : undefined }}>
              <option value="">—</option>
              {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            {err("state") && <p className="form-error">⚠ {err("state")}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="zip">ZIP{req}</label>
            <input id="zip" className="form-input" inputMode="numeric" autoComplete="postal-code" value={String(v.zip || "")}
              onChange={(e) => set("zip", digits(e.target.value, 5))} style={{ borderColor: err("zip") ? "#b3401d" : undefined }} />
            {err("zip") && <p className="form-error">⚠ {err("zip")}</p>}
          </div>
        </div>
      </fieldset>

      {/* Type of work */}
      <fieldset style={fieldset}>
        <legend style={sectionLegend}>What kind of work do you do? <span style={{ fontWeight: 400, fontSize: "0.85rem", color: "#7b8271" }}>(check all that apply)</span></legend>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
          <Chip name="workWinterization" label="❄️ Winterization" />
          <Chip name="workLawnLandscaping" label="🌱 Lawn maintenance / landscaping" />
          <Chip name="workHandyman" label="🔧 Handyman / repairs" />
          <Chip name="workTrashOut" label="🧹 Debris removal / trash-out" />
          <Chip name="workSecuring" label="🔒 Securing (lock changes, boarding)" />
          <Chip name="workInspections" label="📋 Property inspections" />
          <Chip name="workJanitorial" label="🧽 Light janitorial" />
        </div>
        <p style={{ fontSize: "0.8rem", color: "#7b8271", marginTop: "0.75rem" }}>
          All work performed on vacant, foreclosed, REO, or bank-owned properties.
        </p>
      </fieldset>

      {/* Mortgage field inspector */}
      <fieldset style={fieldset}>
        <div style={{ border: "1px solid #ddd7c4", borderRadius: "0.55rem", background: "#f5f7ef" }}>
          <ToggleRow name="isMortgageFieldInspector" label="Are you a mortgage field inspector?" hint="Drive-by or interior inspections for mortgage servicers or lenders to confirm occupancy/condition." />
        </div>
      </fieldset>

      {/* Underwriting basics */}
      <fieldset style={fieldset}>
        <legend style={sectionLegend}>A few numbers</legend>
        <div style={grid2}>
          <div>
            <label className="form-label" htmlFor="grossReceipts">Estimated Gross Receipts (next 12 months){req}</label>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#7b8271" }}>$</span>
              <input id="grossReceipts" className="form-input" inputMode="numeric" style={{ paddingLeft: 26, borderColor: err("grossReceipts") ? "#b3401d" : undefined }}
                value={String(v.grossReceipts || "")} onChange={(e) => set("grossReceipts", formatCurrency(e.target.value))} />
            </div>
            {err("grossReceipts") && <p className="form-error">⚠ {err("grossReceipts")}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="yearsInBusiness">Years in Business <span style={{ fontWeight: 400, color: "#7b8271" }}>(optional)</span></label>
            <input id="yearsInBusiness" className="form-input" inputMode="numeric" value={String(v.yearsInBusiness || "")}
              onChange={(e) => set("yearsInBusiness", digits(e.target.value, 3))} />
          </div>
        </div>
        <div style={{ marginTop: "1.1rem" }}>
          <NumberBoxes name="numOwners" label="Number of owners active in the business" options={[1, 2, 3, 4, 5]} />
        </div>
      </fieldset>

      {/* Employees */}
      <fieldset style={fieldset}>
        <legend style={sectionLegend}>Employees</legend>
        <div style={{ border: "1px solid #ddd7c4", borderRadius: "0.55rem" }}>
          <ToggleRow name="hasEmployees" label="Do you have any employees, if any?" />
        </div>
        {employeesYes && (
          <div style={{ marginTop: "1rem", background: "#f5f7ef", borderRadius: "0.55rem", padding: "1rem 1.1rem" }}>
            <NumberSelect name="numEmployees" label="Number of employees" max={50} />
          </div>
        )}
      </fieldset>

      {/* 1099 Subcontractors */}
      <fieldset style={fieldset}>
        <legend style={sectionLegend}>Subcontractors</legend>
        <div style={{ border: "1px solid #ddd7c4", borderRadius: "0.55rem" }}>
          <ToggleRow name="usesSubcontractors" label="Do you use any 1099 subcontractors, if any?" />
        </div>
        {subsYes && (
          <div style={{ marginTop: "1rem", background: "#f5f7ef", borderRadius: "0.55rem", padding: "1rem 1.1rem", display: "grid", gap: "1rem" }}>
            <NumberSelect name="numSubcontractors" label="Number of 1099 subcontractors" max={50} />
            <div>
              <label className="form-label" htmlFor="subcontractorAnnualPay">Amount paid annually to subcontractors{req}</label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#7b8271" }}>$</span>
                <input id="subcontractorAnnualPay" className="form-input" inputMode="numeric" style={{ paddingLeft: 26, borderColor: err("subcontractorAnnualPay") ? "#b3401d" : undefined }}
                  value={String(v.subcontractorAnnualPay || "")} onChange={(e) => set("subcontractorAnnualPay", formatCurrency(e.target.value))} />
              </div>
              {err("subcontractorAnnualPay") && <p className="form-error">⚠ {err("subcontractorAnnualPay")}</p>}
            </div>
          </div>
        )}
      </fieldset>

      {/* Coverage selector */}
      <fieldset style={fieldset}>
        <legend style={sectionLegend}>What coverage are you interested in?{req}</legend>
        <div style={{ display: "grid", gap: "0.7rem" }}>
          <CoverageCard name="wantsGL" title="General Liability" desc="The foundation — third-party bodily injury and property damage while you're on-site." />
          <CoverageCard name="wantsProfessional" title="Professional Liability (E&O)" desc="For claims that an inspection report or job was performed incorrectly or incompletely." />
          <CoverageCard name="wantsCyber" title="Cyber Liability" desc="For client data, photos, and reports handled electronically." />
        </div>
        {err("wantsGL") && <p className="form-error" style={{ marginTop: "0.6rem" }}>⚠ {err("wantsGL")}</p>}
      </fieldset>

      {/* Claims */}
      <fieldset style={fieldset}>
        <legend style={sectionLegend}>Claims history</legend>
        <div style={{ border: "1px solid #ddd7c4", borderRadius: "0.55rem" }}>
          <ToggleRow name="priorClaims" label="Any insurance claims in the last 5 years?" />
        </div>
        {claimsYes && (
          <div style={{ marginTop: "0.75rem" }}>
            <label className="form-label" htmlFor="priorClaimsDetails">Briefly describe the claim(s)</label>
            <textarea id="priorClaimsDetails" className="form-input" rows={3} style={{ resize: "vertical" }} value={String(v.priorClaimsDetails || "")} onChange={(e) => set("priorClaimsDetails", e.target.value)} />
          </div>
        )}
      </fieldset>

      {/* Live required-toggle banner */}
      {missingCount > 0 && (
        <div style={{ background: "#faf1e0", border: "1px solid #e7cd9a", borderRadius: "0.55rem", padding: "0.85rem 1.1rem", marginBottom: "1.1rem", color: "#8a5f16", fontSize: "0.9rem" }}>
          {missingCount === 1 ? "1 question still needs an answer" : `${missingCount} questions still need an answer`} before you can submit.
        </div>
      )}

      {/* TCPA consent */}
      <div style={{ background: "#eef1e2", border: "1px solid #ddd7c4", borderRadius: "0.55rem", padding: "1rem 1.1rem", marginBottom: "1.1rem" }}>
        <label style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer" }}>
          <input type="checkbox" checked={Boolean(v.tcpaConsent)} onChange={(e) => set("tcpaConsent", e.target.checked)}
            style={{ width: "18px", height: "18px", marginTop: "3px", accentColor: "#55663d", flexShrink: 0 }} />
          <span style={{ fontSize: "0.82rem", color: "#3d4536", lineHeight: 1.55 }}>
            By checking this box, I agree to be contacted by Property Preservationist Insurance and its
            insurance partners at the phone number provided, including by automated calls, prerecorded
            messages, and text messages (SMS), about my insurance quote. Consent is not required to
            purchase. Msg &amp; data rates may apply; reply STOP to opt out. I agree to the{" "}
            <a href="/privacy-policy" style={{ color: "#55663d", fontWeight: 600 }}>Privacy Policy</a> and{" "}
            <a href="/terms-of-service" style={{ color: "#55663d", fontWeight: 600 }}>Terms of Service</a>.
          </span>
        </label>
        {err("tcpaConsent") && <p className="form-error" style={{ marginTop: "0.5rem" }}>⚠ {err("tcpaConsent")}</p>}
      </div>

      {submitError && (
        <div style={{ background: "#fdece7", border: "1px solid #f0c1af", borderRadius: "0.5rem", padding: "0.875rem 1rem", marginBottom: "1.25rem", color: "#b3401d", fontSize: "0.9rem" }}>
          ⚠ {submitError}
        </div>
      )}

      <button type="submit" disabled={submitting} className="btn-primary" style={{ width: "100%", justifyContent: "center", opacity: submitting ? 0.7 : 1, cursor: submitting ? "not-allowed" : "pointer" }}>
        {submitting ? (
          <>
            <span style={{ width: "18px", height: "18px", border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block", animation: "spin 0.8s linear infinite" }} />
            Submitting…
          </>
        ) : "Request My Quote →"}
      </button>

      <p style={{ textAlign: "center", fontSize: "0.78rem", color: "#a3ab98", marginTop: "0.75rem" }}>
        🔒 Your information is secure and never sold to third parties. Submitting a request does not bind, guarantee, or confirm coverage.
      </p>
    </form>
  );
}
