import type { MetadataRoute } from "next";

const SITE = "https://propertypreservationinsurance.com";

const CORE = [
  "",
  "quote",
  "property-preservation-insurance",
  "mortgage-field-inspector-insurance",
  "general-liability-insurance",
  "professional-liability-insurance",
  "cyber-liability-insurance",
  "about",
  "contact",
  "privacy-policy",
  "terms-of-service",
  "disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return CORE.map((p) => ({
    url: p ? `${SITE}/${p}/` : `${SITE}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : p === "quote" ? 0.9 : 0.7,
  }));
}
