"use client";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/property-preservation-insurance", label: "Property Preservation" },
  { href: "/mortgage-field-inspector-insurance", label: "Field Inspectors" },
  { href: "/general-liability-insurance", label: "Coverage" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ background: "#20261b", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 2px 16px rgba(0,0,0,0.28)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "40px", height: "40px", background: "linear-gradient(135deg, #74874f, #55663d)",
            borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px",
          }} aria-hidden="true">
            🏚️
          </div>
          <div>
            <div style={{ fontFamily: "'Oswald', sans-serif", color: "#fff", fontWeight: 600, fontSize: "1.1rem", lineHeight: 1.05, letterSpacing: "-0.01em" }}>
              Property Preservationist<span style={{ color: "#c1902f" }}>Insurance</span>
            </div>
            <div style={{ color: "#cddab0", fontSize: "0.64rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              Vacant Property Pros
            </div>
          </div>
        </Link>

        <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center" }} className="hidden md:flex" aria-label="Primary">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="nav-link"
              style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500, transition: "color 0.2s" }}>
              {label}
            </Link>
          ))}
          <Link href="/quote" className="btn-amber" style={{ padding: "0.55rem 1.3rem", fontSize: "0.875rem" }}>
            Get a Quote
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", fontSize: "1.5rem", padding: "0.25rem" }}
          aria-label="Toggle menu" aria-expanded={menuOpen} className="md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: "#2b3324", padding: "1rem 1.5rem", borderTop: "1px solid rgba(255,255,255,0.1)" }} className="md:hidden">
          {[...NAV_LINKS, { href: "/quote", label: "Get a Quote" }].map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}
              style={{ display: "block", color: "rgba(255,255,255,0.9)", textDecoration: "none", padding: "0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)", fontWeight: 500 }}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
