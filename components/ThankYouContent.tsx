import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityToggle from "@/components/AccessibilityToggle";

export default function ThankYouContent() {
  return (
    <>
      <Header />
      <main id="main" style={{ background: "#f7f5ee", minHeight: "80vh", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }} aria-hidden="true">🏚️</div>
            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#3c4a2a", marginBottom: "0.75rem" }}>
              Thank you — your request is in!
            </h1>
            <p style={{ color: "#3d4536", fontSize: "1.1rem", maxWidth: "580px", margin: "0 auto" }}>
              We&apos;ve received your information and someone will be in touch soon to help with your
              property preservation or field inspection insurance quote.
            </p>
          </div>

          {/* Jobber — field-service software affiliate */}
          <div style={{ background: "#fff", borderRadius: "1rem", padding: "1.75rem 2rem", boxShadow: "0 4px 24px rgba(32,38,27,0.08)", marginBottom: "2rem", border: "1px solid #ddd7c4", display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center" }}>
            <a href="https://go.getjobber.com/contractor-listings" target="_blank" rel="noopener noreferrer sponsored" style={{ flexShrink: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/affiliates/jobber-TrustedBy200k_250x250.jpg" alt="Jobber - trusted by 200,000+ home service pros" width={130} height={130} loading="lazy" style={{ borderRadius: "0.75rem", display: "block" }} />
            </a>
            <div style={{ flex: 1, minWidth: 240 }}>
              <div style={{ color: "#9c7324", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                Run your business
              </div>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", color: "#3c4a2a", fontSize: "1.35rem", marginBottom: "0.4rem" }}>
                Spend less time on paperwork
              </h3>
              <p style={{ color: "#3d4536", fontSize: "0.95rem", margin: "0 0 1rem" }}>
                Jobber helps preservation crews and field inspectors schedule work orders, send
                quotes and invoices, and get paid faster, all from your phone.
              </p>
              <a href="https://go.getjobber.com/contractor-listings" target="_blank" rel="noopener noreferrer sponsored" className="btn-amber">
                Try Jobber →
              </a>
              <p style={{ color: "#a3ab98", fontSize: "0.72rem", marginTop: "0.6rem", marginBottom: 0 }}>
                We may earn a referral fee if you sign up through this link. Your price does not change.
              </p>
            </div>
          </div>

          {/* Life insurance affiliate */}
          <div style={{
            background: "linear-gradient(135deg, #20261b, #3c4a2a)", borderRadius: "1rem",
            padding: "2rem 2.5rem", display: "flex", flexWrap: "wrap", gap: "1.5rem",
            alignItems: "center", justifyContent: "space-between",
          }}>
            <div>
              <div style={{ color: "#cddab0", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Also Available
              </div>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", color: "#fff", fontSize: "1.4rem", marginBottom: "0.5rem" }}>
                Life Insurance — No Exam Required
              </h3>
              <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.9rem", maxWidth: "480px" }}>
                Protect your family the way you protect your business. Get instant life insurance
                quotes through Ethos — many applicants qualify without a medical exam.
              </p>
            </div>
            <a
              href="https://agents.ethoslife.com/invite/bib"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn-amber"
              style={{ whiteSpace: "nowrap", flexShrink: 0 }}
            >
              Get a Life Insurance Quote →
            </a>
          </div>

          <p style={{ textAlign: "center", fontSize: "0.78rem", color: "#a3ab98", marginTop: "1.5rem", maxWidth: 640, marginInline: "auto" }}>
            Submitting a request does not bind, guarantee, or confirm any insurance coverage. Coverage,
            terms, and availability vary by carrier, state, and individual risk.
          </p>
        </div>
      </main>
      <Footer />
      <AccessibilityToggle />
    </>
  );
}
