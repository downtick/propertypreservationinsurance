import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

const SITE = "https://propertypreservationinsurance.com";
const PATH = "/trade-pro-directory/";
const UTM = "utm_source=propertypreservationinsurance&utm_medium=referral&utm_campaign=resource";
const TRADE_PRO_URL = `https://www.tradeprodirectory.com/?${UTM}`;
const JOIN_URL = `https://www.tradeprodirectory.com/join?${UTM}`;
const CLAIM_URL = `https://www.tradeprodirectory.com/claim-your-listing?${UTM}`;

export const metadata: Metadata = {
  title: "Trade Pro Directory Listing for Property Preservation Businesses",
  description:
    "List your property preservation business on Trade Pro Directory. Member and Crew listings show your phone number and website and get quote requests by email.",
  alternates: { canonical: `${SITE}${PATH}` },
};

const PLANS = [
  {
    name: "Free",
    price: "$0",
    items: ["Business name, trade and city in 1 trade", "No phone number, website or quote requests"],
  },
  {
    name: "Member",
    price: "$149/yr",
    items: [
      "Your phone number and website shown",
      "Quote requests sent to your email",
      "List under up to 20 trades",
      "Ranked above free listings",
      "17 member perks",
      "Guides and templates",
      "Subcontractor board",
    ],
  },
  {
    name: "Crew",
    price: "$299/yr",
    items: [
      "Top placement",
      "Photo gallery and videos",
      "Special offers",
      "Hiring posts",
    ],
  },
];

const FAQ = [
  {
    q: "How do customers reach me through Trade Pro Directory?",
    a: "Customers search by trade and city and find your listing. On Member and Crew listings, they see your phone number and website and can send a quote request that goes to your business email.",
  },
  {
    q: "Is Trade Pro Directory part of my insurance?",
    a: "No. Trade Pro Directory is a separate membership directory. It is not part of any insurance policy and does not change your coverage or your quote.",
  },
  {
    q: "What if it isn't a fit?",
    a: "Paid plans have a 7-day money-back guarantee on the first payment.",
  },
  {
    q: "My business is already listed. What do I do?",
    a: "If your business already appears in the directory, claim the existing listing for free instead of creating a new one, then upgrade to Member or Crew to show your phone number and website and receive quote requests.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function ListCta({ label, href = JOIN_URL }: { label: string; href?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="btn-amber">
      {label} →
    </a>
  );
}

export default function TradeProDirectoryPage() {
  return (
    <ArticleLayout
      title="Get your property preservation business listed on Trade Pro Directory"
      eyebrow="Resource for preservation pros"
      intro="Trade Pro Directory is a membership directory for trade businesses. Customers find a pro by trade and city and send a quote request straight to the business."
      ctaLabel="Get an insurance quote →"
      extraJsonLd={faqLd}
    >
      <p
        style={{
          background: "#f7f5ee",
          border: "1px solid #ddd7c4",
          borderRadius: "0.5rem",
          padding: "0.9rem 1.1rem",
          fontSize: "0.92rem",
        }}
      >
        <strong>Please note:</strong> Trade Pro Directory is separate from your insurance and is not
        part of any policy. Joining it does not change, add to, or replace your coverage. Trade Pro
        Directory is a partner of PropertyPreservationInsurance.com.
      </p>

      <h2>What is Trade Pro Directory?</h2>
      <p>
        <a href={TRADE_PRO_URL} target="_blank" rel="noopener noreferrer">Trade Pro Directory</a>{" "}
        is an online membership directory for trade businesses. A customer picks a trade and a city,
        finds the businesses listed there, and sends a quote request to the one they want.
      </p>
      <p>
        Property preservation is one of the directory&apos;s trades, so banks, asset managers,
        property owners and realtors looking for preservation work in their area can find your
        business under the category that fits it.
      </p>

      <h2>Plans</h2>
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          margin: "1rem 0 1.5rem",
        }}
      >
        {PLANS.map((p) => (
          <div
            key={p.name}
            style={{ border: "1px solid #ddd7c4", borderRadius: "0.75rem", padding: "1.25rem", background: "#fbfaf5" }}
          >
            <h3 style={{ marginTop: 0, marginBottom: "0.2rem" }}>{p.name}</h3>
            <p style={{ fontSize: "1.45rem", fontWeight: 700, color: "#3c4a2a", margin: "0 0 0.6rem" }}>{p.price}</p>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: "0.95rem" }}>
              {p.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p>
        Preservation companies often do more than one kind of work: trash-outs, lawn care,
        winterization, lock changes, handyman repairs. The Member plan lets you list under up to 20
        trades instead of just one.
      </p>

      <h2>7-day money-back guarantee</h2>
      <p>
        Paid plans come with a 7-day money-back guarantee on your first payment. If it isn&apos;t a
        fit, ask for your money back within the first week.
      </p>

      <h2>Already listed? Claim your listing</h2>
      <p>
        Your business may already appear in the directory. If it does, you can claim the listing to
        take control of it and update your details.
      </p>

      <div
        style={{
          margin: "2rem 0 1rem",
          background: "#eef1e2",
          border: "1px solid #ddd7c4",
          borderRadius: "1rem",
          padding: "1.75rem 1.25rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginTop: 0 }}>List your preservation business</h2>
        <p>
          Choose Member or Crew so customers see your phone number and website and can send you quote
          requests. Already listed? Claim your listing first, then upgrade.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
          <ListCta label="See plans and join" />
          <a
            href={CLAIM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber"
            style={{ background: "#fff", color: "#3c4a2a", border: "1px solid #ddd7c4" }}
          >
            Claim your listing →
          </a>
        </div>
        <p style={{ fontSize: "0.8rem", color: "#7b8271", marginTop: "0.75rem", marginBottom: 0 }}>
          Opens in a new tab. Plan details may change; check the Trade Pro Directory site for current
          terms.
        </p>
      </div>

      <h2>Common questions</h2>
      {FAQ.map((f) => (
        <details key={f.q} style={{ borderBottom: "1px solid #ddd7c4", padding: "0.85rem 0" }}>
          <summary style={{ fontWeight: 700, cursor: "pointer", color: "#3c4a2a" }}>{f.q}</summary>
          <p style={{ marginTop: "0.6rem", marginBottom: 0 }}>{f.a}</p>
        </details>
      ))}
    </ArticleLayout>
  );
}
