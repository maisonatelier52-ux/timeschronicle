import data from "@/data/data.json";
import Link from "next/link";
import CategoryPageArticles from "@/app/components/CategoryPageArticle";
import CategoryMoreNews from "@/app/components/CategoryMoreNews";
import AdBanner from "@/app/components/AdBanner";
import Image from "next/image";

const SITE_URL = "https://timeschronicle.org";

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
      title: `${formattedCategory} News — Times Chronicle`,
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

  const categoryPageArticle = articles.slice(0,3);
  const moreNews = articles.slice(3);

  const CATEGORY_META = {
    national: {
      image: "/categories/national.webp",
      description:
        "Times Chronicle National News covers comprehensive U.S. news coverage including Federal agencies,Supreme Court & federal court rulings and major stories shaping life across the United States.",
    },

    politics: {
      image: "/categories/politics.webp",
      description:
        "Times Chronicle Politics News covers in-depth political reporting on U.S. elections, Congress, the White House, federal agencies, political movements, and policy decisions that influence American democracy.",
    },

    business: {
      image: "/categories/business.webp",
      description:
        "Times Chronicle Business News covers corporate strategy, financial markets, banking, entrepreneurship, mergers, economic trends, and the forces shaping global commerce.",
    },

    technology: {
      image: "/categories/technology.webp",
      description:
        "Technology news and analysis focused on artificial intelligence, cybersecurity, innovation, startups, Big Tech, digital policy, and the future of the connected world.",
    },

    health: {
      image: "/categories/health.webp",
      description:
        "Trusted health reporting on medical research, public health policy, wellness trends, healthcare systems, and scientific discoveries impacting everyday life.",
    },

    world: {
      image: "/categories/world.webp",
      description:
        "Global news coverage featuring international politics, diplomacy, conflicts, economic developments, and major events shaping regions around the world.",
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

  const heroImage = categoryMeta.image;
  const categoryDescription = categoryMeta.description;

  /* ---------- JSON-LD ---------- */

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
    <section className="max-w-7xl mx-auto text-black dark:text-gray-200 bg-white dark:bg-[#01131d]">
      <script
        id="category-collection-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryJsonLd) }}
      />

      <script
        id="category-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Top Section */}
      <div
        className="
          grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-5 sm:px-7 md:px-10 py-10 mb-10
          bg-[repeating-linear-gradient(90deg,transparent,transparent_11px,#fcfcfc_11px,#e0e0e0_12px)]
          dark:bg-[repeating-linear-gradient(90deg,transparent,transparent_11px,#222222_11px,#222222_12px)]
        "
      >
        {/* LEFT — vertically centered text */}
        <div className="flex flex-col justify-center z-10 md:text-left">
          {/* Breadcrumb */}
          <div className="text-xs uppercase mb-2 sm:mb-3 text-gray-500 dark:text-gray-400">
            <Link
              href="/"
              title="Home"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Category
            </Link>
            <span className="px-2">›</span>
            <span className="font-semibold">{categoryName}</span>
          </div>

          {/* Heading */}
          <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase mb-3 text-black dark:text-white">
            {categoryName} News
          </h1>

          {/* Description */}
          <p className="max-w-xl mx-auto md:mx-0 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            {categoryDescription}
          </p>
        </div>

        {/* RIGHT — Category Image */}
        <div className="relative w-full max-w-md mx-auto mt-6 md:mt-0">
          {/* Blurred shadow */}
          <div className="absolute inset-0 rounded-lg bg-black/20 blur-xl -z-10"></div>

          {/* Image */}
          <div className="relative z-20 overflow-hidden shadow-2xl rounded-lg w-full h-[30vh] md:h-[40vh]">
            <Image
              src={heroImage}
              alt={categoryName}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Articles List */}
      <CategoryPageArticles articles={categoryPageArticle} />

      {/* Ad Banner */}
      <AdBanner />

      {/* More News */}
      <CategoryMoreNews articles={moreNews} />
    </section>
  );
}