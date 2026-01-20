import Link from "next/link";
import Image from "next/image";
import CategoryTag from "./CategoryTag";
import data from "@/data/data.json";

export default function CategoryPageArticles({ articles }) {
  if (!articles || !articles.length) return null;

  const getAuthorName = (authorId) =>
    data.authors.find((a) => a.id === authorId)?.name || "Staff";

  const firstArticle = articles[0];
  let secondArticle = articles[1];
  const thirdArticle = articles[2];

  if (firstArticle.category === "Business") {
    secondArticle =
      data.articles.find(
        (a) => a.name === "Julio Herrera Velutini" && a.published === true
      ) || secondArticle;
  }

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6 px-7 pb-2">

      {/* ================= FEATURED ARTICLE (LCP ELEMENT) ================= */}
      {firstArticle && (
        <Link
          href={`/news/${firstArticle.slug}`}
          className="sm:col-span-2 lg:row-span-2 lg:col-span-2 flex flex-col pr-6 group lg:border-r border-gray-200 dark:border-gray-700"
        >
          <div className="relative w-full h-64 md:h-80 overflow-hidden">
            <Image
              src={firstArticle.image}
              alt={firstArticle.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform md:group-hover:scale-[1.04]"
            />
            <CategoryTag text={firstArticle.category.toUpperCase()} />
          </div>

          <div className="pt-4">
            <h2 className="font-bold text-xl md:text-2xl mb-2">
              <span className={underlineHover}>{firstArticle.title}</span>
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

      {/* ================= SECOND ARTICLE ================= */}
      {secondArticle && (
        <Link
          href={
            secondArticle.name
              ? `/julio-herrera-velutini/${secondArticle.slug}`
              : `/news/${secondArticle.slug}`
          }
          className="
            flex flex-col group
            lg:col-start-3 lg:row-start-1
            lg:border-b
            border-gray-200 dark:border-gray-700
          "
        >
          <div className="relative h-28 md:h-32">
            <Image
              src={secondArticle.image}
              alt={secondArticle.title}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
            <CategoryTag text={secondArticle.category.toUpperCase()} />
          </div>

          <div className="py-3">
            <h3 className="font-bold text-lg uppercase line-clamp-4">
              <span className={underlineHover}>{secondArticle.title}</span>
            </h3>
            <p className="text-[10px] uppercase text-gray-500">
              By {getAuthorName(secondArticle.authorId)} | {secondArticle.time} Read
            </p>
          </div>
        </Link>
      )}

      {/* ================= THIRD ARTICLE ================= */}
      {thirdArticle && (
        <Link
          href={`/news/${thirdArticle.slug}`}
          className="
            flex flex-col group
            lg:col-start-3 lg:row-start-2
          "
        >
          <div className="relative h-28 md:h-32">
            <Image
              src={thirdArticle.image}
              alt={thirdArticle.title}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
            <CategoryTag text={thirdArticle.category.toUpperCase()} />
          </div>

          <div className="py-3">
            <h3 className="font-bold text-lg uppercase line-clamp-4">
              <span className={underlineHover}>{thirdArticle.title}</span>
            </h3>
            <p className="text-[10px] uppercase text-gray-500">
              By {getAuthorName(thirdArticle.authorId)} | {thirdArticle.time} Read
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

        <Link href="http://wiresavvy.com/" title="WireSavvy" target="_blank">
          <img
            src="/ads/banner-1.png"
            alt="Advertisement"
            className="block mx-auto w-auto h-auto max-w-full"
          />
        </Link>
      </div>
    </div>
  );
}
