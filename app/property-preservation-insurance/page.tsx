import type { Metadata } from "next";
import Image from "next/image";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Property Preservation Insurance",
  description:
    "Yes, insurance quotes are available for property preservationists. General liability, professional liability, and cyber liability for winterizing, lawn maintenance, handyman work, and trash-outs on vacant properties.",
  alternates: { canonical: "https://propertypreservationinsurance.com/property-preservation-insurance/" },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Property Preservation Insurance"
      eyebrow="For Property Preservationists"
      intro="Winterizing, mowing, handyman repairs, trash-outs, and securing vacant and bank-owned homes — property preservation work has its own risk profile. Here's what to know."
      ctaLabel="Get a property preservation quote →"
    >
      <div style={{ position: "relative", borderRadius: "0.75rem", overflow: "hidden", aspectRatio: "16/9", marginBottom: "1.5rem" }}>
        <Image
          src="https://images.unsplash.com/photo-1725379448168-e33c5e09d47e?auto=format&fit=crop&w=1000&q=75"
          alt="A for-sale sign in front of a bank-owned property awaiting preservation work"
          fill
          sizes="700px"
          style={{ objectFit: "cover" }}
        />
      </div>

      <h2>Yes, quotes are available for property preservationists</h2>
      <p>
        Property preservation is its own field, and quotes are available specifically for it. If you
        winterize vacant homes, act as a handyman on foreclosed properties, mow lawns, do basic
        landscaping, or handle light janitorial work for banks, mortgage servicers, asset management
        companies, or property preservation companies, general liability, professional liability
        (E&amp;O), and cyber liability quotes are all available.
      </p>

      <h2>What property preservation work involves</h2>
      <p>
        Property preservationists keep vacant, foreclosed, and bank-owned properties from deteriorating —
        and get them ready for sale or re-occupancy. That typically includes:
      </p>
      <ul>
        <li><strong>Winterizing</strong> — draining water lines, shutting off water, and protecting the property from freeze damage.</li>
        <li><strong>Handyman work</strong> — repairs, board-ups, lock changes, and general maintenance.</li>
        <li><strong>Lawn maintenance and basic landscaping</strong> — mowing, trimming, and keeping the property from looking abandoned.</li>
        <li><strong>Debris removal and trash-outs</strong> — clearing a property left in disrepair.</li>
        <li><strong>Light janitorial work</strong> — cleaning to prep for a showing, sale, or re-occupancy.</li>
      </ul>
      <p>All of this work is performed on <strong>vacant</strong> properties — not occupied family homes.</p>

      <div style={{ position: "relative", borderRadius: "0.75rem", overflow: "hidden", aspectRatio: "16/9", margin: "1.75rem 0" }}>
        <Image
          src="https://images.unsplash.com/photo-1771532457038-91d18e965227?auto=format&fit=crop&w=1000&q=75"
          alt="A distressed vacant house with broken windows and a damaged roof in need of preservation work"
          fill
          sizes="700px"
          style={{ objectFit: "cover" }}
        />
      </div>

      <h2>Why GL, professional liability, and cyber all matter</h2>
      <p>
        <a href="/general-liability-insurance">General liability</a> is the foundation — it&apos;s the
        coverage most property preservation companies and asset managers ask their vendors to carry, and it
        responds to third-party bodily injury and property damage during your work.{" "}
        <a href="/professional-liability-insurance">Professional liability (E&amp;O)</a> matters because
        this work is documented — a winterization job or a work order marked complete gets relied on by
        the servicer.{" "}
        <a href="/cyber-liability-insurance">Cyber liability</a> matters because so much of the
        reporting today happens through vendor portals and mobile apps.
      </p>

      <h2>Eligibility</h2>
      <p>
        Quotes are generally available whether you&apos;re a one-person operation or a crew with employees
        and 1099 subcontractors. On the quote form, we&apos;ll ask about the number of owners active in the
        business, any employees, and any subcontractors — including how much you pay subcontractors
        annually, if applicable — so the details are accurate from the start.
      </p>

      <h2>Do you also do field inspections?</h2>
      <p>
        Some preservationists also perform occupancy and condition inspections for mortgage servicers.
        That&apos;s a closely related but distinct role — see our{" "}
        <a href="/mortgage-field-inspector-insurance">mortgage field inspector page</a> for the details, and
        tell us about all the work you do on the quote form.
      </p>
    </ArticleLayout>
  );
}
