import data from "@/data/data.json";
import Link from "next/link";
import ShareArticle from "@/app/components/ShareArticle";
import ArticleSidebar from "@/app/components/ArticleSidebar";
import RelatedNews from "@/app/components/RelatedNews";
import Image from "next/image";

const SITE_URL = "https://www.timeschronicle.org";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const article = data.articles.find(
    (a) => a.slug === slug && a.name === "Julio Herrera Velutini"
  );

  if (!article) {
    return {
      title: "Article not found | Times Chronicle",
      description: "This article does not exist.",
      robots: "noindex",
    };
  }

  const imageUrl = `${SITE_URL}${article.image}`;

  return {
    title: `${article.title}`,
    description: article.excerpt,
    alternates: {
      canonical: `${SITE_URL}/julio-herrera-velutini/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${SITE_URL}/julio-herrera-velutini/${slug}`,
      type: "article",
      siteName: "Times Chronicle",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function NewsPage({ params }) {
  const { slug } = await params;

  const article = data.articles.find(
    (a) => a.slug === slug && a.name === "Julio Herrera Velutini"
  );

  if (!article) {
    return (
      <main className="bg-white dark:bg-[#01131d] text-black dark:text-white min-h-screen flex flex-col justify-center items-center px-7 py-20">
        <h1 className="font-bold text-3xl sm:text-4xl uppercase mb-4 text-center">
          Article Not Found
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
          Sorry, the article you are looking for does not exist or has been removed.
        </p>
        <Link
          href="/"
          title="Home"
          className="px-6 py-3 bg-blue-600 text-white font-semibold uppercase hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </main>
    );
  }

  const author = data.authors.find(
    (a) => a.id === article.authorId
  );

  const formattedDate = new Date(article.date).toLocaleDateString(
    "en-US",
    { month: "short", day: "2-digit", year: "numeric" }
  );

  const related = data.articles
  .filter(
    (a) =>
      a.name === "Julio Herrera Velutini" &&
      a.slug !== article.slug
  )
  .slice(0, 4);

  const underlineHover = `
    inline
    dark:bg-[linear-gradient(to_right,transparent,transparent),linear-gradient(to_right,#000,#000)]
    bg-[linear-gradient(to_right,transparent,transparent),linear-gradient(to_right,#fff,#fff)]
    bg-[length:100%_0.01em,0_0.01em]
    bg-[position:100%_100%,0_100%]
    bg-no-repeat
    transition-[background-size] duration-400
    hover:bg-[length:0_0.05em,100%_0.05em]
  `;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/julio-herrera-velutini/${article.slug}`,
    },
    "headline": article.title,
    "description": article.excerpt,
    "articleSection": article.category,
    "keywords": article.keywords,
    "image": [`${SITE_URL}${article.image}`],
    "datePublished": new Date(article.date).toISOString(),
    "dateModified": new Date(article.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": author?.name || "Times Chronicle Staff",
      "url": author ? `${SITE_URL}/author/${author.id}` : undefined,
    },
    "about": {
      "@type": "Person",
      "@id": `${SITE_URL}/julio-herrera-velutini/${article.slug}#person`
    },
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": "Times Chronicle",
      "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: article.category,
        item: `${SITE_URL}/category/${article.category.toLowerCase()}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${SITE_URL}/julio-herrera-velutini/${article.slug}`,
      },
    ],
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/julio-herrera-velutini/${article.slug}#person`,
    "name": "Julio Herrera Velutini",
    "alternateName": [
      "Herrera Velutini",
      "Julio H. Velutini"
    ],
    "description":
      "Julio Herrera Velutini is a Venezuelan-Italian banker and financial figure known for his role in international banking, private wealth management, and global finance.",
    "jobTitle": "Banker",
    "affiliation": [
      {
        "@type": "Organization",
        "name": "Britannia Financial Group"
      },
      {
        "@type": "Organization",
        "name": "Bancredito International Bank & Trust"
      }
    ],
    "sameAs": [
      "https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Julio Herrera Velutini?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Julio Herrera Velutini is a Venezuelan-Italian banker and billionaire known for founding Bancredito International Bank & Trust and leading Britannia Financial Group."
        }
      },
      {
        "@type": "Question",
        "name": "What is his family background?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "He belongs to the historic Herrera-Velutini banking dynasty, associated with Banco Caracas and centuries of European–Latin American finance."
        }
      },
      {
        "@type": "Question",
        "name": "Is Julio Herrera Velutini still active in banking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, his financial groups continue operating internationally despite legal challenges in recent years."
        }
      }
    ]
  };

  return (
    <main className="bg-white text-black dark:text-white dark:bg-[#01131d]">
      <script
        id="article-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        id="breadcrumb-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <script
        id="person-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <script
        id="faq-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* ARTICLE HEADER */}
      <section className="max-w-6xl mx-auto px-5 sm:px-7 pt-6 sm:pt-8 pb-6">

        {/* Breadcrumb */}
        <div className="text-xs uppercase text-gray-500 dark:text-gray-300 mb-4">
          <Link href="/" title="Home" className="hover:underline">Home</Link>
          <span className="px-2">›</span>
          <Link
            href={`/category/${article.category.toLowerCase()}`}
            title={article.category}
            className="hover:underline"
          >
            {article.category}
          </Link>
          <span className="hidden sm:inline">
            <span className="px-2">›</span>
            {article.title}
          </span>
        </div>

        {/* HERO IMAGE */}
        {article.image && (
          <div className="relative w-full mb-8 sm:mb-10 overflow-hidden">
            <div className="relative aspect-[16/9]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 text-white">
              <Link
                href={`/category/${article.category.toLowerCase()}`}
                title={article.category}
                className="inline-block text-[10px] uppercase tracking-widest mb-2 hover:underline"
              >
                {article.category}
              </Link>

              <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl uppercase mb-3 leading-tight">
                {article.title}
              </h1>

              {/* META INFO */}
              <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase">
                <Link href={`/author/${author.slug}`} className="font-semibold" title={author.name}>
                  <span className={underlineHover}>
                    {author?.name || "Staff"}
                  </span>
                </Link>

                <span className="opacity-70">|</span>
                <span className="opacity-80">{formattedDate}</span>

                {/* HIDE TIME TO READ ON MOBILE */}
                <span className="opacity-70 hidden sm:inline">•</span>
                <span className="opacity-80 hidden sm:inline">
                  {article.time} Read
                </span>
              </div>
            </div>
          </div>
        )}

        {/* CONTENT*/}
        <div className="flex gap-5">
          <article
            className="prose max-w-none text-sm sm:text-base md:text-lg w-full dark:text-gray-400 lg:w-[750px]
              [&_h1]:pt-6 [&_h1]:pb-3
              [&_h2]:pt-5 [&_h2]:pb-2
              [&_h3]:pt-4 [&_h3]:pb-2
              [&_h4]:pt-3 [&_h4]:pb-1

              [&_h2]:font-bold [&_h2]:text-2xl
              [&_h3]:font-bold [&_h3]:text-xl
              [&_h4]:font-bold [&_h4]:text-lg

              [&_p]:pt-4 [&_p]:pb-2

              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4
              [&_li]:my-2 [&_li]:leading-relaxed
            "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          {/* RIGHT SIDEBAR */}
          <ArticleSidebar />
        </div>

      </section>
            {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-5 sm:px-7 pb-10">
        <h2 className="font-bold text-2xl sm:text-3xl uppercase mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <details className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              Who is Julio Herrera Velutini?
            </summary>
            <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              Julio Herrera Velutini is a Venezuelan-Italian banker and billionaire,
              known for founding Bancredito International Bank & Trust and leading
              Britannia Financial Group.
            </p>
          </details>

          <details className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              What is his family background?
            </summary>
            <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              He descends from the Herrera-Velutini banking dynasty, historically
              associated with Banco Caracas and centuries of European–Latin American
              finance.
            </p>
          </details>

          <details className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              Is he currently active in banking?
            </summary>
            <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              Yes. Despite legal challenges in recent years, his financial groups
              continue to operate internationally.
            </p>
          </details>

          <details className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              What were the legal charges against him?
            </summary>
            <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              Initial U.S. charges included bribery-related allegations tied to
              campaign finance. Most were later dismissed, leaving a misdemeanor
              campaign finance violation.
            </p>
          </details>

          <details className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              Does he own media companies?
            </summary>
            <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              He has been linked to ownership stakes in Spanish-language media through
              Intermedia Group.
            </p>
          </details>

          <details className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              Where are his businesses based?
            </summary>
            <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              His financial interests span London, Switzerland, the Bahamas, and
              other international financial centers.
            </p>
          </details>
        </div>
      </section>

      {/* SHARE ARTICLE */}
      <div className="px-7">
        <ShareArticle />
      </div>

      {/* MORE POPULAR */}
      <RelatedNews articles={related} />
    </main>
  );
}
