import data from "@/data/data.json";

const SITE_URL = "https://www.timeschronicle.org";
const TWO_DAYS_MS = 48 * 60 * 60 * 1000;
const XML_ENTITIES = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

export const dynamic = "force-dynamic";

function escapeXml(text) {
  return text.replace(/[&<>"']/g, (character) => XML_ENTITIES[character]);
}

export function GET() {
  const now = Date.now();
  const cutoff = now - TWO_DAYS_MS;
  const entries = data.articles
    .filter((article) => article.published && !article.sponsored && article.content)
    .map((article) => ({ article, publishedAt: Date.parse(article.date) }))
    .filter(({ publishedAt }) => publishedAt >= cutoff && publishedAt <= now)
    .sort((a, b) => b.publishedAt - a.publishedAt)
    .slice(0, 1000)
    .map(({ article }) => `  <url>
    <loc>${SITE_URL}/news/${encodeURIComponent(article.slug)}</loc>
    <news:news>
      <news:publication>
        <news:name>Times Chronicle</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${escapeXml(article.date)}</news:publication_date>
      <news:title>${escapeXml(article.title)}</news:title>
    </news:news>
  </url>\n`);

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${entries.join("")}</urlset>
`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "no-store",
      },
    },
  );
}
