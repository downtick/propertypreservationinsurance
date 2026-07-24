import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "General Liability Insurance for Property Preservation",
  description:
    "General liability is the foundation of coverage for property preservationists and field inspectors — third-party bodily injury and property damage on vacant and bank-owned properties. Quotes available.",
  alternates: { canonical: "https://propertypreservationinsurance.com/general-liability-insurance/" },
};

export default function Page() {
  return (
    <ArticleLayout
      title="General Liability Insurance for Property Preservation"
      eyebrow="Coverage · General Liability"
      intro="General liability is the coverage most property preservation companies, asset managers, and mortgage servicers ask their vendors to carry. Here's what it's built to respond to."
      ctaLabel="Get a general liability quote →"
      listItems={[
        "A trip-and-fall while mowing or trimming",
        "A window broken while boarding up a property",
        "A neighbor's fence damaged during a trash-out",
        "A slip on ice during a winterization visit",
        "Equipment left behind that injures a passerby",
      ]}
    >
      <h2>Quotes are available for property preservation and field inspection work</h2>
      <p>
        Yes — general liability quotes are available for property preservationists and mortgage field
        inspectors working on vacant, foreclosed, REO, and bank-owned properties. Whether you winterize,
        mow, do handyman repairs, clean out debris, secure a property, or perform occupancy and condition
        inspections, general liability is typically the first coverage to line up.
      </p>

      <h2>What it's designed to respond to</h2>
      <p>
        General liability responds to claims of third-party <strong>bodily injury</strong> or{" "}
        <strong>property damage</strong> arising out of your work — not injuries to you or damage to your
        own equipment. For property preservation and field inspection work, that commonly looks like:
      </p>
      <ol className="listicle">
        <li>
          <strong>A trip-and-fall while mowing or trimming.</strong> A neighbor, passerby, or the property
          owner&apos;s representative is hurt on the property while you&apos;re doing yard work.
        </li>
        <li>
          <strong>A window broken while boarding up.</strong> Securing a vacant property sometimes damages
          the property itself or an adjacent one.
        </li>
        <li>
          <strong>A neighbor&apos;s property damaged during a trash-out.</strong> Debris removal and
          hauling can create exposure beyond the property line.
        </li>
        <li>
          <strong>A slip on ice during a winterization visit.</strong> Anyone present at the property while
          you work could be hurt.
        </li>
        <li>
          <strong>Equipment left on-site that injures someone.</strong> A ladder, tool, or material left
          behind poses risk even after you&apos;ve gone.
        </li>
      </ol>

      <h2>Why companies and servicers ask for it</h2>
      <p>
        Property preservation companies, asset management companies, and mortgage servicers commonly
        require vendors and subcontractors to carry general liability — and to provide a certificate of
        insurance before work begins. It&apos;s the baseline coverage that lets you take on work orders
        from most national and regional preservation companies.
      </p>

      <h2>What it doesn't cover</h2>
      <p>
        General liability is not built for claims that your <em>work itself</em> — a report, an inspection,
        or a job — fell short. That&apos;s the role of{" "}
        <a href="/professional-liability-insurance">professional liability (E&amp;O)</a>. And it doesn&apos;t
        respond to data or electronic-record exposures, which{" "}
        <a href="/cyber-liability-insurance">cyber liability</a> is built for.
      </p>

      <h2>Who this fits</h2>
      <p>
        General liability tends to fit property preservationists and mortgage field inspectors of any
        size — from a single owner-operator to a crew with employees and 1099 subcontractors. Tell us
        about your business, the tasks you perform, and your subcontractor use on the{" "}
        <a href="/quote">quote form</a>, and we&apos;ll help you figure out what fits.
      </p>
    </ArticleLayout>
  );
}
