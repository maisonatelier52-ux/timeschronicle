import data from "@/data/data.json";
import Link from "next/link";
import CategoryPageArticles from "@/app/components/CategoryPageArticle";
import CategoryMoreNews from "@/app/components/CategoryMoreNews";
import AdBanner from "@/app/components/AdBanner";
import Image from "next/image";

const SITE_URL = "https://timeschronicle.org";

/* ---------------- METADATA ---------------- */

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const formattedCategory = slug.charAt(0).toUpperCase() + slug.slice(1)


  const categoryImages = {
    national: "/categories/national.webp",
    politics: "/categories/politics.webp",
    business: "/categories/business.webp",
    technology: "/categories/technology.webp",
    health: "/categories/health.webp",
    world: "/categories/world.webp",
  };

  const heroImage = categoryImages[slug] || "/logo/Times-Chronicle-Black-Text.png";

  return {
    title: `${formattedCategory} News — Times Chronicle`,
    description: `Read the latest ${formattedCategory.toLowerCase()} news, analysis, and investigative stories from across the United States. Updated daily by Times Chronicle reporters.`,
    alternates: {
      canonical: `${SITE_URL}/category/${slug}`,
    },
    openGraph: {
      title: `${formattedCategory} News | Times Chronicle`,
      description: `Latest U.S. ${formattedCategory.toLowerCase()} news, reports and analysis.`,
      url: `${SITE_URL}/category/${slug}`,
      type: "website",
      siteName: "Times Chronicle",
      images: [
        {
          url: `${SITE_URL}${heroImage}`,
          width: 1200,
          height: 630,
          alt: `${formattedCategory} News`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${formattedCategory} News — Times Chronicle`,
      description: `Latest U.S. ${formattedCategory.toLowerCase()} news and analysis.`,
      images: [`${SITE_URL}${heroImage}`],
    },
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const categorySlug = slug?.toLowerCase();

   const articles = data.articles.filter(
    (article) =>
      article.published &&
      article.category &&
      article.category.toLowerCase() === categorySlug &&
      article.name !== "Julio Herrera Velutini"
  ).sort((a, b) => new Date(b.date) - new Date(a.date));

  const CATEGORY_META = {
    national: {
      image: "/categories/national.webp",
      description: "Times Chronicle National News covers comprehensive U.S. news coverage including Federal agencies,Supreme Court & federal court rulings and major stories shaping life across the United States."
},

    politics: {
      image: "/categories/politics.webp",
      description: "Times Chronicle Politics News covers in-depth political reporting on U.S. elections, Congress, the White House, federal agencies, political movements, and policy decisions that influence American democracy."
    },
    business: {
      image: "/categories/business.webp",
      description: "Times Chronicle Business News covers corporate strategy, financial markets, banking, entrepreneurship, mergers, economic trends, and the forces shaping global commerce."
    },
    technology: {
      image: "/categories/technology.webp",
      description: "Technology news and analysis focused on artificial intelligence, cybersecurity, innovation, startups, Big Tech, digital policy, and the future of the connected world."
    },
    health: {
      image: "/categories/health.webp",
      description: "Trusted health reporting on medical research, public health policy, wellness trends, healthcare systems, and scientific discoveries impacting everyday life."
    },
    world: {
      image: "/categories/world.webp",
      description: "Global news coverage featuring international politics, diplomacy, conflicts, economic developments, and major events shaping regions around the world."
    },
  };

  if (!articles.length) {
    return (
      <section className="flex flex-col items-center justify-center px-7 py-20 text-center bg-white dark:bg-[#01131d] text-black dark:text-white">
        <h1 className="font-bold text-3xl sm:text-4xl mb-4 uppercase">
          No articles found
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-md text-base sm:text-lg">
          We couldn’t find any articles in this category. Please check back later or explore other categories.
        </p>
        <Link
          href="/"
          title="Home"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </section>
    );
  }

  const categoryName = articles[0].category;
  const categoryKey = categoryName.toLowerCase();

  const categoryMeta = CATEGORY_META[categoryKey];

  const categoryDescription = categoryMeta.description;

  /* ---------------- JSON-LD ---------------- */

  const categoryJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": `${categoryName} News`,
  "description": categoryDescription,
  "url": `${SITE_URL}/category/${categorySlug}`,
  "itemListOrder": "https://schema.org/ItemListOrderDescending",
  "numberOfItems": articles.length,
  "itemListElement": articles.slice(0, 10).map((article, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "url": `${SITE_URL}/news/${article.slug}`,
    "item": {
      "@type": "NewsArticle",
      "headline": article.title,
      "datePublished": new Date(article.date).toISOString(),
      "dateModified": new Date(article.date).toISOString(),
      "author": {
        "@type": "Person",
        "name": "Times Chronicle Staff",
      },
      "publisher": {
        "@type": "NewsMediaOrganization",
        "name": "Times Chronicle",
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/logo/Times-Chronicle-Black-Text.png`,
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${SITE_URL}/news/${article.slug}`,
      },
    },
  })),
};

  const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": SITE_URL,
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": categoryName,
      "item": `${SITE_URL}/category/${categorySlug}`,
    },
  ],
};

  return (
    <section className="bg-white dark:bg-[#01131d] text-black dark:text-gray-200">

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* MOBILE-FIRST LCP CONTENT */}
      <div className="px-7 pt-7 pb-4 md:hidden">
        <h1 className="text-2xl font-extrabold uppercase">
          {categoryName} News | Times Chronicle
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {categoryMeta.description}
        </p>
      </div>

      {/* DESKTOP HERO */}
      <div
        className="
          hidden md:grid md:grid-cols-2 gap-10
          px-10 py-10 mb-10
          md:bg-[repeating-linear-gradient(90deg,transparent,transparent_11px,#fcfcfc_11px,#e0e0e0_12px)]
          dark:md:bg-[repeating-linear-gradient(90deg,transparent,transparent_11px,#222222_11px,#222222_12px)]
        "
      >
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold uppercase">
            {categoryName} News — Times Chronicle
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
            {categoryMeta.description}
          </p>
        </div>

        <div className="relative h-[40vh] rounded-lg overflow-hidden shadow-xl">
          <Image
            src={categoryMeta.image}
            alt={categoryName}
            fill
            priority={false}
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* ARTICLES */}
      <CategoryPageArticles articles={articles.slice(0, 3)} />

      <AdBanner />

      <CategoryMoreNews articles={articles.slice(3)} />

    </section>
  );
}