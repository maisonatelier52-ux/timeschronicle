export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.timeschronicle.org/sitemap.xml",
    host: "https://www.timeschronicle.org",
  };
}
