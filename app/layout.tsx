import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://propertypreservationistinsurance.com"),
  title: {
    default: "Property Preservationist Insurance | GL, E&O & Cyber for Vacant-Property Pros",
    template: "%s | Property Preservationist Insurance",
  },
  description:
    "Insurance built for property preservationists and mortgage field inspectors. General liability, professional liability (E&O), and cyber liability for winterizing, lawn maintenance, handyman work, and inspections on vacant and bank-owned properties. Request a fast quote.",
  keywords: [
    "property preservationist insurance",
    "property preservation insurance",
    "mortgage field inspector insurance",
    "vacant property insurance",
    "REO maintenance insurance",
    "property inspection general liability",
    "field inspector professional liability",
    "property preservation general liability",
  ],
  openGraph: {
    type: "website",
    siteName: "Property Preservationist Insurance",
    title: "Property Preservationist Insurance | Coverage for Vacant-Property Pros",
    description:
      "General liability, professional liability (E&O), and cyber liability for property preservationists and mortgage field inspectors working on vacant and bank-owned properties. Request a fast quote.",
    url: "https://propertypreservationistinsurance.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Preservationist Insurance",
    description: "Coverage built for property preservationists and mortgage field inspectors on vacant properties.",
  },
  alternates: { canonical: "https://propertypreservationistinsurance.com/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Property Preservationist Insurance",
  url: "https://propertypreservationistinsurance.com/",
  logo: "https://propertypreservationistinsurance.com/icon.svg",
  description:
    "Informational and referral service that connects property preservationists and mortgage field inspectors with insurance professionals. General liability, professional liability, and cyber liability coverage for work on vacant and bank-owned properties.",
  areaServed: "US",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Restore saved accessibility preferences before paint to avoid a flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;if(localStorage.getItem('a11y-contrast')==='1')d.classList.add('a11y-contrast');var fs=localStorage.getItem('a11y-fs');if(fs)d.style.setProperty('--fs',fs);}catch(e){}})();`,
          }}
        />
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  if (document.cookie.indexOf('ga_consent=false') === -1) {
                    gtag('config', '${gaId}', { anonymize_ip: true });
                  }
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }} />
      </body>
    </html>
  );
}
