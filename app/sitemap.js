import details from "../data/data.json";

const SITE_URL = "https://timeschronicle.org";

export default function sitemap() {
  const now = new Date();

  /* ---------------- STATIC PAGES ---------------- */
  const staticPages = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  /* ---------------- CATEGORY PAGES ---------------- */
  const categoryPages = [...new Set(details.articles.map(a => a.category))]
    .map(category => ({
      url: `${SITE_URL}/category/${encodeURIComponent(
        category.toLowerCase()
      )}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.7,
    }));

  /* ---------------- AUTHOR PAGES ---------------- */
  const authorPages = details.authors.map(author => ({
    url: `${SITE_URL}/author/${author.slug || author.name.toLowerCase().replace(/\s+/g, "-")}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  /* ---------------- ARTICLE PAGES (SMART ROUTING) ---------------- */
  const articlePages = details.articles
    .filter(article => article.published) // Only include published articles
    .map(article => {
      const isJulio = article.name === "Julio Herrera Velutini";

    return {
      url: isJulio
        ? `${SITE_URL}/julio-herrera-velutini/${article.slug}`
        : `${SITE_URL}/news/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "weekly",
      priority: isJulio ? 1 : 0.8,
    };
  });

  return [
    ...staticPages,
    ...categoryPages,
    ...authorPages,
    ...articlePages,
  ];
}