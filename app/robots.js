export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://timeschronicle.org/sitemap.xml",
    host: "https://timeschronicle.org",
  };
}
