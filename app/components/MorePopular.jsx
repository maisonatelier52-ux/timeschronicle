import Link from "next/link";
import CategoryTag from "./CategoryTag";
import CategoryTag1 from "./CategoryTag1";
import data from "@/data/data.json";

export default function MorePopular({ articles }) {
  if (!articles || articles.length < 6) return null;

  const topLeft = articles[0];
  const topCenter = articles[1];
  const bottomArticles = articles.slice(2, 6);

  const getAuthor = (id) => data.authors.find((a) => a.id === id)?.name || "Staff";
  const getAuthorSlug = (id) => data.authors.find((a) => a.id === id)?.slug;


  const underlineHover = `
    inline
    bg-[linear-gradient(to_right,transparent,transparent),linear-gradient(to_right,#000,#000)]
    dark:bg-[linear-gradient(to_right,transparent,transparent),linear-gradient(to_right,#fff,#fff)]
    bg-[length:100%_0.01em,0_0.01em]
    bg-[position:100%_100%,0_100%]
    bg-no-repeat
    transition-[background-size] duration-400
    hover:bg-[length:0_0.05em,100%_0.05em]
  `;
  const underlineHoverRev = `
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
    <section className="max-w-7xl mx-auto px-7 pt-4">

      {/* SECTION HEADING */}
      <h2 className="font-bbh text-2xl uppercase mb-3">
        More Popular
      </h2>

      {/* TOP ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-6 border-t border-gray-200 dark:border-gray-700">

        {/* LEFT COLUMN */}
        <div className="
          lg:col-span-2
          py-6
          lg:pr-6
          lg:border-r
          border-gray-200 dark:border-gray-700
          h-full
        ">

          {topLeft && (
            <Link href={`/news/${topLeft.slug}`} title={topLeft.title} className="block h-full">
              {/* IMAGE WRAPPER — FULL HEIGHT */}
              <div className="relative h-full min-h-[280px] overflow-hidden group">

                {/* BACKGROUND IMAGE */}
                <img
                  src={topLeft.image}
                  alt={topLeft.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />

                {/* WHITE HOVER SHADE */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/15 transition-colors duration-300"></div>

                {/* HEADING STRIP OVERLAY (BOTTOM ONLY) */}
                <div className="
                  absolute bottom-0 w-full
                  bg-gradient-to-t from-black/80 to-transparent
                  p-4
                ">
                  <CategoryTag1 text={topLeft.category.toUpperCase()} />
                  <h3 className="font-bbh text-xl uppercase leading-snug text-white">
                    <span className={underlineHoverRev}>
                      {topLeft.title}
                    </span>
                  </h3>
                  <p className="text-[10px] uppercase text-gray-300 pt-2">
                    By{" "}
                    <span className="font-semibold text-white dark:text-white">
                      {getAuthor(topLeft.authorId)}
                    </span>{" "}
                    | {topCenter.time} Read
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>
        {/* CENTER BIGGEST */}
        {topCenter && (
          <div
            className="lg:col-span-3 py-6 lg:px-6 lg:border-r border-gray-200 dark:border-gray-700 group"
          >
            <Link href={`/news/${topCenter.slug}`} title={topCenter.title}>
              <div className="relative h-80 overflow-hidden mb-4 group">
                <img
                  src={topCenter.image}
                  alt={topCenter.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />

                {/* WHITE HOVER SHADE */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/15 transition-colors duration-300"></div>
                <CategoryTag text={topCenter.category.toUpperCase()} />
              </div>

              <h3 className="font-bbh text-3xl uppercase mb-2">
                <span className={underlineHover}>
                  {topCenter.title}
                </span>
              </h3>
            </Link>

            <Link href={`/author/${getAuthorSlug(topCenter.authorId)}`} title={getAuthor(topCenter.authorId)}>
            <p className="text-[11px] uppercase text-gray-500">
              By{" "}
              <span className="font-semibold text-black dark:text-white">
                {getAuthor(topCenter.authorId)}
              </span>{" "}
              | {topCenter.time} Read
            </p>
            </Link>
          </div>
        )}

        {/* RIGHT COLUMN — CENTERED AD */}
        <div className="lg:col-span-1 py-6 lg:pl-6 flex flex-col items-center justify-center">
          <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-3">
            Advertisement
          </p>

          <img
            src="/banner-1.jpg"
            alt="Advertisement"
            className="w-full h-auto max-w-[300px]"
          />
        </div>
      </div>

      {/* BOTTOM ROW — 4 COLS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-gray-200 dark:border-gray-700">
        {bottomArticles.map((article, index) => (
          <div
            key={article.slug}
            className={`
              group py-6
              border-gray-200 dark:border-gray-700
              ${index < 3 ? "lg:border-r" : ""}
              ${index > 0 ? "lg:pl-6" : ""}
              border-b lg:border-b-0
            `}
          >
            <Link href={`/category/${article.category}`} title={article.category}>
              <CategoryTag1 text={article.category.toUpperCase()} />
            </Link>
            <Link href={`/news/${article.slug}`} title={article.title}>
              <h4 className="font-bbh text-lg uppercase mt-2 mb-1">
                <span className={underlineHover}>
                  {article.title}
                </span>
              </h4>

              <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-3 mb-2">
                {article.excerpt}
              </p>
            </Link>

            <Link href={`/author/${getAuthorSlug(article.authorId)}`} title={getAuthor(article.authorId)}>
              <p className="text-[10px] uppercase text-gray-500">
                By{" "}
                <span className="font-semibold text-black dark:text-white">
                  {getAuthor(article.authorId)}
                </span>{" "}
                | {article.time} Read
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
