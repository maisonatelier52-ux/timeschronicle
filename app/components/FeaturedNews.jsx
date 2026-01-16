import Link from "next/link";
import CategoryTag from "@/app/components/CategoryTag";
import data from "@/data/data.json";
import Image from "next/image";

export default function FeaturedNews({ featured }) {
  const leftFeatured = featured[0];
  const middleGrids = featured.slice(1, 3);
  const rightGrids = featured.slice(3, 7);

  const underlineHover = `
    inline
    bg-[linear-gradient(to_right,transparent,transparent),linear-gradient(to_right,#000,#000)]
    dark:bg-[linear-gradient(to_right,transparent,transparent),linear-gradient(to_right,#fff,#fff)]
    bg-[length:100%_0.01em,0_0.01em]
    bg-[position:100%_100%,0_90%]
    bg-no-repeat
    transition-[background-size] duration-400
    hover:bg-[length:0_0.05em,100%_0.05em]
  `;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b-4">

      {/* FEATURED (1) */}
      <div
        className="
          order-1 md:col-span-2 lg:col-span-2 lg:row-span-4
          flex flex-col px-7 pt-7 pb-3
          lg:border-r border-gray-300 dark:border-gray-700
          group
        "
      >
        <div className="bg-black dark:bg-white text-white dark:text-black px-[5px] py-1 text-sm font-semibold w-fit">
          What’s We Reading
        </div>

        <Link 
          href={`/news/${leftFeatured.slug}`} 
          title={leftFeatured.title}
          className="group"
        >
          <div className="relative mx-auto pt-5 max-w-[661px] aspect-[1200/580] overflow-hidden">
            <Image
              src={leftFeatured.image}
              alt={leftFeatured.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 661px"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
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

            <CategoryTag text={leftFeatured.category.toUpperCase()} />
          </div>
          <div className="pt-4">
            <h2
              className={`
                text-[42px] font-extrabold lg:text-[52px] leading-[1]
                ${underlineHover}
              `}
            >
              <span className="text-blue-500 font-bold">Exclusive:</span>{" "}
              {leftFeatured.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
              {leftFeatured.excerpt}
            </p>

            <p className="pt-4 text-[9px] text-gray-400 uppercase">
              By{" "}
              <span className="font-bold text-black dark:text-white">
                {data.authors.find(a => a.id === leftFeatured.authorId)?.name}
              </span>{" "}
              | {leftFeatured.time} Read
            </p>
          </div>
        </Link>
      </div>

      {/* GRID 2 & 3 */}
      {middleGrids.map((article, index) => (
        <Link
          key={article.slug}
          title={article.title}
          href={`/news/${article.slug}`}
          className={`
            order-2 flex flex-col px-7 py-7
            lg:col-start-3
            ${index === 0 ? "lg:border-b border-gray-300 dark:border-gray-700" : ""}
            group
          `}
        >
          <div className="relative aspect-[1200/661] overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="
                w-full h-full object-cover
                transition-transform duration-300
                group-hover:scale-[1.03]
              "
            />

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

            <CategoryTag text={article.category.toUpperCase()} />
          </div>
          <h2 className="font-bold pt-4 text-[24px] leading-[1.15] line-clamp-5">
            <span className={underlineHover}>{article.title}</span>
          </h2>

          <p className="pt-2 text-[9px] text-gray-400 uppercase">
            {article.time} Read
          </p>
        </Link>
      ))}

      {/* RIGHT LIST (4–7) */}
      <div
        className="
          order-3
          md:col-start-2 md:row-start-2 md:row-span-2
          lg:col-start-4 lg:row-span-4 lg:row-start-1
          flex flex-col
          lg:border-l border-gray-300 dark:border-gray-700
        "
      >
        <div className="px-7 pt-7 flex justify-between items-center text-sm">
          <span className="bg-black dark:bg-white text-white dark:text-black px-3 py-1 font-semibold">
            Most Recent
          </span>
        </div>

        <div className="flex flex-col">
          {rightGrids.map(article => (
            <Link
              key={article.slug}
              title={article.title}
              href={`/news/${article.slug}`}
              className="
                flex gap-3 px-7 py-4
                border-b border-gray-300 dark:border-gray-700
                group
              "
            >
              <div className="flex-1">
                <h3 className="font-bold text-lg leading-[1.25] line-clamp-6">
                  <span className={underlineHover}>{article.title}</span>
                </h3>
                <p className="text-[9px] text-gray-400 uppercase">
                  {article.time} Read
                </p>
              </div>

              <div className="w-[110px] aspect-[3/2] shrink-0 overflow-hidden relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-300
                    group-hover:scale-[1.05]
                  "
                />
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
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
