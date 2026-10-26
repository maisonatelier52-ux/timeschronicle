import Link from "next/link";
import Image from "next/image";
import CategoryTag from "./CategoryTag";
import data from "@/data/data.json";

const quoteCard = {
  text: "Our Republic and its press will rise or fall together.",
  author: "Joseph Pulitzer",
  role: "Publisher & Journalist",
};

export default function CategoryPageArticles({ articles }) {
  if (!articles || !articles.length) return null;

  const getAuthorName = (authorId) =>
    data.authors.find((a) => a.id === authorId)?.name || "Staff";

  const firstArticle = articles[0];
  let secondArticle = articles[1];
  const thirdArticle = articles[2];

  if (firstArticle.category === "Business") {
    secondArticle = secondArticle;
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
          href={ `/news/${secondArticle.slug}` }
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

      {/* Quote Card */}
      <div
        className="
          sm:col-span-2
          lg:col-start-4 lg:row-span-2
          border-t lg:border-t-0 lg:border-l
          border-gray-200 dark:border-gray-700
          pt-4 lg:pt-0 lg:pl-6
        "
      >
        <div className="relative h-full min-h-[360px] overflow-hidden bg-gradient-to-b from-[#7a1f2b] via-[#5c1520] to-[#2e0a10] text-white">
          {/* Decorative circles */}
          <div className="absolute -top-14 -left-14 w-48 h-48 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-white/5" />

          <div className="relative h-full flex flex-col justify-between p-7">
            {/* Top: label */}
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/60">
              Words That Matter
            </p>

            {/* Middle: quote */}
            <div>
              <span
                aria-hidden="true"
                className="block text-7xl leading-none font-serif text-white/30"
              >
                “
              </span>
              <blockquote className="-mt-3 text-xl md:text-2xl font-serif italic leading-snug">
                {quoteCard.text}
              </blockquote>
              <div className="mt-5 w-10 h-0.5 bg-white/60" />
              <p className="mt-3 text-sm font-semibold tracking-wide uppercase">
                {quoteCard.author}
              </p>
              <p className="text-xs text-white/60 mt-1">{quoteCard.role}</p>
            </div>

            {/* Bottom: branding */}
            <p className="text-xs font-bold tracking-widest uppercase text-white/70">
              Times Chronicle
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
