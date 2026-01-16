import data from "@/data/data.json";
import CategoryTag from "./CategoryTag";
import CategoryTag1 from "./CategoryTag1";

export function MoreRecentBlock({ articles }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto divide-x divide-gray-300">

      {/* First 3 */}
      {articles.slice(0, 3).map(article => (
        <div key={article.slug} className="flex flex-col px-7 pb-4">
          <div className="relative aspect-[9/4]">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            <CategoryTag text={article.category.toUpperCase()} />
          </div>

          <h2 className="font-bold pt-4 text-[24px] leading-[1.15]">
            {article.title}
          </h2>

          <p className="pt-2 text-[9px] text-gray-400 uppercase">
            By{" "}
            <span className="font-semibold text-black dark:text-white">
              {data.authors.find(a => a.id === article.authorId)?.name}
            </span>{" "}
            · {article.time} Read
          </p>
        </div>
      ))}

      {/* 4th */}
      {articles[3] && (
        <div className="relative md:col-start-1 md:row-start-2 px-7 h-[400px] overflow-hidden">
          <img src={articles[3].image} alt={articles[3].title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <div className="px-6">
              <CategoryTag1 text={articles[3].category.toUpperCase()} />
              <h2 className="font-bold text-white text-[24px] mt-2">
                {articles[3].title}
              </h2>
              <p className="text-[9px] text-gray-200 uppercase">
                By{" "}
                <span className="font-semibold">
                  {data.authors.find(a => a.id === articles[3].authorId)?.name}
                </span>{" "}
                · {articles[3].time} Read
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 5th (text only) */}
      {articles[4] && (
        <div className="md:col-start-1 md:row-start-3 flex flex-col px-7 pt-10">
          <CategoryTag text={articles[4].category.toUpperCase()} />

          <h2 className="font-bold pt-4 text-[26px] leading-[1.15]">
            {articles[4].title}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-sm py-4 line-clamp-3">
            {articles[4].excerpt}
          </p>

          <p className="pt-2 text-[9px] text-gray-400 uppercase">
            By{" "}
            <span className="font-semibold text-black dark:text-white">
              {data.authors.find(a => a.id === articles[4].authorId)?.name}
            </span>{" "}
            | {articles[4].time} Read
          </p>
        </div>
      )}

      {/* 6th (big right) */}
      {articles[5] && (
        <div className="md:col-start-2 md:col-span-2 md:row-start-2 md:row-span-2 flex flex-col px-7 pb-4">
          <div className="relative aspect-[16/9]">
            <img src={articles[5].image} alt={articles[5].title} className="w-full h-full object-cover" />
            <CategoryTag text={articles[5].category.toUpperCase()} />
          </div>

          <h2 className="font-bold pt-4 text-5xl leading-[1.15]">
            {articles[5].title}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-sm py-4 line-clamp-3">
            {articles[5].excerpt}
          </p>

          <p className="pt-2 text-[9px] text-gray-400 uppercase">
            By{" "}
            <span className="font-semibold text-black dark:text-white">
              {data.authors.find(a => a.id === articles[5].authorId)?.name}
            </span>{" "}
            · {articles[5].time} Read
          </p>
        </div>
      )}

    </div>
  );
}