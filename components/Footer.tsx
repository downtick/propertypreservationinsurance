import Link from "next/link";
import AnalyticsOptOut from "./AnalyticsOptOut";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#20261b", color: "rgba(255,255,255,0.74)", marginTop: "auto" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2.5rem", marginBottom: "2.5rem" }}>
          <div>
            <div style={{ fontFamily: "'Oswald', sans-serif", color: "#fff", fontWeight: 600, fontSize: "1.2rem", marginBottom: "0.75rem" }}>
              Property Preservationist Insurance
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(255,255,255,0.62)" }}>
              Connecting property preservationists and mortgage field inspectors with insurance
              professionals. We are not an insurance agency — we help you find and request coverage
              for your vacant-property work.
            </p>
          </div>

          <div>
            <h4 style={{ color: "#cddab0", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Coverage
            </h4>
            {[
              { href: "/general-liability-insurance", label: "General Liability" },
              { href: "/professional-liability-insurance", label: "Professional Liability" },
              { href: "/cyber-liability-insurance", label: "Cyber Liability" },
              { href: "/quote", label: "Get a Quote" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ display: "block", color: "rgba(255,255,255,0.68)", textDecoration: "none", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                {label}
              </Link>
            ))}
          </div>

          <div>
            <h4 style={{ color: "#cddab0", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Who We Serve
            </h4>
            {[
              { href: "/property-preservation-insurance", label: "Property Preservationists" },
              { href: "/mortgage-field-inspector-insurance", label: "Mortgage Field Inspectors" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact Us" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ display: "block", color: "rgba(255,255,255,0.68)", textDecoration: "none", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                {label}
              </Link>
            ))}
          </div>

          <div>
            <h4 style={{ color: "#cddab0", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Legal
            </h4>
            {[
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/terms-of-service", label: "Terms of Service" },
              { href: "/disclaimer", label: "Disclaimer" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ display: "block", color: "rgba(255,255,255,0.68)", textDecoration: "none", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                {label}
              </Link>
            ))}
            <div style={{ marginTop: "1rem" }}>
              <AnalyticsOptOut />
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", margin: 0 }}>
            © {year} propertypreservationinsurance.com — Not an insurance agency. This site connects
            property preservationists and mortgage field inspectors with insurance professionals.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/contact" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", textDecoration: "none" }}>Contact</Link>
            <Link href="/privacy-policy" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", textDecoration: "none" }}>Privacy</Link>
            <Link href="/terms-of-service" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", textDecoration: "none" }}>Terms</Link>
            <Link href="/disclaimer" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", textDecoration: "none" }}>Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
