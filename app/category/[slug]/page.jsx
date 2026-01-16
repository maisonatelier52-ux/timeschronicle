import data from "@/data/data.json";
import Link from "next/link";
import CategoryPageArticles from "@/app/components/CategoryPageArticle";
import CategoryMoreNews from "@/app/components/CategoryMoreNews";
import AdBanner from "@/app/components/AdBanner";

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
        "Comprehensive U.S. news coverage including Federal agencies,Supreme Court & federal court rulings and major stories shaping life across the United States.",
    },

    politics: {
      image: "/categories/politics.webp",
      description:
        "In-depth political reporting on U.S. elections, Congress, the White House, federal agencies, political movements, and policy decisions that influence American democracy.",
    },

    business: {
      image: "/categories/business.webp",
      description:
        "Authoritative business news covering corporate strategy, financial markets, banking, entrepreneurship, mergers, economic trends, and the forces shaping global commerce.",
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

  return (
    <section className="max-w-7xl mx-auto text-black dark:text-gray-200 bg-white dark:bg-[#01131d]">

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
            {categoryName}
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
          <div className="relative z-20 overflow-hidden shadow-2xl rounded-lg">
            <img
              src={heroImage}
              alt={categoryName}
              className="w-full h-full object-cover"
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