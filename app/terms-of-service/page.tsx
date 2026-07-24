import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityToggle from "@/components/AccessibilityToggle";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for propertypreservationistinsurance.com.",
  alternates: { canonical: "https://propertypreservationistinsurance.com/terms-of-service/" },
};

export default function TermsOfService() {
  const updated = "July 23, 2026";
  return (
    <>
      <Header />
      <main id="main" style={{ background: "#f7f5ee", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", background: "#fff", borderRadius: "1rem", padding: "2.5rem 3rem", boxShadow: "0 2px 12px rgba(32,38,27,0.06)", border: "1px solid #ddd7c4" }}>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "2rem", color: "#3c4a2a", marginBottom: "0.5rem" }}>Terms of Service</h1>
          <p style={{ color: "#7b8271", fontSize: "0.9rem", marginBottom: "2rem" }}>Last updated: {updated}</p>

          <div className="prose-warm">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
              propertypreservationistinsurance.com (the &ldquo;Site&rdquo;), operated by Property
              Preservationist Insurance (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By
              accessing or using the Site, you agree to these Terms. If you do not agree, do not use the
              Site.
            </p>

            <h2>1. What This Site Is (and Is Not)</h2>
            <p>
              The Site provides general information and a way to request insurance quotes. We connect you
              with licensed insurance carriers and agents.{" "}
              <strong>We are not the insurance carrier and do not issue policies, bind coverage, or
              guarantee that coverage will be offered.</strong> Any policy is issued solely by the
              applicable carrier, subject to its underwriting, terms, and approval.
            </p>

            <h2>2. No Insurance, Legal, or Financial Advice</h2>
            <p>
              Content on the Site is for general informational purposes only and is not insurance, legal,
              tax, or financial advice. Coverage descriptions are summaries; the actual policy documents
              control. Consult a licensed professional and read the actual policy before relying on any
              coverage.
            </p>

            <h2>3. Quote Requests</h2>
            <p>
              When you submit a quote or contact form, you authorize us to share your information with
              insurance carriers, agents, and partners to process your request, as described in our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>. Quotes are estimates, are not offers of
              insurance, and may change based on underwriting and verification.
            </p>
            <p>
              You agree that the information you provide is accurate and complete and that you are at
              least 18 years old and authorized to submit it.
            </p>

            <h2>4. Consent to Be Contacted</h2>
            <p>
              By submitting a form you consent to be contacted as described in our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>, including by phone, text message (SMS),
              and email. Consent to automated calls/texts is not a condition of any purchase. You may opt
              out at any time (reply STOP to texts; contact us to stop calls).
            </p>

            <h2>5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Site for any unlawful, fraudulent, or harmful purpose;</li>
              <li>Submit false information or another person&apos;s information without authorization;</li>
              <li>Attempt to gain unauthorized access to, probe, scan, or disrupt the Site or its systems;</li>
              <li>Use bots, scrapers, or automated means to access the Site except standard search indexing;</li>
              <li>Introduce malware or interfere with the Site&apos;s operation.</li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>
              The Site and its content (text, graphics, logos, design) are owned by Property
              Preservationist Insurance or its licensors and are protected by applicable laws. You may not
              copy, reproduce, or distribute Site content without our written permission, except for your
              personal, non-commercial use.
            </p>

            <h2>7. Third-Party Links and Services</h2>
            <p>
              The Site may link to or integrate third-party sites and services (including carrier and
              partner sites and quoting tools). We do not control and are not responsible for their
              content, products, or practices. Your dealings with them are solely between you and the
              third party.
            </p>

            <h2>8. Disclaimers</h2>
            <p>
              THE SITE AND ALL CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;
              WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE
              UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT ANY QUOTE, RATE, OR COVERAGE WILL BE AVAILABLE
              OR ACCURATE.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, PROPERTY PRESERVATIONIST INSURANCE AND ITS
              OFFICERS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR DATA, ARISING FROM YOUR USE OF
              THE SITE OR ANY QUOTE, CARRIER, OR PARTNER. OUR TOTAL LIABILITY FOR ANY CLAIM RELATING TO THE
              SITE WILL NOT EXCEED USD $100.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Property Preservationist Insurance from any claims,
              damages, or expenses (including reasonable attorneys&apos; fees) arising from your misuse of
              the Site or violation of these Terms.
            </p>

            <h2>11. Governing Law and Disputes</h2>
            <p>
              These Terms are governed by the laws of the State of Nevada, without regard to
              conflict-of-law rules.{" "}
              <em>[Counsel to confirm governing state/county and dispute-resolution method before launch.]</em>
            </p>

            <h2>12. Changes to These Terms</h2>
            <p>
              We may update these Terms at any time. Changes are effective when posted with a new
              &ldquo;Last updated&rdquo; date. Your continued use of the Site means you accept the
              updated Terms.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              Property Preservationist Insurance
              <br />
              Email: <a href="mailto:legal@propertypreservationistinsurance.com">legal@propertypreservationistinsurance.com</a>
              <br />
              Or use our <Link href="/contact">contact form</Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <AccessibilityToggle />
    </>
  );
}
