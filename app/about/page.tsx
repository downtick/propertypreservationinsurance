import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "About Property Preservationist Insurance",
  description:
    "Property Preservationist Insurance connects property preservationists and mortgage field inspectors with insurance professionals — helping you find and request the coverage your work calls for.",
  alternates: { canonical: "https://propertypreservationinsurance.com/about/" },
};

export default function AboutPage() {
  return (
    <ArticleLayout
      title="About Property Preservationist Insurance"
      eyebrow="Who we are"
      intro="We help property preservationists and mortgage field inspectors find and request the right coverage — quickly, and without the runaround."
      ctaLabel="Request a quote →"
    >
      <h2>What we do</h2>
      <p>
        Property Preservationist Insurance is an informational and referral service built specifically
        for property preservationists and mortgage field inspectors. We are{" "}
        <strong>not an insurance agency</strong>. Instead, we help you understand the coverages that
        matter for work on vacant and bank-owned properties — general liability, professional liability
        (E&amp;O), and cyber liability — and connect you with insurance professionals who can quote and
        place the coverage you need.
      </p>

      <h2>Why property preservation and field inspection</h2>
      <p>
        Preserving and inspecting vacant properties has its own risk profile. You&apos;re on properties
        that no one is watching, doing everything from winterizing pipes to mowing overgrown lawns to
        boarding up broken windows — and the reports you file get relied on by banks, mortgage servicers,
        and asset management companies. Generic small-business insurance doesn&apos;t always speak that
        language, so we focus on the coverages preservation and inspection work actually gets asked about.
      </p>

      <h2>How it works</h2>
      <p>
        Tell us about your business on the quote form — the kind of work you do, the properties you
        cover, and the coverage you&apos;re after. We line up the details and someone follows up to help
        you finish.
      </p>

      <h2>Preservationists and field inspectors, both welcome</h2>
      <p>
        Property preservation and mortgage field inspection are closely related but distinct roles.
        Whether you winterize and maintain vacant homes, perform occupancy and condition inspections for
        mortgage servicers, or do both, tell us on the quote form and we&apos;ll factor it in. See our
        pages for <a href="/property-preservation-insurance">property preservationists</a> and{" "}
        <a href="/mortgage-field-inspector-insurance">mortgage field inspectors</a>.
      </p>

      <h2>A note on advice</h2>
      <p>
        Everything here is general information, not insurance, legal, or financial advice. Coverage,
        terms, and availability vary by carrier, state, and individual risk, and nothing on this site
        binds or guarantees coverage. Have a question? <a href="/contact">Contact us</a> any time.
      </p>
    </ArticleLayout>
  );
}
