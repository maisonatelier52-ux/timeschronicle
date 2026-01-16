"use client";

import Link from "next/link";
import data from "@/data/data.json";
import CategoryTag1 from "./CategoryTag1";

export default function CategorySection() {
  const publishedArticles = data.articles.filter(a => a.published).sort((a,b)=> new Date(b.date) - new Date(a.date));

  const categorySourceArticles = publishedArticles.slice(23);  

  const categories = [
    ...new Set(categorySourceArticles.map(a => a.category))
  ].slice(0, 4);

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
      <div className="
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
        divide-y divide-gray-300 dark:divide-gray-700
        lg:divide-y-0 lg:divide-x
      ">
        {categories.map((category, index) => {
          const categoryArticles = data.articles
            .filter(a => a.published && a.category === category)
            .slice(0, 2);

          const main = categoryArticles[0];
          const secondary = categoryArticles[1];

          if (!main) return null;

          const author = data.authors.find(a => a.id === main.authorId);

          return (
            <div
              key={category}
              className={`
                flex flex-col py-3 px-4
                ${index === 0 ? "lg:pl-0" : ""}
                ${index === categories.length - 1 ? "lg:pr-0" : ""}
              `}
            >
              {/* Category (linked) */}
              <div className="mb-2">
                <Link href={`/category/${category.toLowerCase()}`} title={category}>
                  <CategoryTag1 text={category.toUpperCase()} />
                </Link>
              </div>

              {/* Main Title (linked) */}
              <h3 className="font-semibold text-lg mb-2 text-black dark:text-gray-100 line-clamp-3 uppercase">
                <Link href={`/news/${main.slug}`} title={main.title}>
                  <span className={underlineHover}>
                    {main.title}
                  </span>
                </Link>
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">
                {main.excerpt}
              </p>

              {/* Author (linked) */}
              <p className="text-[9px] text-gray-400 dark:text-gray-500 uppercase mb-4">
                By
                {author && (
                  <Link
                    href={`/author/${author.slug ?? author.name.toLowerCase().replace(/\s+/g, "-")}`}
                    title={author.name}
                    className="font-bold text-black dark:text-gray-100 px-1 hover:underline"
                  >
                    {author.name}
                  </Link>
                )}
                | {main.time} Read
              </p>

              {/* SECOND ROW */}
              {secondary && (
                <div className="flex gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  
                  {/* Image (linked) */}
                  <Link
                    href={`/news/${secondary.slug}`}
                    title={secondary.title}
                    className="w-24 h-18 flex-shrink-0 overflow-hidden block relative group"
                  >
                    {/* Image */}
                    <img
                      src={secondary.image}
                      alt={secondary.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* White overlay on hover */}
                    <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                  </Link>

                  {/* Title + Time (linked) */}
                  <div className="flex flex-col">
                    <h4 className="text-sm font-semibold line-clamp-3">
                      <Link href={`/news/${secondary.slug}`} title={secondary.title}>
                        <span className={underlineHover}>
                          {secondary.title}
                        </span>
                      </Link>
                    </h4>
                    <span className="text-[9px] text-gray-400 uppercase mt-1">
                      {secondary.time} Read
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
