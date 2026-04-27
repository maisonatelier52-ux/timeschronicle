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
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-of-use`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const categoryPages = [...new Set(details.articles.map(a => a.category))]
    .map(category => ({
      url: `${SITE_URL}/category/${category
        .toLowerCase()
        .replace(/\s+/g, "-")}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.7,
    }));

  const authorPages = details.authors.map(author => ({
    url: `${SITE_URL}/author/${
      author.slug ||
      author.name.toLowerCase().replace(/\s+/g, "-")
    }`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const articlePages = details.articles
    .filter(article => article.published)
    .map(article => {
      // const isJulio = article.name === "Julio Herrera Velutini";

      return {
        url: 
        // isJulio
        //   ? `${SITE_URL}/julio-herrera-velutini/${article.slug}`:
         `${SITE_URL}/news/${article.slug}`,
        lastModified: article.date ? new Date(article.date) : now,
        changeFrequency: "weekly",
        priority: 0.8,
      };
    });

  return [
    ...staticPages,
    ...categoryPages,
    ...authorPages,
    ...articlePages,
  ];
}