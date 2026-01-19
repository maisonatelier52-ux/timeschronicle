import CategoryTag from "@/app/components/CategoryTag";
import data from "@/data/data.json";
import CategoryTag1 from "./CategoryTag1";
import Link from "next/link";

export default function MoreRecent({articles}) {

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
    const underlineHoverRev = `
        inline
        dark:bg-[linear-gradient(to_right,transparent,transparent),linear-gradient(to_right,#000,#000)]
        bg-[linear-gradient(to_right,transparent,transparent),linear-gradient(to_right,#fff,#fff)]
        bg-[length:100%_0.01em,0_0.01em]
        bg-[position:100%_100%,0_100%]
        bg-no-repeat
        transition-[background-size] duration-400
        hover:bg-[length:0_0.05em,100%_0.05em]
    `;

    return (
        <section className="">

            {/* Heading */}
            <div className="px-7 pt-3 pb-4 flex justify-between items-center">
                <h2 className="text-lg font-semibold relative">More Recent</h2>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto divide-x divide-gray-300">

                {/* First 3 articles (row 1) */}
                {articles.slice(0, 3).map((article) => {
                    const author = authorsMap[article.authorId];
                    <Link href={`/news/${article.slug}`}
                    title={article.title}
                        key={article.slug}
                        className="group flex flex-col px-7 pb-4 transition-colors"
                    >
                        <div className="relative aspect-[9/4] overflow-hidden group">
                            <img
                                src={article.image}
                                alt={article.title}
                                loading="lazy"
                                className="
                                w-full h-full object-cover
                                transition-transform duration-300
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

                            {/* Category tag stays on top */}
                            <CategoryTag text={article.category.toUpperCase()} />
                        </div>

                        <h2 className="font-bold pt-4 text-[24px] leading-[1.15]">
                            <span className={underlineHover}>
                                {article.title}
                            </span>
                        </h2>

                        <p className="pt-2 text-[9px] text-gray-400 uppercase">
                        By{" "}
                        <span className="font-semibold text-black dark:text-white">
                            {author?.name}
                        </span>{" "}
                        | {article.time} Read
                        </p>
                    </Link>
                })}

                {/* 4th Article (left, row 2) */}
                {articles[3] && (
                <Link 
                    title={articles[3].title}
                    href={`/news/${articles[3].slug}`}
                    className="relative md:col-start-1 md:row-start-2 h-[360px] px-7 overflow-hidden group"
                    >
                    {/* Image */}
                    <img
                        src={articles[3].image}
                        alt={articles[3].title}
                        loading="lazy"
                        fetchPriority="low"
                        className="
                        w-full h-full object-cover
                        transition-transform duration-300
                        "
                    />

                    {/* White hover overlay (image effect) */}
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

                    {/* Black gradient for text readability */}
                    <span
                        className="
                        absolute inset-x-0 bottom-0 h-2/3 left-7 right-7
                        bg-gradient-to-t from-black/80 via-black/40 to-transparent
                        pointer-events-none
                        "
                    />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                        <div className="px-6">
                        <CategoryTag1 text={articles[3].category.toUpperCase()} />

                        <h2 className="font-bold text-white text-[24px] mt-2 leading-[1.15]">
                            <span className={underlineHoverRev}>
                                {articles[3].title}
                            </span>
                        </h2>

                        <p className="text-[9px] text-gray-200 uppercase py-2">
                            By{" "}
                            <span className="font-semibold text-white">
                                {data.authors.find(a => a.id === articles[3].authorId)?.name}
                            </span>{" "}
                            | {articles[3].time} Read
                        </p>
                        </div>
                    </div>
                </Link>
                )}

                {/* 5th Article (under 4th, same column) */}
                {articles[4] && (() => {
                    const isJulio =
                        articles[4].name === "Julio Herrera Velutini";

                    const articleLink = isJulio
                        ? `/julio-herrera-velutini/${articles[4].slug}`
                        : `/news/${articles[4].slug}`;

                    const articleTitle = isJulio
                        ? articles[4].title2
                        : articles[4].title;

                    const author = data.authors.find(
                        a => a.id === articles[4].authorId
                    );

                    return (
                        <div className="md:col-start-1 md:row-start-3 flex flex-col px-7">
                            <div className="relative">
                                <Link href={`/category/${articles[4].category.toLowerCase()}`} title={articles[4].category}>
                                    <CategoryTag text={articles[4].category.toUpperCase()} />
                                </Link>
                            </div>

                            <Link href={articleLink} title={articleTitle}>
                                <h2 className="font-bold pt-4 text-[26px] leading-[1.15]">
                                    <span className={underlineHover}>
                                        {articleTitle}
                                    </span>
                                </h2>

                                <div className="overflow-hidden">
                                    <p className="text-gray-600 dark:text-gray-300 pt-3 text-sm line-clamp-3">
                                        {articles[4].excerpt}
                                    </p>
                                </div>
                            </Link>

                            <p className="pt-2 text-[9px] text-gray-400 uppercase">
                                By{" "}
                                <Link href={`/author/${author?.slug}`} title={author?.name}>
                                    <span className="font-semibold text-black dark:text-white">
                                        {author?.name}
                                    </span>
                                </Link>
                                | {articles[4].time} Read
                            </p>
                        </div>
                    );
                })()}
                {/* 6th Article (right, spans rows 2–3 & columns 2–3) */}
                {articles[5] && (
                    <div
                        className="md:col-start-2 md:col-span-2 md:row-start-2 md:row-span-2 flex flex-col px-7 pb-4"
                    >
                        <Link href={`/news/${articles[5].slug}`} title={articles[5].title}>
                            <div className="relative aspect-[16/9] overflow-hidden group">
                                <img
                                    src={articles[5].image}
                                    alt={articles[5].title}
                                    className="
                                    w-full h-full object-cover
                                    transition-transform duration-300
                                    group-hover:scale-[1.04]
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

                                {/* Category tag */}
                                <CategoryTag text={articles[5].category.toUpperCase()} />
                            </div>

                            <h2 className="
                                font-extrabold pt-4
                                text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                                leading-tight sm:leading-snug lg:leading-[1.15]
                                max-w-3xl
                            ">
                                <span className={underlineHover}>
                                    {articles[5].title}
                                </span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm py-4 line-clamp-3">
                                {articles[5].excerpt}
                            </p>
                        </Link>
                        <p className="pb-1 text-[9px] text-gray-400 uppercase pt-2">
                            By{" "}
                            <Link 
                                href={`/author/${data.authors.find(a => a.id === articles[5].authorId)?.slug}`}
                                title={data.authors.find(a => a.id === articles[5].authorId)?.name}
                            >
                                <span className="font-semibold text-black dark:text-white">
                                    {data.authors.find(a => a.id === articles[5].authorId)?.name}
                                </span>{" "}
                            </Link>
                            | {articles[5].time} Read
                        </p>
                    </div>
                )}

                {/* Second row of 3 articles (same as first 3) */}
                {articles.slice(6, 9).map((article) => (
                    <div
                    key={article.slug}
                    className="flex flex-col px-7 pb-4"
                    >
                        <Link href={`/news/${article.slug}`} title={article.title}>
                            <div className="relative aspect-[9/4] overflow-hidden group">
                                {/* Image */}
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                                />

                                {/* White hover overlay */}
                                <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                                {/* Category tag */}
                                <CategoryTag text={article.category.toUpperCase()} />
                            </div>
                            <h2 className="font-bold pt-4 text-[24px] leading-[1.15]">
                                <span className={underlineHover}>
                                    {article.title}
                                </span>
                            </h2>
                        </Link>

                        <p className="pt-2 text-[9px] text-gray-400 uppercase">
                            By{" "}
                            <Link 
                                href={`/author/${data.authors.find(a => a.id === article.authorId)?.slug}`}
                                title={data.authors.find(a => a.id === article.authorId)?.name}
                            >
                                <span className="font-semibold text-black dark:text-white">
                                    {data.authors.find(a => a.id === article.authorId)?.name}
                                </span>{" "}
                            </Link>
                            | {article.time} Read
                        </p>
                    </div>
                ))}
                {/* {articles[9] && (
                    <div className="md:col-span-2 flex flex-col px-7 pb-4">
                        <Link href={`/news/${articles[9].slug}`} title={articles[9].title}>
                            <div className="relative aspect-[16/9] overflow-hidden group">
                                <img
                                    src={articles[9].image}
                                    alt={articles[9].title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                                />

                                <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                                <CategoryTag text={articles[9].category.toUpperCase()} />
                            </div>
                            <h2 className="font-bold pt-4 text-5xl leading-[1.15]">
                                <span className={underlineHover}>
                                    {articles[9].title}
                                </span>
                            </h2>

                            <p className="text-gray-600 dark:text-gray-300 text-sm py-2 line-clamp-3">
                                {articles[9].excerpt}
                            </p>
                        </Link>

                        <Link 
                            href={`/author/${data.authors.find(a => a.id === articles[9].authorId)?.slug}`} 
                            title={data.authors.find(a => a.id === articles[9].authorId)?.name}
                        >
                            <p className="pt-2 text-[9px] text-gray-400 uppercase">
                                By{" "}
                                <span className="font-semibold text-black dark:text-white">
                                    {data.authors.find(a => a.id === articles[9].authorId)?.name}
                                </span>{" "}
                                | {articles[9].time} Read
                            </p>
                        </Link>
                    </div>
                )} */}

                {/* RIGHT — stacked (like articles 4 & 5) */}
                {/* <div className="flex flex-col">

                    {articles[10] && (
                        <div
                            className="
                                relative group
                                h-[220px]
                                sm:h-[260px]
                                md:h-[300px]
                                lg:h-[360px]
                                xl:h-[400px]
                                overflow-hidden
                                px-7
                            "
                            >
                            <img
                                src={articles[10].image}
                                alt={articles[10].title}
                                className="
                                w-full h-full object-cover
                                transition-transform duration-300
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

                            <span
                                className="
                                absolute inset-x-0 bottom-0 left-7 right-7 h-2/3
                                bg-gradient-to-t from-black/85 via-black/50 to-transparent
                                pointer-events-none
                                "
                            />

                            <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                                <div className="px-6">
                                <CategoryTag1 text={articles[10].category.toUpperCase()} />

                                <h2 className="font-bold text-white text-[24px] mt-2 leading-[1.15]">
                                    <span className={underlineHoverRev}>
                                    {articles[10].title}
                                    </span>
                                </h2>

                                <p className="text-[9px] text-gray-200 uppercase">
                                    By{" "}
                                    <span className="font-semibold text-white">
                                    {data.authors.find(a => a.id === articles[10].authorId)?.name}
                                    </span>{" "}
                                    | {articles[10].time} Read
                                </p>
                                </div>
                            </div>
                            </div>
                    )}

                    {articles[11] && (
                        <div className="flex flex-col px-7 pt-10">
                            <div className="relative">
                                <Link href={`/category/${articles[11].category.toLowerCase()}`} title={articles[11].category}>
                                    <CategoryTag text={articles[11].category.toUpperCase()} />
                                </Link>
                            </div>
                            <Link href={`/news/${articles[11].slug}`} title={articles[11].title}>
                                <h2 className="font-bold pt-4 text-[26px] leading-[1.15]">
                                    <span className={underlineHover}>
                                        {articles[11].title}
                                    </span>
                                </h2>

                                <div className="overflow-hidden">
                                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 pt-3">
                                        {articles[11].excerpt}
                                    </p>
                                </div>
                            </Link>

                            <p className="text-[9px] text-gray-400 uppercase py-2">
                                By{" "}
                                <Link 
                                    href={`author/${data.authors.find(a => a.id === articles[11].authorId)?.slug}`}
                                    title={data.authors.find(a => a.id === articles[11].authorId)?.name}
                                >
                                    <span className="font-semibold text-black dark:text-white">
                                    {data.authors.find(a => a.id === articles[11].authorId)?.name}
                                    </span>{" "}
                                </Link>
                                | {articles[11].time} Read
                            </p>
                        </div>
                    )}
                </div> */}
            </div>
        </section>
    );
}
