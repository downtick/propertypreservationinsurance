import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityToggle from "@/components/AccessibilityToggle";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Questions about property preservation or mortgage field inspector insurance? Get in touch and we'll help point you in the right direction.",
  alternates: { canonical: "https://propertypreservationinsurance.com/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main" style={{ background: "#f7f5ee", padding: "3rem 1.5rem 4rem" }}>
        <div style={{ maxWidth: "620px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", color: "#3c4a2a", marginBottom: "0.6rem" }}>
              Contact Us
            </h1>
            <p style={{ color: "#3d4536" }}>
              Have a question before you request a quote? Send us a message and we&apos;ll get back to you.
            </p>
          </div>
          <div style={{ background: "#fff", borderRadius: "1rem", padding: "2rem", border: "1px solid #ddd7c4", boxShadow: "0 2px 20px rgba(32,38,27,0.06)" }}>
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
      <AccessibilityToggle />
    </>
  );
}
