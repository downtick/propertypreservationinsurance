import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityToggle from "@/components/AccessibilityToggle";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for propertypreservationistinsurance.com — how we collect, use, share, and protect your personal information.",
  alternates: { canonical: "https://propertypreservationistinsurance.com/privacy-policy/" },
};

export default function PrivacyPolicy() {
  const updated = "July 23, 2026";
  return (
    <>
      <Header />
      <main id="main" style={{ background: "#f7f5ee", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", background: "#fff", borderRadius: "1rem", padding: "2.5rem 3rem", boxShadow: "0 2px 12px rgba(32,38,27,0.06)", border: "1px solid #ddd7c4" }}>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "2rem", color: "#3c4a2a", marginBottom: "0.5rem" }}>Privacy Policy</h1>
          <p style={{ color: "#7b8271", fontSize: "0.9rem", marginBottom: "2rem" }}>Last updated: {updated}</p>

          <div className="prose-warm">
            <p>
              <strong>Property Preservationist Insurance</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) operates propertypreservationistinsurance.com (the &ldquo;Site&rdquo;).
              The Site is a lead-generation and referral service that connects property preservationists
              and mortgage field inspectors seeking insurance with licensed insurance professionals.{" "}
              <strong>This Site is not an insurance agency.</strong> By using the Site or submitting a
              form, you agree to this Policy.
            </p>

            <h2>1. Information We Collect</h2>
            <p><strong>Information you provide.</strong> When you request a quote or contact us, we collect the information you submit, which may include:</p>
            <ul>
              <li>Name, email address, and phone number</li>
              <li>Business name, type, and a description of your preservation or inspection services</li>
              <li>Business address, years in business, and number of owners, employees, and subcontractors</li>
              <li>The coverage you&apos;re interested in and your claims history</li>
            </ul>
            <p>
              <strong>Information collected automatically.</strong> When you visit the Site we may
              collect: IP address, browser type, device information, pages viewed, referring URL, and
              similar analytics data via cookies when you consent. See <strong>Cookies</strong> below.
            </p>
            <p>
              We do <strong>not</strong> intentionally collect Social Security numbers, full payment-card
              numbers, or other highly sensitive data through standard quote forms.
            </p>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To connect you with licensed insurance professionals who can quote and issue coverage</li>
              <li>To contact you about your request by phone, text message (SMS), and email</li>
              <li>To operate, secure, and improve the Site, and to comply with legal obligations</li>
            </ul>

            <h2>3. How We Share Your Information</h2>
            <p>
              To provide quotes, we share the information you submit with insurance carriers, licensed
              agents, and partners who can fulfill or follow up on your request. These partners may
              contact you directly under their own privacy policies. We may also share information with
              service providers (hosting, email/SMS delivery, analytics), as required by law, or in
              connection with a business transfer. We do <strong>not</strong> sell your information for
              unrelated third-party advertising.
            </p>

            <h2>4. Consent to Be Contacted (TCPA — Calls &amp; Text Messages)</h2>
            <p>
              By submitting a form with your phone number and checking the consent box, you give your
              prior express written consent for propertypreservationistinsurance.com, its partners, and
              the insurance carriers or agents we connect you with to contact you at the number provided
              — including by automatic telephone dialing system, prerecorded or artificial voice, and text
              message (SMS) — for marketing and servicing of your request.{" "}
              <strong>Consent is not a condition of purchase.</strong> Message frequency varies; message
              and data rates may apply. Reply <strong>STOP</strong> to stop texts and{" "}
              <strong>HELP</strong> for help. We retain a record of your consent (the text shown,
              date/time, and IP address).
            </p>

            <h2>5. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies for site functionality and analytics (including
              Google Analytics, where enabled). You can control cookies through your browser settings and
              opt out of analytics using the control in our footer.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We keep your information only as long as needed to fulfill your request, comply with legal
              obligations, resolve disputes, and enforce agreements — then we delete or de-identify it.
            </p>

            <h2>7. Data Security</h2>
            <p>
              We use reasonable administrative, technical, and physical safeguards, including encryption
              in transit (HTTPS) and access controls. No method of transmission or storage is 100% secure;
              we cannot guarantee absolute security.
            </p>

            <h2>8. Your Privacy Rights</h2>
            <p>
              Depending on where you live (for example California under the CCPA/CPRA, or Virginia,
              Colorado, and Connecticut), you may have the right to access, correct, delete, or restrict
              use of your information, and to opt out of certain sharing. We do not discriminate against
              you for exercising these rights. To exercise any right, email{" "}
              <a href="mailto:privacy@propertypreservationistinsurance.com">privacy@propertypreservationistinsurance.com</a> with
              &ldquo;Privacy Request&rdquo; in the subject line.
            </p>

            <h2>9. Children&apos;s Privacy</h2>
            <p>The Site is not directed to children under 16 and we do not knowingly collect their information.</p>

            <h2>10. Third-Party Links</h2>
            <p>
              The Site links to third-party services (such as Ethos). When you follow these links you are
              subject to those companies&apos; privacy policies. We are not responsible for their data
              practices.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>Changes are effective when posted with a new &ldquo;Last updated&rdquo; date.</p>

            <h2>12. Contact Us</h2>
            <p>
              Questions about this Policy? Email{" "}
              <a href="mailto:privacy@propertypreservationistinsurance.com">privacy@propertypreservationistinsurance.com</a> or use
              our <Link href="/contact">contact form</Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <AccessibilityToggle />
    </>
  );
}
