import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityToggle from "@/components/AccessibilityToggle";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "General information disclaimer for propertypreservationistinsurance.com — the Content on this site is educational only and does not constitute insurance, legal, or financial advice.",
  alternates: { canonical: "https://propertypreservationistinsurance.com/disclaimer/" },
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main id="main" style={{ background: "#f7f5ee", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", background: "#fff", borderRadius: "1rem", padding: "2.5rem 3rem", boxShadow: "0 2px 12px rgba(32,38,27,0.06)", border: "1px solid #ddd7c4" }}>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "2rem", color: "#3c4a2a", marginBottom: "1.5rem" }}>Disclaimer</h1>

          <div className="prose-warm">
            <h2>General Information Disclaimer</h2>
            <p>
              The information published on this website, including all blog articles, posts, summaries,
              coverage explanations, claim scenarios, policy language references, and educational content
              (collectively, &ldquo;Content&rdquo;), is provided solely for general educational and
              informational purposes. The Content does not constitute, and shall not be construed as, legal,
              insurance, financial, tax, or professional advice of any kind.
            </p>

            <p>
              <strong>No Coverage Is Afforded or Implied.</strong> No insurance coverage is bound, offered,
              confirmed, amended, extended, modified, or implied by anything contained in or referenced by
              this website or its Content. Any references to insurance coverage, policy provisions,
              endorsements, exclusions, limits, or claim outcomes are intended solely as general
              illustrative examples. Coverage under any insurance policy is determined exclusively by the
              actual terms, conditions, exclusions, endorsements, declarations, and limits of a duly issued
              policy, as interpreted under applicable law. Nothing herein is intended to, nor shall it,
              alter, supplement, or supersede the terms of any insurance policy.
            </p>

            <p>
              <strong>Not an Act of Insurance.</strong> The Content on this website does not constitute the
              sale, solicitation, negotiation, or offer of any insurance product or coverage, and nothing
              herein shall create or be deemed to create an insurance policy, a binder of coverage, an
              agency relationship, a producer-client relationship, or any other contractual obligation
              between the author, publisher, or any affiliated party and any reader or visitor.
            </p>

            <p>
              <strong>Jurisdictional and Regulatory Variation.</strong> Insurance laws, regulations, policy
              forms, coverage requirements, and underwriting practices vary materially by state,
              jurisdiction, carrier, and individual risk characteristics. Content on this website may not
              reflect the laws or requirements applicable in your state or jurisdiction, and should not be
              relied upon as representative of the regulatory environment in any particular location.
              Readers should consult a licensed insurance professional in their jurisdiction regarding their
              specific needs and circumstances.
            </p>

            <p>
              <strong>No Guarantee of Accuracy or Currency.</strong> The Content is provided as of the date
              of publication and may not reflect subsequent changes in law, regulation, policy forms,
              carrier guidelines, or industry practice. The author and publisher make no representation or
              warranty, express or implied, regarding the accuracy, completeness, timeliness, or fitness for
              a particular purpose of any Content. Insurance products, policy language, and regulatory
              requirements are subject to change without notice.
            </p>

            <p>
              <strong>Independent Professional Advice Required.</strong> Nothing on this website is a
              substitute for the advice of a licensed insurance agent, broker, attorney, or other qualified
              professional with knowledge of your specific facts and circumstances. Readers are strongly
              encouraged to consult licensed professionals before making any insurance-related decision and
              to review actual policy documents in their entirety prior to purchase or reliance.
            </p>

            <p>
              <strong>Illustrative Examples Only.</strong> Any examples, scenarios, hypotheticals, or case
              studies used in this Content are provided solely for purposes of illustration and general
              education. They are not representations that similar coverage, outcomes, or terms would apply
              to any specific person, business, property, claim, or loss. Reliance on such examples for any
              purpose other than general understanding is expressly discouraged.
            </p>

            <p>
              <strong>No Third-Party Endorsement.</strong> References to insurance carriers, policy
              programs, industry organizations, or third-party resources do not constitute endorsement,
              recommendation, or confirmation of the accuracy, completeness, or current availability of any
              product, program, or information offered by such third parties.
            </p>

            <p>
              <strong>Limitation of Liability.</strong> To the fullest extent permitted by applicable law,
              the author, publisher, and any affiliated parties expressly disclaim all liability for any
              loss, damage, claim, or expense of any nature — direct, indirect, incidental, consequential,
              or otherwise — arising out of or related to any reader&apos;s reliance on the Content of this
              website for any purpose. Use of this website and its Content is at the reader&apos;s sole risk.
            </p>

            <p>
              By accessing or using this website, you acknowledge that you have read, understood, and agree
              to the terms of this disclaimer.
            </p>

            <p style={{ marginTop: "2rem" }}>
              See also our <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
              <Link href="/terms-of-service">Terms of Service</Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <AccessibilityToggle />
    </>
  );
}
