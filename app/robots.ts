import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://www.pokoje-w-sarbinowie.pl/sitemap.xml", // ← www
    host: "https://www.pokoje-w-sarbinowie.pl", // ← www
  };
}
