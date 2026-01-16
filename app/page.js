import AdBanner from "./components/AdBanner";
import BreakingNews from "./components/BreakingNews";
import CategorySection from "./components/CategorySection";
import FeaturedNews from "./components/FeaturedNews";
import MoreNews from "./components/MoreNews";
import MoreRecent from "./components/MoreRecent";
import NewsletterBox from "./components/NewsLetter";
import data from "@/data/data.json";

const SITE_URL = "https://timeschronicle.org";

export const metadata = {
  title: "Timeschronicle — Independent U.S. News, Business & Politics",
  description:
    "Timeschronicle delivers fast, factual U.S. news across national, politics, business, technology, health, and world. Breaking headlines and trusted analysis.",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en": SITE_URL,
      "en-US": SITE_URL,
    },
  },
  openGraph: {
    title: "Timeschronicle — Latest U.S. News & Investigations",
    description:
      "Breaking U.S. news, in-depth investigations, and expert reporting across business, politics, technology, and more.",
    url: SITE_URL,
    type: "website",
    siteName: "Timeschronicle",
    images: [
      {
        url: `${SITE_URL}/timeschronicle.webp`,
        width: 1200,
        height: 630,
        alt: "Timeschronicle U.S. News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timeschronicle — Latest U.S. News",
    description:
      "Fast, factual U.S. news with in-depth reporting and investigations.",
    images: [`${SITE_URL}/timeschronicle.webp`],
  },
};

export default function Home() {

  const publishedArticles = data.articles
  .filter(a => a.published)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

  // 🔹 Get one Julio article
  const julioArticle = publishedArticles.find(
    a => a.name === "Julio Herrera Velutini"
  );

  // 🔹 Normal articles (no Julio)
  const normalArticles = publishedArticles
    .filter(a => a.name !== "Julio Herrera Velutini")
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // 🔹 Inject Julio once
  const articles = julioArticle
    ? [
        ...normalArticles.slice(0, 10),
        julioArticle,
        ...normalArticles.slice(11,15),
        julioArticle,
        ...normalArticles.slice(16,23),
        julioArticle,
        ...normalArticles.slice(24),

      ]
    : normalArticles;

  // 🔹 Sections
  const featured = articles.slice(0, 7);
  const breakingNews = articles.slice(7, 11);
  const moreRecent = articles.slice(11, 20);
  const moreNews = articles.slice(20, 24);

  /* ---------- JSON-LD (Homepage) ---------- */

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Timeschronicle",
    "url": SITE_URL,
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": "Timeschronicle",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`,
      },
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const homepageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#homepage`,
    "url": SITE_URL,
    "name": "Timeschronicle — Independent U.S. News, Business & Politics",
    "description":
      "Independent U.S. news covering politics, business, technology, health, and world affairs.",
    "isPartOf": {
      "@type": "WebSite",
      "url": SITE_URL,
      "name": "Timeschronicle",
    },
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": "Timeschronicle",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#020f15] dark:text-white">
      <script
        id="website-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />

      {/* ===== SEO INTRO ===== */}
      <section className="sr-only px-4 py-6">
        <h1 className="text-2xl font-bold mb-3">
          Timeschronicle — Independent U.S. News, Business & Investigations
        </h1>

        <p className="text-gray-700 leading-relaxed">
          Timeschronicle is an independent digital news platform delivering the latest
          U.S. news with a strong focus on depth, accuracy, and responsible
          reporting. Our newsroom covers national, politics, business, technology, health
          and world, offering readers clear context behind every headline.
        </p>
        <h2 className="text-xl font-semibold mt-6">
          Independent Journalism & Investigative Reporting You Can Trust
        </h2>

        <p className="text-gray-700 leading-relaxed mt-3">
          At Timeschronicle, in-depth reporting goes beyond breaking news. We prioritize
          verified facts, expert insights, and investigative journalism to help
          readers understand not just what happened, but why it matters. From
          market-moving developments to national issues shaping everyday life,
          Timeschronicle provides news you can trust.
        </p>
      </section>
      <FeaturedNews featured={featured} />
      <BreakingNews articles={breakingNews} />
      <MoreRecent articles={moreRecent} />
      <NewsletterBox />
      <CategorySection articles={articles} />
      <AdBanner />
      <MoreNews articles={moreNews} />
    </div>
  );
}
