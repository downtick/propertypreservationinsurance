import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Professional Liability (E&O) Insurance for Property Preservation",
  description:
    "Professional liability protects property preservationists and field inspectors against claims that a report, inspection, or job was performed incorrectly. Here's how it differs from general liability.",
  alternates: { canonical: "https://propertypreservationistinsurance.com/professional-liability-insurance/" },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Professional Liability (E&O) Insurance for Property Preservation"
      eyebrow="Coverage · Professional Liability"
      intro="General liability handles the person who slips on the sidewalk. Professional liability handles a different problem: the servicer who says your report, inspection, or work order was wrong."
      ctaLabel="Get a professional liability quote →"
      listItems={[
        "A property marked 'winterized' that wasn't",
        "A condition report that missed visible damage",
        "An occupancy inspection that got it wrong",
        "A work order marked complete when it wasn't",
        "A missed hazard that led to a claim",
      ]}
    >
      <h2>Quotes are available for property preservation and field inspection work</h2>
      <p>
        Yes — professional liability (also called errors and omissions, or &ldquo;E&amp;O&rdquo;) quotes
        are available for property preservationists and mortgage field inspectors. Because so much of this
        work is <em>reported</em> — a completed work order, a condition report, an occupancy
        determination — the accuracy of that reporting is its own source of risk.
      </p>

      <h2>A different kind of risk</h2>
      <p>
        Professional liability protects against claims that you failed to perform the professional service
        you were hired for — or performed it incorrectly. Where general liability is about physical harm to
        people and property, professional liability is about the <strong>accuracy and completeness of your
        work</strong> and the financial harm a servicer, asset manager, or property owner says resulted from
        a failure to deliver it correctly.
      </p>

      <h2>5 situations professional liability is built for</h2>
      <ol className="listicle">
        <li>
          <strong>A property marked &ldquo;winterized&rdquo; that wasn&apos;t.</strong> If a pipe bursts
          after a job is reported complete but wasn&apos;t performed correctly, the servicer may allege the
          reporting — not just the labor — was the problem.
        </li>
        <li>
          <strong>A condition report that missed visible damage.</strong> Inspectors and preservationists
          are relied on to accurately document what they find.
        </li>
        <li>
          <strong>An occupancy inspection that got it wrong.</strong> Mortgage field inspectors confirm
          occupancy and condition — a wrong determination can have real consequences for the servicer.
        </li>
        <li>
          <strong>A work order marked complete when it wasn&apos;t.</strong> Documentation that
          doesn&apos;t match the actual work performed is a classic E&amp;O exposure.
        </li>
        <li>
          <strong>A missed hazard that led to a claim.</strong> If an inspection should have flagged a
          hazard and didn&apos;t, the failure to report can itself become the basis of a claim.
        </li>
      </ol>

      <h2>How it differs from general liability</h2>
      <p>
        The two coverages don&apos;t overlap — they cover different problems, which is exactly why
        preservation and inspection businesses that want to be well protected often carry both. General
        liability responds when your <em>presence or physical work</em> hurts someone or damages property.
        Professional liability responds when your <em>service or reporting</em> is alleged to have fallen
        short. See{" "}
        <a href="/general-liability-insurance">general liability for property preservation</a> for the
        other half of the picture.
      </p>

      <h2>When it matters most</h2>
      <p>
        Professional liability tends to matter most for businesses whose work is documented and relied on
        by a third party — which describes most property preservation and field inspection work by
        definition. If you complete work orders, file condition reports, or make occupancy determinations
        that a servicer, asset manager, or lender relies on, it&apos;s worth considering alongside general
        liability. To see how it fits with your other coverage,{" "}
        <a href="/quote">request a quote</a> and we&apos;ll help you decide.
      </p>
    </ArticleLayout>
  );
}
