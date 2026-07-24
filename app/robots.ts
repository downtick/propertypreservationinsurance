import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/thank-you"] },
    sitemap: "https://propertypreservationistinsurance.com/sitemap.xml",
    host: "https://propertypreservationistinsurance.com",
  };
}
