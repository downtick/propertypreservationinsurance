import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Cyber Liability Insurance for Property Preservation",
  description:
    "Cyber liability covers the data exposure that comes with digital work orders, property photos, and inspection reports for property preservationists and mortgage field inspectors.",
  alternates: { canonical: "https://propertypreservationistinsurance.com/cyber-liability-insurance/" },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Cyber Liability Insurance for Property Preservation"
      eyebrow="Coverage · Cyber Liability"
      intro="Work orders, property photos, GPS-tagged inspection reports, client portals — property preservation and field inspection work runs on data. Cyber liability is built for the exposure that creates."
      ctaLabel="Get a cyber liability quote →"
      listItems={[
        "A phishing email compromises your client portal login",
        "A laptop or tablet with property data is lost or stolen",
        "A ransomware attack locks your scheduling system",
        "A data breach exposes client or homeowner information",
        "A vendor portal account is used fraudulently",
      ]}
    >
      <h2>Quotes are available for property preservation and field inspection work</h2>
      <p>
        Yes — cyber liability quotes are available for property preservationists and mortgage field
        inspectors. Even a small preservation business today handles client portals, digital work orders,
        GPS-tagged photos, and electronic condition reports — all of which create the kind of data exposure
        cyber liability is designed for.
      </p>

      <h2>What it's designed to respond to</h2>
      <p>
        Cyber liability generally helps with the costs that follow a data breach or cyber incident,
        which may include notification costs, credit monitoring, legal expenses, and business interruption.
        For a property preservation or field inspection business, the exposures tend to look like:
      </p>
      <ul>
        <li>
          <strong>Phishing and credential compromise.</strong> Your login to a national preservation
          company&apos;s vendor portal, or your own scheduling and invoicing software, is compromised.
        </li>
        <li>
          <strong>Lost or stolen devices.</strong> A laptop, tablet, or phone loaded with property
          addresses, client information, and inspection photos is lost or stolen.
        </li>
        <li>
          <strong>Ransomware.</strong> Your systems are locked down, halting your ability to receive and
          complete work orders.
        </li>
        <li>
          <strong>Data breaches.</strong> Client or homeowner information you store is exposed.
        </li>
      </ul>

      <h2>Why it matters for this work specifically</h2>
      <p>
        Property preservation and field inspection are increasingly digital businesses — you may log into
        multiple national vendor portals, use mobile apps to file reports with GPS-stamped photos, and
        store property and client data across several systems. Each login and each stored record is a
        potential point of exposure, which is exactly the gap cyber liability is meant to help close.
      </p>

      <h2>How it fits with general liability and professional liability</h2>
      <p>
        Cyber liability covers a different exposure than{" "}
        <a href="/general-liability-insurance">general liability</a> (physical injury and property
        damage) or <a href="/professional-liability-insurance">professional liability</a> (errors in the
        service or reporting itself). Many preservation and inspection businesses carry all three, since
        each responds to a distinct kind of claim.
      </p>

      <h2>Getting a quote</h2>
      <p>
        Tell us about your business and how you handle client and property data on the{" "}
        <a href="/quote">quote form</a>, and select cyber liability as a coverage of interest. We&apos;ll
        line up the details and someone will follow up to help.
      </p>
    </ArticleLayout>
  );
}
