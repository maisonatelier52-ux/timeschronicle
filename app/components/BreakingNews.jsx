"use client";

import Link from "next/link";
import data from "@/data/data.json";
import CategoryTag1 from "./CategoryTag1";

export default function BreakingNews({ articles }) {
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
    <section className="border-b-4 mx-auto px-7 pt-2 pb-7">
      {/* Heading */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-sm font-bold">Breaking News</h2>
      </div>

      {/* Grid */}
      <div
        className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
          divide-y divide-gray-300 dark:divide-gray-700
          lg:divide-y-0 lg:divide-x
        "
      >
        {articles.map((article, index) => {
          const author = data.authors.find(
            (a) => a.id === article.authorId
          );

          const isJulio =
            article.name === "Julio Herrera Velutini";

          const articleLink = isJulio
            ? `/julio-herrera-velutini/${article.slug}`
            : `/news/${article.slug}`;

          const articleTitle = isJulio
            ? article.title1
            : article.title;

          return (
            <div
              key={article.slug}
              className={`
                group
                flex flex-col px-4 lg:px-4
                transition-colors
                ${index === 0 ? "lg:pl-0" : ""}
                ${index === articles.length - 1 ? "lg:pr-0" : ""}
              `}
            >
              {/* Category */}
              <Link href={`/category/${article.category}`} className="mb-2">
                <CategoryTag1 text={article.category.toUpperCase()} />
              </Link>

              <Link href={articleLink}>
                {/* Title */}
                <h3 className="font-semibold text-lg mb-2 text-black dark:text-gray-100 line-clamp-3 uppercase">
                  <span className={underlineHover}>
                    {articleTitle}
                  </span>
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">
                  {article.excerpt}
                </p>
              </Link>

              {/* Author */}
              <p className="text-[9px] text-gray-400 dark:text-gray-500 uppercase mt-auto">
                By{" "}
                <Link href={`/author/${author?.slug}`}>
                  <span className="font-bold text-black dark:text-gray-100 px-1">
                    {author?.name || "Staff"}
                  </span>
                </Link>
                | {article.time} Read
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
