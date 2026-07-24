import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityToggle from "@/components/AccessibilityToggle";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a property preservation or mortgage field inspection insurance quote. General liability, professional liability (E&O), and cyber liability for work on vacant and bank-owned properties.",
  alternates: { canonical: "https://propertypreservationistinsurance.com/quote/" },
};

export default function QuotePage() {
  return (
    <>
      <Header />
      <main id="main" style={{ background: "#f7f5ee", padding: "3rem 1.5rem 4rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", color: "#3c4a2a", marginBottom: "0.6rem" }}>
              Request Your Quote
            </h1>
            <p style={{ color: "#3d4536", maxWidth: "560px", margin: "0 auto" }}>
              Tell us about your property preservation or field inspection business and the coverage
              you&apos;re after. We&apos;ll line up the details and someone will follow up to help.
            </p>
          </div>
          <div style={{ background: "#fff", borderRadius: "1rem", padding: "2rem", border: "1px solid #ddd7c4", boxShadow: "0 2px 20px rgba(32,38,27,0.06)" }}>
            <QuoteForm />
          </div>
        </div>
      </main>
      <Footer />
      <AccessibilityToggle />
    </>
  );
}
