import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityToggle from "@/components/AccessibilityToggle";
import DisclaimerNotice from "@/components/DisclaimerNotice";
import StickyQuoteBar from "@/components/StickyQuoteBar";

const COVERAGES = [
  { icon: "🛡️", title: "General Liability", desc: "The foundation — third-party bodily injury and property damage claims while you're on-site at a vacant property.", href: "/general-liability-insurance" },
  { icon: "📝", title: "Professional Liability (E&O)", desc: "For claims that an inspection report, work order, or condition report was performed incorrectly or incompletely.", href: "/professional-liability-insurance" },
  { icon: "💻", title: "Cyber Liability", desc: "Client data, property photos, and inspection reports handled electronically bring digital exposure worth considering.", href: "/cyber-liability-insurance" },
];

const WORK = [
  { icon: "❄️", title: "Winterizing", desc: "Draining lines, shutting off water, and protecting vacant homes from freeze damage." },
  { icon: "🌱", title: "Lawn & landscaping", desc: "Mowing, trimming, and basic upkeep that keeps a vacant property looking maintained." },
  { icon: "🔧", title: "Handyman work", desc: "Repairs, board-ups, lock changes, and general maintenance on bank-owned homes." },
  { icon: "🧹", title: "Debris removal", desc: "Trash-outs and clean-outs to get a distressed property back to marketable condition." },
  { icon: "📋", title: "Field inspections", desc: "Drive-by or interior inspections confirming occupancy and condition for mortgage servicers." },
  { icon: "🧽", title: "Light janitorial", desc: "Basic cleaning to prep a vacant unit for showing, sale, or re-occupancy." },
];

const CLAIMS = [
  { title: "A trip-and-fall during a mow", body: "A neighbor or passerby is injured on the property while you're doing yard work. General liability is the coverage typically associated with third-party bodily injury claims like this." },
  { title: "A report says 'occupied' — it wasn't", body: "An inspection or condition report turns out to be wrong, and the servicer says it cost them money. Professional liability is designed for exactly this kind of claim." },
  { title: "A pipe bursts after a missed shut-off", body: "A winterization job is skipped or done incorrectly, and the property owner alleges damage resulted. This is the kind of scenario preservation contractors think about." },
];

const FAQ = [
  { q: "What insurance do property preservationists usually carry?", a: "Many preservation contractors start with general liability — it's the coverage most property preservation companies and asset managers require — and consider professional liability (E&O) for the accuracy of inspection and work-order reporting. Cyber liability is worth a look too, since so much of the work is documented and transmitted electronically. The right mix depends on your operation, your state, and the carrier." },
  { q: "Do property preservation companies require insurance?", a: "Frequently, yes. Property preservation companies, asset management companies, and mortgage servicers commonly require vendors and subcontractors to carry general liability — and often ask for a certificate of insurance before work begins." },
  { q: "Can I get insurance if I'm a mortgage field inspector, not a preservationist?", a: "Yes. Mortgage field inspection is a closely related role — drive-by or interior inspections to confirm occupancy and condition — and it carries its own liability and reporting-accuracy exposures. Tell us on the quote form and we'll factor it in." },
  { q: "Is this only for vacant or bank-owned properties?", a: "Property preservation and field inspection work is, by definition, performed on vacant, foreclosed, REO, or bank-owned properties — not occupied family homes. That's the focus of this site." },
  { q: "What if I do both preservation work and field inspections?", a: "That's common. Tell us about all the work you do on the quote form — winterizing, lawn care, handyman work, debris removal, and inspections — and whether you do mortgage field inspection work specifically, so the details are captured accurately." },
];

export default function Home() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Header />
      <main id="main">
        {/* Hero */}
        <section className="section-hero" style={{ padding: "4rem 1.5rem 4.5rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "2.5rem", alignItems: "center" }} className="hero-grid">
            <div>
              <span className="trust-badge" style={{ marginBottom: "1.1rem" }}>🏚️ Vacant-property pros · fast quotes</span>
              <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4.5vw, 3.1rem)", lineHeight: 1.12, marginBottom: "1rem" }}>
                Insurance built for property preservationists
              </h1>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.12rem", lineHeight: 1.65, marginBottom: "1.75rem", maxWidth: "520px" }}>
                General liability, professional liability (E&amp;O), and cyber liability — for winterizing,
                lawn maintenance, handyman work, and inspections on vacant and bank-owned properties.
              </p>
              <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
                <Link href="/quote" className="btn-amber">Start my quote →</Link>
                <Link href="/property-preservation-insurance" className="btn-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.6)" }}>See coverage</Link>
              </div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem", marginTop: "1rem" }}>
                Also serving mortgage field inspectors — see our{" "}
                <Link href="/mortgage-field-inspector-insurance" style={{ color: "#cddab0" }}>field inspector page</Link>.
              </p>
            </div>
            <div style={{ position: "relative", borderRadius: "1.25rem", overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.35)", aspectRatio: "4/3", background: "#2b3324" }}>
              <Image
                src="https://images.unsplash.com/photo-1720065609938-ec0e33ffd9ad?auto=format&fit=crop&w=900&q=75"
                alt="A single-family house standing vacant on a quiet street"
                fill
                priority
                sizes="(max-width: 820px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section style={{ background: "#fff", borderBottom: "1px solid #ddd7c4", padding: "1.25rem 1.5rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "space-around", color: "#3d4536", fontSize: "0.95rem", fontWeight: 600 }}>
            <span>✓ Built for vacant &amp; REO property work</span>
            <span>✓ Preservationists &amp; field inspectors</span>
            <span>✓ GL, E&amp;O &amp; cyber in one place</span>
            <span>✓ Fast, no-obligation quotes</span>
          </div>
        </section>

        {/* How it works */}
        <section className="section-white" style={{ padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 style={{ color: "#3c4a2a", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "0.6rem" }}>How it works</h2>
              <p style={{ color: "#3d4536", maxWidth: "620px", margin: "0 auto" }}>From &ldquo;tell us about your work&rdquo; to a quote in just a few minutes.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
              {[
                { n: 1, t: "Tell us about your work", d: "Preservation, field inspections, or both — and the properties you cover." },
                { n: 2, t: "Pick your coverage", d: "General liability, professional liability (E&O), and/or cyber liability." },
                { n: 3, t: "Review your quote", d: "We line up the details and someone follows up to help." },
                { n: 4, t: "Connect and bind", d: "Someone helps you finish the paperwork and get covered." },
              ].map((s) => (
                <div key={s.n} style={{ textAlign: "center" }}>
                  <div style={{ width: "56px", height: "56px", borderRadius: "50%", margin: "0 auto 1rem", background: "linear-gradient(135deg, #74874f, #55663d)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", fontWeight: 700, fontFamily: "'Oswald', sans-serif" }} aria-hidden="true">{s.n}</div>
                  <h3 style={{ color: "#2b3324", fontSize: "1.1rem", marginBottom: "0.35rem" }}>{s.t}</h3>
                  <p style={{ color: "#3d4536", fontSize: "0.92rem", margin: 0 }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What the work looks like — image row */}
        <section className="section-cream" style={{ padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 style={{ color: "#3c4a2a", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "0.6rem" }}>The work you do on vacant properties</h2>
              <p style={{ color: "#3d4536", maxWidth: "640px", margin: "0 auto" }}>
                Winterizing, mowing, repairs, trash-outs, securing, inspecting — the exposures vary by task,
                and the coverage should fit what you actually do.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {[
                { src: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&w=700&q=75", alt: "A worker using a circular saw to cut a wood plank during a handyman repair job" },
                { src: "https://images.unsplash.com/photo-1779636489744-c7243917ace0?auto=format&fit=crop&w=700&q=75", alt: "A worker mowing an overgrown lawn at a vacant property" },
                { src: "https://images.unsplash.com/photo-1768838007261-22e4d9d9d57a?auto=format&fit=crop&w=700&q=75", alt: "Snow along the exterior corner of a vacant home ready for winterization" },
              ].map((img) => (
                <div key={img.src} style={{ position: "relative", borderRadius: "1rem", overflow: "hidden", aspectRatio: "4/3" }} className="card-hover">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 820px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverages */}
        <section className="section-white" style={{ padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 style={{ color: "#3c4a2a", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "0.6rem" }}>Coverage built around your risk</h2>
              <p style={{ color: "#3d4536", maxWidth: "640px", margin: "0 auto" }}>
                Pick the pieces that fit how you work. Coverage, terms, and availability vary by carrier,
                state, and individual risk.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {COVERAGES.map((c) => (
                <Link key={c.title} href={c.href} className="card-hover" style={{ background: "#fff", border: "1px solid #ddd7c4", borderRadius: "1rem", padding: "1.5rem", textDecoration: "none", display: "block" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.6rem" }} aria-hidden="true">{c.icon}</div>
                  <h3 style={{ color: "#2b3324", fontSize: "1.15rem", marginBottom: "0.4rem" }}>{c.title}</h3>
                  <p style={{ color: "#3d4536", fontSize: "0.93rem", margin: 0 }}>{c.desc}</p>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2.25rem" }}>
              <Link href="/quote" className="btn-primary">Get my quote →</Link>
            </div>
          </div>
        </section>

        {/* Who we serve */}
        <section className="section-cream" style={{ padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 style={{ color: "#3c4a2a", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "0.6rem" }}>The tasks we quote around</h2>
              <p style={{ color: "#3d4536", maxWidth: "620px", margin: "0 auto" }}>Tell us what you do on the quote form — the application is shaped around it.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
              {WORK.map((g) => (
                <div key={g.title} style={{ background: "#fff", borderRadius: "1rem", padding: "1.5rem", textAlign: "center", border: "1px solid #ddd7c4" }}>
                  <div style={{ fontSize: "2.2rem", marginBottom: "0.5rem" }} aria-hidden="true">{g.icon}</div>
                  <h3 style={{ color: "#2b3324", fontSize: "1.1rem", marginBottom: "0.35rem" }}>{g.title}</h3>
                  <p style={{ color: "#3d4536", fontSize: "0.9rem", margin: 0 }}>{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For field inspectors CTA band */}
        <section className="section-hero" style={{ padding: "3.25rem 1.5rem" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ maxWidth: 560 }}>
              <div style={{ color: "#cddab0", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>For mortgage field inspectors</div>
              <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "0.6rem" }}>Drive-by and interior inspections need coverage too</h2>
              <p style={{ color: "rgba(255,255,255,0.85)", margin: 0 }}>
                If you inspect vacant or distressed properties for mortgage servicers and lenders, general
                liability and professional liability both matter — for very different reasons.
              </p>
            </div>
            <Link href="/mortgage-field-inspector-insurance" className="btn-amber" style={{ whiteSpace: "nowrap" }}>See field inspector coverage →</Link>
          </div>
        </section>

        {/* Sample claims teaser */}
        <section className="section-cream" style={{ padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.25rem" }}>
              <h2 style={{ color: "#3c4a2a", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "0.6rem" }}>The kinds of situations preservation pros think about</h2>
              <p style={{ color: "#3d4536", maxWidth: "640px", margin: "0 auto" }}>
                Illustrative examples only — not a promise of coverage. Whether any claim is covered
                depends on the policy, the facts, the carrier, and your state.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {CLAIMS.map((c) => (
                <div key={c.title} style={{ background: "#fff", border: "1px solid #ddd7c4", borderRadius: "1rem", padding: "1.5rem" }}>
                  <h3 style={{ color: "#55663d", fontSize: "1.1rem", marginBottom: "0.4rem" }}>{c.title}</h3>
                  <p style={{ color: "#3d4536", fontSize: "0.93rem", margin: 0 }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-white" style={{ padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <h2 style={{ color: "#3c4a2a", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "1.5rem", textAlign: "center" }}>Common questions</h2>
            {FAQ.map((f) => (
              <details key={f.q} style={{ borderBottom: "1px solid #ddd7c4", padding: "1rem 0" }}>
                <summary style={{ cursor: "pointer", fontWeight: 700, color: "#2b3324", fontSize: "1.02rem", listStyle: "none" }}>{f.q}</summary>
                <p style={{ color: "#3d4536", marginTop: "0.6rem", marginBottom: 0 }}>{f.a}</p>
              </details>
            ))}
            <div style={{ marginTop: "2rem" }}>
              <DisclaimerNotice />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-hero" style={{ padding: "3.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "0.75rem" }}>Ready to protect your preservation business?</h2>
            <p style={{ color: "rgba(255,255,255,0.88)", marginBottom: "1.75rem" }}>Tell us about your work and we&apos;ll help you line up the right coverage.</p>
            <Link href="/quote" className="btn-amber">Start my quote →</Link>
          </div>
        </section>
      </main>
      <Footer />
      <AccessibilityToggle />
      <StickyQuoteBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
