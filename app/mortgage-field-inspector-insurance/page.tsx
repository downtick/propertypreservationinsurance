import type { Metadata } from "next";
import Image from "next/image";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Mortgage Field Inspector Insurance",
  description:
    "Yes, insurance quotes are available for mortgage field inspectors. General liability, professional liability, and cyber liability for drive-by and interior occupancy and condition inspections.",
  alternates: { canonical: "https://propertypreservationistinsurance.com/mortgage-field-inspector-insurance/" },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Mortgage Field Inspector Insurance"
      eyebrow="For Mortgage Field Inspectors"
      intro="Drive-by and interior inspections confirming occupancy and condition for mortgage servicers and lenders — field inspection work has its own risk profile, closely related to but distinct from property preservation."
      ctaLabel="Get a field inspector quote →"
    >
      <div style={{ position: "relative", borderRadius: "0.75rem", overflow: "hidden", aspectRatio: "16/9", marginBottom: "1.5rem" }}>
        <Image
          src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1000&q=75"
          alt="A house viewed through a magnifying glass, representing a mortgage field inspection"
          fill
          sizes="700px"
          style={{ objectFit: "cover" }}
        />
      </div>

      <h2>Yes, quotes are available for mortgage field inspectors</h2>
      <p>
        Mortgage field inspection is its own field, and quotes are available specifically for it. If you
        perform drive-by or interior inspections on vacant, foreclosed, or distressed properties to
        confirm occupancy and condition for mortgage servicers or lenders, general liability, professional
        liability (E&amp;O), and cyber liability quotes are all available.
      </p>

      <h2>What mortgage field inspection work involves</h2>
      <p>
        A mortgage field inspector visits a property — often vacant, foreclosed, or in default — and
        reports back on what they find. That typically includes:
      </p>
      <ul>
        <li><strong>Occupancy verification</strong> — confirming whether a property is occupied or vacant.</li>
        <li><strong>Condition reporting</strong> — documenting the state of repair, damage, and any hazards.</li>
        <li><strong>Photo documentation</strong> — capturing dated, often GPS-tagged photos as evidence.</li>
        <li><strong>Drive-by or interior inspections</strong> — depending on the assignment and access.</li>
      </ul>
      <p>
        Field inspection work overlaps with <a href="/property-preservation-insurance">property
        preservation</a> — the same companies often need both — but it&apos;s a distinct role focused on
        reporting rather than physical maintenance.
      </p>

      <h2>Why professional liability matters especially here</h2>
      <p>
        Field inspection work is, at its core, a reporting job — the mortgage servicer relies on your
        determination of occupancy and condition to make decisions. If a report turns out to be wrong, or a
        hazard goes unreported,{" "}
        <a href="/professional-liability-insurance">professional liability (E&amp;O)</a> is the coverage
        built to respond to that kind of claim. It&apos;s worth carrying alongside{" "}
        <a href="/general-liability-insurance">general liability</a>, which covers the physical side —
        being on someone else&apos;s property, walking the grounds, and accessing the interior.
      </p>

      <h2>Cyber exposure in field inspection</h2>
      <p>
        Field inspection work is increasingly app-based — logging into a client&apos;s inspection platform,
        uploading GPS-tagged photos, and submitting reports electronically. That data flow is exactly the
        kind of exposure <a href="/cyber-liability-insurance">cyber liability</a> is designed to address.
      </p>

      <h2>Eligibility</h2>
      <p>
        Quotes are generally available whether you inspect part-time or run a crew of inspectors. On the
        quote form, we ask whether you do mortgage field inspection work specifically — in addition to the
        general description of your business — so the details are captured accurately from the start.
      </p>
    </ArticleLayout>
  );
}
