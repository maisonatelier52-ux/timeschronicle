import data from "@/data/data.json";
import Link from "next/link";
import MorePopular from "@/app/components/MorePopular";
import ShareArticle from "@/app/components/ShareArticle";
import ArticleSidebar from "@/app/components/ArticleSidebar";

export default async function NewsPage({ params }) {
  const { slug } = await params;

  const article = data.articles.find(
    (a) => a.slug === slug && a.published
  );

  if (!article) {
    return (
      <main className="bg-white dark:bg-[#01131d] text-black dark:text-white min-h-screen flex flex-col justify-center items-center px-7 py-20">
        <h1 className="font-bold text-3xl sm:text-4xl uppercase mb-4 text-center">
          Article Not Found
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
          Sorry, the article you are looking for does not exist or has been removed.
        </p>
        <Link
          href="/"
          title="Home"
          className="px-6 py-3 bg-blue-600 text-white font-semibold uppercase hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </main>
    );
  }

  const author = data.authors.find(
    (a) => a.id === article.authorId
  );

  const formattedDate = new Date(article.date).toLocaleDateString(
    "en-US",
    { month: "short", day: "2-digit", year: "numeric" }
  );

  // All published articles except current one
  const allPublished = data.articles
    .filter((a) => a.published && a.slug !== slug)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // 1 & 2 → Latest from same category
  const sameCategoryLatest = allPublished
    .filter((a) => a.category === article.category)
    .slice(0, 2);

  // Remaining → Latest overall (excluding already picked)
  const remainingLatest = allPublished
    .filter(
      (a) =>
        !sameCategoryLatest.some(
          (picked) => picked.slug === a.slug
        )
    )
    .slice(0, 5);

  // Final 7 articles
  const popularArticles = [
    ...sameCategoryLatest,
    ...remainingLatest,
  ];

  const underlineHover = `
    inline
    dark:bg-[linear-gradient(to_right,transparent,transparent),linear-gradient(to_right,#000,#000)]
    bg-[linear-gradient(to_right,transparent,transparent),linear-gradient(to_right,#fff,#fff)]
    bg-[length:100%_0.01em,0_0.01em]
    bg-[position:100%_100%,0_100%]
    bg-no-repeat
    transition-[background-size] duration-400
    hover:bg-[length:0_0.05em,100%_0.05em]
  `;

  return (
    <main className="bg-white text-black dark:text-white dark:bg-[#01131d]">

      {/* ARTICLE HEADER */}
      <section className="max-w-6xl mx-auto px-5 sm:px-7 pt-6 sm:pt-8 pb-6">

        {/* Breadcrumb */}
        <div className="text-xs uppercase text-gray-500 dark:text-gray-300 mb-4">
          <Link href="/" title="Home" className="hover:underline">Home</Link>
          <span className="px-2">›</span>
          <Link
            href={`/category/${article.category.toLowerCase()}`}
            title={article.category}
            className="hover:underline"
          >
            {article.category}
          </Link>
          <span className="hidden sm:inline">
            <span className="px-2">›</span>
            {article.title}
          </span>
        </div>

        {/* HERO IMAGE */}
        {article.image && (
          <div className="relative w-full mb-8 sm:mb-10 overflow-hidden">
            <div className="relative aspect-[16/9]">
              <img
                src={article.image}
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 text-white">
              <Link
                href={`/category/${article.category.toLowerCase()}`}
                title={article.category}
                className="inline-block text-[10px] uppercase tracking-widest mb-2 hover:underline"
              >
                {article.category}
              </Link>

              <h1 className="font-extrabold text-2xl sm:text-3xl md:text-5xl uppercase mb-3 leading-tight">
                {article.title}
              </h1>

              {/* META INFO */}
              <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase">
                <Link href={`/author/${author.slug}`} className="font-semibold" title={author.name}>
                  <span className={underlineHover}>
                    {author?.name || "Staff"}
                  </span>
                </Link>

                <span className="opacity-70">|</span>
                <span className="opacity-80">{formattedDate}</span>

                {/* HIDE TIME TO READ ON MOBILE */}
                <span className="opacity-70 hidden sm:inline">•</span>
                <span className="opacity-80 hidden sm:inline">
                  {article.time} Read
                </span>
              </div>
            </div>
          </div>
        )}

        {/* CONTENT*/}
        <div className="flex gap-5">
          <article
            className="prose max-w-none text-sm sm:text-base md:text-lg w-full dark:text-gray-400 lg:w-[750px]
              [&_h1]:pt-6 [&_h1]:pb-3
              [&_h2]:pt-5 [&_h2]:pb-2
              [&_h3]:pt-4 [&_h3]:pb-2
              [&_h4]:pt-3 [&_h4]:pb-1

              [&_h2]:font-bold [&_h2]:text-2xl
              [&_h3]:font-bold [&_h3]:text-xl
              [&_h4]:font-bold [&_h4]:text-lg

              [&_p]:pt-4 [&_p]:pb-2

              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4
              [&_li]:my-2 [&_li]:leading-relaxed
            "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          {/* RIGHT SIDEBAR */}
          <ArticleSidebar />
        </div>

      {/* SHARE ARTICLE */}
      </section>
      <div className="px-7">
        <ShareArticle />
      </div>

      {/* MORE POPULAR */}
      <MorePopular articles={popularArticles} />
    </main>
  );
}
