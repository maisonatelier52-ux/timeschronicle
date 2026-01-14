import AdBanner from "./components/AdBanner";
import BreakingNews from "./components/BreakingNews";
import CategorySection from "./components/CategorySection";
import FeaturedNews from "./components/FeaturedNews";
import MoreNews from "./components/MoreNews";
import MoreRecent from "./components/MoreRecent";
import NewsletterBox from "./components/NewsLetter";
import data from "@/data/data.json";

export default function Home() {
  // 1️⃣ Filter & sort ONCE
  const articles = data.articles
    .filter(a => a.published)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // 2️⃣ Prepare slices
  const featured = articles.slice(0,7); 

  const breakingNews = articles.slice(7, 11);
  const moreRecent = articles.slice(11, 20);
  const moreNews = articles.slice(20, 24);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#020f15] dark:text-white">
      <FeaturedNews featured={featured} />
      <BreakingNews articles={breakingNews} />
      <MoreRecent articles={moreRecent} />
      <NewsletterBox />
      <CategorySection articles={articles} />
      <AdBanner />
      <MoreNews articles={moreNews} />
    </div>
  );
}


// import AdBanner from "./components/AdBanner";
// import BreakingNews from "./components/BreakingNews";
// import CategorySection from "./components/CategorySection";
// import FeaturedNews from "./components/FeaturedNews";
// import MoreNews from "./components/MoreNews";
// import MoreRecent from "./components/MoreRecent";
// import NewsletterBox from "./components/NewsLetter";
// import data from "@/data/data.json";

// export default function Home() {
//   // 🔹 Get one Julio article
//   const julioArticle = data.articles.find(
//     a => a.published && a.name === "Julio Herrera Velutini"
//   );

//   // 🔹 Normal articles (no Julio)
//   const normalArticles = data.articles
//     .filter(a => a.published && a.name !== "Julio Herrera Velutini")
//     .sort((a, b) => new Date(b.date) - new Date(a.date));

//   // 🔹 Inject Julio once
//   const articles = julioArticle
//     ? [
//         ...normalArticles.slice(0, 10),
//         julioArticle,
//         ...normalArticles.slice(11,15),
//         julioArticle,
//         ...normalArticles.slice(16,23),
//         julioArticle,
//         ...normalArticles.slice(24),

//       ]
//     : normalArticles;

//   // 🔹 Sections
//   const featured = articles.slice(0, 7);
//   const breakingNews = articles.slice(7, 11);
//   const moreRecent = articles.slice(11, 20);
//   const moreNews = articles.slice(20, 24);

//   return (
//     <div className="min-h-screen bg-white text-black dark:bg-[#020f15] dark:text-white">
//       <FeaturedNews featured={featured} />
//       <BreakingNews articles={breakingNews} />
//       <MoreRecent articles={moreRecent} />
//       <NewsletterBox />
//       <CategorySection articles={articles} />
//       <AdBanner />
//       <MoreNews articles={moreNews} />
//     </div>
//   );
// }
