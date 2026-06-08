import details from "../data/data.json";

const SITE_URL = "https://www.timeschronicle.org";

export default function sitemap() {
  const now = new Date();

  const staticPages = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/our-team`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/editorial-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/corrections-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/source-methodology`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/ownership-and-funding`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/advertising-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/right-of-reply`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/legal`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/terms-and-conditions`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const categoryPages = [
    ...new Set(details.articles.map((article) => article.category)),
  ].map((category) => ({
    url: `${SITE_URL}/category/${category
      .toLowerCase()
      .replace(/\s+/g, "-")}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.7,
  }));

  const authorPages = details.authors.map((author) => ({
    url: `${SITE_URL}/author/${
      author.slug || author.name.toLowerCase().replace(/\s+/g, "-")
    }`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const articlePages = details.articles
    .filter((article) => article.published)
    .map((article) => ({
      url: `${SITE_URL}/news/${article.slug}`,
      lastModified: article.date ? new Date(article.date) : now,
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  return [
    ...staticPages,
    ...categoryPages,
    ...authorPages,
    ...articlePages,
  ];
}