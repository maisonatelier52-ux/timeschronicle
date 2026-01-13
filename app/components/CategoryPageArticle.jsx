import Link from "next/link";
import CategoryTag from "./CategoryTag";
import data from "@/data/data.json";

export default function CategoryPageArticles({ articles }) {
  if (!articles || !articles.length) return null;

  const getAuthorName = (authorId) =>
    data.authors.find((a) => a.id === authorId)?.name || "Staff";

  const firstArticle = articles[1];
  const secondArticle = articles[0];
  const thirdArticle = articles[2];

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

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4 lg:grid-rows-2
        gap-6
        px-7 pb-2
      "
    >
      {/* Grid 1: Featured Article */}
      {firstArticle && (
        <Link
          href={`/news/${firstArticle.slug}`}
          className="
            sm:col-span-2
            lg:col-span-2 lg:row-span-2
            flex flex-col pr-6
            overflow-hidden
            group
            bg-white dark:bg-[#01131d]
            lg:border-r border-gray-200 dark:border-gray-700
          "
        >
          {firstArticle.image && (
            <div className="relative w-full h-64 md:h-80 overflow-hidden group/image">
              
              {/* Image */}
              <img
                src={firstArticle.image}
                alt={firstArticle.title}
                className="
                  w-full h-full object-cover
                  grayscale
                  hover:grayscale-0
                  transition-all duration-100
                "
              />

              {/* Overlay */}
              <span
                className="
                  absolute inset-0
                  bg-black/30
                  opacity-100
                  pointer-events-none
                  transition-opacity duration-200
                  group-hover/image:opacity-0
                "
              />

              {/* Category Tag */}
              <CategoryTag text={firstArticle.category.toUpperCase()} />
            </div>
          )}

          <div className="flex flex-col pt-4 flex-1">
            <h2 className="font-bbh text-xl md:text-2xl mb-2 ${}">
              <span className={underlineHover}>
                {firstArticle.title}
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-2">
              {firstArticle.excerpt}
            </p>

            <p className="text-[10px] uppercase text-gray-500">
              By{" "}
              <span className="font-semibold text-black dark:text-white">
                {getAuthorName(firstArticle.authorId)}
              </span>{" "}
              | {firstArticle.time} Read
            </p>
          </div>
        </Link>
      )}

      {/* Grid 2 */}
      {secondArticle && (
        <Link
          href={`/news/${secondArticle.slug}`}
          className="
            flex flex-col
            overflow-hidden
            group
            bg-white dark:bg-[#01131d]
            sm:col-span-1
            lg:col-start-3 lg:row-start-1
            lg:border-b
            border-gray-200 dark:border-gray-700
          "
        >
          {secondArticle.image && (
            <div className="relative w-full h-28 md:h-32 overflow-hidden group">
              <img
                src={secondArticle.image}
                alt={secondArticle.title}
                className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-[1.03]
                "
              />

              {/* WHITE HOVER SHADE */}
              <div className="
                absolute inset-0
                bg-white/0
                group-hover:bg-white/15
                transition-colors duration-300
                pointer-events-none
              " />

              <CategoryTag text={secondArticle.category.toUpperCase()} />
            </div>
          )}

          <div className="py-3">
            <h3 className="font-bbh text-lg uppercase mb-1">
              <span className={underlineHover}>
                {secondArticle.title}
              </span>
            </h3>
            <p className="text-[10px] text-gray-500 uppercase">
              By{" "}
              <span className="font-semibold text-black dark:text-white">
                {getAuthorName(secondArticle.authorId)}
              </span>{" "}
              | {secondArticle.time} Read
            </p>
          </div>
        </Link>
      )}

      {/* Grid 3 */}
      {thirdArticle && (
        <Link
          href={`/news/${thirdArticle.slug}`}
          className="
            flex flex-col
            overflow-hidden
            group
            bg-white dark:bg-[#01131d]
            sm:col-span-1
            lg:col-start-3 lg:row-start-2
          "
        >
          {thirdArticle.image && (
            <div className="relative w-full h-28 md:h-32 overflow-hidden group">
              <img
                src={thirdArticle.image}
                alt={thirdArticle.title}
                className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-[1.03]
                "
              />

              {/* WHITE HOVER SHADE */}
              <div className="
                absolute inset-0
                bg-white/0
                group-hover:bg-white/15
                transition-colors duration-300
                pointer-events-none
              " />

              <CategoryTag text={thirdArticle.category.toUpperCase()} />
            </div>
          )}

          <div className="py-3">
            <h3 className="font-bbh text-lg uppercase mb-1">
              <span className={underlineHover}>
                {thirdArticle.title}
              </span>
            </h3>
            <p className="text-[10px] text-gray-500 uppercase">
              By{" "}
              <span className="font-semibold text-black dark:text-white">
                {getAuthorName(thirdArticle.authorId)}
              </span>{" "}
              | {thirdArticle.time} Read
            </p>
          </div>
        </Link>
      )}

      {/* Advertisement */}
      <div
        className="
          sm:col-span-2
          lg:col-start-4 lg:row-span-2
          border-t lg:border-t-0 lg:border-l
          border-gray-200 dark:border-gray-700
          pt-4 lg:pt-0 lg:pl-6
        "
      >
        <p className="text-xs text-center uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
          — Advertisement —
        </p>

        <img
          src="/banner-1.jpg"
          alt="Advertisement"
          className="block mx-auto w-auto h-auto max-w-full"
        />
      </div>
    </div>
  );
}
