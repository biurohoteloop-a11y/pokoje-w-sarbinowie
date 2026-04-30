import { NextResponse } from "next/server";
import { blogPosts } from "../blog/posts-data";

export const dynamic = "force-static";

const baseUrl = "https://www.pokoje-w-sarbinowie.pl";

function urlEntry(loc: string, lastmod: Date, changefreq: string, priority: string): string {
  return `<url>
<loc>${loc}</loc>
<lastmod>${lastmod.toISOString()}</lastmod>
<changefreq>${changefreq}</changefreq>
<priority>${priority}</priority>
</url>`;
}

export function GET(): NextResponse {
  const now = new Date();

  const staticUrls = [
    { loc: baseUrl, changefreq: "weekly", priority: "1" },
    { loc: `${baseUrl}/azak-sarbinowo`, changefreq: "weekly", priority: "0.9" },
    { loc: `${baseUrl}/kontakt`, changefreq: "monthly", priority: "0.8" },
    { loc: `${baseUrl}/blog`, changefreq: "weekly", priority: "0.7" },
  ];

  const blogUrls = blogPosts.map((post) => ({
    loc: `${baseUrl}/blog/${post.slug}`,
    changefreq: "monthly",
    priority: "0.6",
    lastmod: new Date(post.date),
  }));

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    staticUrls.map((u) => urlEntry(u.loc, now, u.changefreq, u.priority)).join("") +
    blogUrls.map((u) => urlEntry(u.loc, u.lastmod, u.changefreq, u.priority)).join("") +
    `</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
