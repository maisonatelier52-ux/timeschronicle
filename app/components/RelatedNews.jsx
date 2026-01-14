"use client";

import Link from "next/link";
import data from "@/data/data.json";
import CategoryTag1 from "./CategoryTag1";

export default function RelatedNews({articles}) {
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
    <section className="mx-auto px-7 pt-2 pb-7">

      {/* Heading */}
      <div className="flex justify-between items-center mb-3">
        <div className="bg-black dark:bg-white text-white dark:text-black px-[5px] pt-1 text-sm font-semibold w-fit">
          More News
        </div>
      </div>

      {/* Grid */}
      <div className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        divide-y divide-gray-300 dark:divide-gray-700
        lg:divide-y-0 lg:divide-x
      ">
        {articles.map((article, index) => {
          const author = data.authors.find(a => a.id === article.authorId);

          return (
            <div
              key={article.slug}
              className={`
                flex flex-col px-4 lg:px-4
                ${index === 0 ? "lg:pl-0" : ""}
                ${index === articles.length - 1 ? "lg:pr-0" : ""}
              `}
            >
              {/* Image (linked) */}
              <Link
                href={`/julio-herrera-velutini/${article.slug}`}
                className="relative mb-3 aspect-[16/7] overflow-hidden block group"
              >
                {/* Image */}
                <img
                  src={article.image}
                  alt={article.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-300 ease-out
                    group-hover:scale-[1.03]
                  "
                />

                {/* White hover overlay */}
                <span
                  className="
                    absolute inset-0
                    bg-white/20
                    opacity-0
                    transition-opacity duration-300
                    group-hover:opacity-100
                    pointer-events-none
                  "
                />
              </Link>

              {/* Category (linked) */}
              <div className="mb-2">
                <Link href={`/category/${article.category.toLowerCase()}`}>
                  <CategoryTag1 text={article.category.toUpperCase()} />
                </Link>
              </div>

              {/* Title (linked) */}
              <h3 className="font-semibold text-lg mb-2 text-black dark:text-gray-100 line-clamp-3 uppercase">
                <Link href={`/julio-herrera-velutini/${article.slug}`}>
                  <span className={underlineHover}>
                    {article.title}
                  </span>
                </Link>
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">
                {article.excerpt}
              </p>

              {/* Author (linked) */}
              <p className="text-[9px] text-gray-400 dark:text-gray-500 uppercase mt-auto">
                By
                {author && (
                  <Link
                    href={`/author/${author.slug ?? author.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="font-bold text-black dark:text-gray-100 px-1 hover:underline"
                  >
                    {author.name}
                  </Link>
                )}
                | {article.time} Read
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
