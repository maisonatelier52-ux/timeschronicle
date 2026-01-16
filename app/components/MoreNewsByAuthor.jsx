"use client";

import Link from "next/link";
import data from "@/data/data.json";
import CategoryTag1 from "./CategoryTag1";

export default function MoreNewsByAuthor({ authorId }) {
  const author = data.authors.find(a => a.id === authorId);
  const articles = data.articles.filter(
    (a) => a.published && a.authorId === authorId
  ).sort((a, b) => new Date(b.date) - new Date(a.date));

  if (!articles.length) return null;

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
    <section className="mx-auto px-7 pb-7 bg-white dark:bg-[#01131d]">
      <h2 className="py-5 text-2xl font-bold text-black dark:text-white uppercase">
        Articles written by {author.name} at Times Chronicle
      </h2>

      {/* GRID */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          divide-y divide-gray-300 dark:divide-gray-700
          lg:divide-y-0
          text-black dark:text-white
        "
      >
        {articles.map((article) => (
          <div
            key={article.slug}
            className="
              flex flex-col px-4 py-3
              transition-colors

              /* right border except last item in each row */
              lg:border-r lg:border-gray-300 dark:lg:border-gray-700
              lg:[&:nth-child(4n)]:border-r-0
            "
          >
            {/* IMAGE */}
            <Link href={`/news/${article.slug}`} title={article.title}>
              <div className="relative mb-3 aspect-[16/7] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:opacity-80 transition"
                />
              </div>
            </Link>

            {/* CATEGORY */}
            <Link href={`/category/${article.category}`} title={article.category} className="mb-2">
              <CategoryTag1 text={article.category.toUpperCase()} />
            </Link>

            <Link href={`/news/${article.slug}`} title={article.title}>
              {/* TITLE */}
              <h3 className="font-semibold text-lg uppercase line-clamp-3">
                <span className={underlineHover}>{article.title}</span>
              </h3>

              {/* EXCERPT */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-3">
                {article.excerpt}
              </p>

              {/* META */}
              <p className="text-[9px] text-gray-400 uppercase mt-auto pt-3">
                {article.time} Read
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
