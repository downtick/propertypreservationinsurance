import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityToggle from "@/components/AccessibilityToggle";
import DisclaimerNotice from "@/components/DisclaimerNotice";

const SITE = "https://propertypreservationinsurance.com";
const PUBLISHED = "2026-07-23";

/**
 * Shared layout for content / coverage / guide pages.
 * Renders the olive hero, a centered prose column, an inline disclaimer,
 * and a closing CTA. Pass the article body as children (use className="prose-warm").
 *
 * Emits Article + BreadcrumbList JSON-LD automatically. Pass `listItems` to also
 * emit an ItemList, or `extraJsonLd` for any custom schema (e.g. FAQPage).
 */
export default function ArticleLayout({
  title,
  intro,
  eyebrow,
  children,
  ctaLabel = "Get a quote →",
  listItems,
  extraJsonLd,
}: {
  title: string;
  intro?: string;
  eyebrow?: string;
  children: React.ReactNode;
  ctaLabel?: string;
  listItems?: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extraJsonLd?: Record<string, any>;
}) {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: intro,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    author: { "@type": "Organization", name: "Property Preservationist Insurance", url: `${SITE}/` },
    publisher: {
      "@type": "Organization",
      name: "Property Preservationist Insurance",
      logo: { "@type": "ImageObject", url: `${SITE}/icon.svg` },
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: title },
    ],
  };

  const itemListLd = listItems
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: listItems.map((name, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name,
        })),
      }
    : null;

  const schemas = [articleLd, breadcrumbLd, itemListLd, extraJsonLd].filter(Boolean);

  return (
    <>
      <Header />
      <main id="main" style={{ background: "#f7f5ee" }}>
        <section className="section-hero" style={{ padding: "3.5rem 1.5rem 3rem" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
            {eyebrow && (
              <span className="trust-badge" style={{ marginBottom: "1rem" }}>{eyebrow}</span>
            )}
            <h1 style={{ color: "#fff", fontSize: "clamp(1.9rem, 4vw, 2.7rem)", marginBottom: intro ? "1rem" : 0, lineHeight: 1.15 }}>
              {title}
            </h1>
            {intro && (
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.08rem", lineHeight: 1.7, maxWidth: "640px", margin: "0 auto" }}>
                {intro}
              </p>
            )}
          </div>
        </section>

        {/* Breadcrumb trail */}
        <nav aria-label="Breadcrumb" style={{ maxWidth: "760px", margin: "0 auto", padding: "1rem 1.5rem 0", fontSize: "0.85rem", color: "#7b8271" }}>
          <Link href="/" style={{ color: "#55663d" }}>Home</Link>
          <span aria-hidden="true"> › </span>
          <span>{title}</span>
        </nav>

        <section style={{ padding: "1rem 1.5rem 1rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ marginBottom: "1.25rem" }}>
              <DisclaimerNotice />
            </div>
            <article className="prose-warm" style={{ background: "#fff", borderRadius: "1rem", padding: "2.5rem", border: "1px solid #ddd7c4" }}>
              {children}
              <div style={{ marginTop: "2rem", textAlign: "center" }}>
                <Link href="/quote" className="btn-primary">{ctaLabel}</Link>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
      <AccessibilityToggle />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
    </>
  );
}
