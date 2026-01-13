import CategoryTag from "@/app/components/CategoryTag";
import data from "@/data/data.json";
import Link from "next/link";

export default function CategoryMoreNews({ articles }) {
  if (!articles || !articles.length) return null;

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

  // Limit for mobile screen
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const displayedArticles = isMobile ? articles.slice(0, 9) : articles;

  return (
    <section>
      {/* Heading */}
      <div className="px-7 pt-3 pb-3">
        <h2 className="text-lg font-semibold relative">More News</h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 divide-x divide-gray-300">
        {displayedArticles.map((article, index) => (
          <div key={article.slug} className="flex flex-col px-7 pb-4">
            <Link href={`/news/${article.slug}`} className="group">
              <div className="relative aspect-[9/4] overflow-hidden">
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

                {/* Category Tag */}
                <CategoryTag text={article.category.toUpperCase()} />
              </div>

              <h2 className="font-bbh pt-4 text-[24px] leading-[1.15]">
                <span className={underlineHover}>{article.title}</span>
              </h2>
            </Link>

            <Link href={`/author/${getAuthorSlug(article.authorId)}`}>
              <p className="pt-2 text-[9px] uppercase">
                By{" "}
                <span className="font-semibold text-black dark:text-white">
                  {data.authors.find((a) => a.id === article.authorId)?.name}
                </span>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
