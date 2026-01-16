import data from "@/data/data.json";
import { FaTwitter, FaFacebookF, FaInstagram, FaCheck } from "react-icons/fa";
import MoreNewsByAuthor from "@/app/components/MoreNewsByAuthor";

const SITE_URL = "https://timeschronicle.org";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const author = data.authors.find(a => a.slug === slug);
  const imageUrl = `${SITE_URL}${author.photo}`;

  if (!author) {
    return {
      title: "Author Not Found — Times Chronicle",
      description: "This author profile does not exist on Times Chronicle.",
    };
  }

  return {
    title: `${author.name} — Author at Times Chronicle`,
    description:
      `Read articles and investigative reports written by ${author.name} on Times Chronicle.`,
    alternates: {
      canonical: `${SITE_URL}/author/${author.slug}`,
      languages: {
        "en": `${SITE_URL}/author/${author.slug}`,
        "en-US": `${SITE_URL}/author/${author.slug}`,
      },
    },
    openGraph: {
      title: `${author.name} — Times Chronicle Staff`,
      description: author.bio,
      url: `${SITE_URL}/author/${author.slug}`,
      type: "profile",
      siteName: "Times Chronicle",
      images: [
        {
          url: imageUrl,
          width: 600,
          height: 600,
          alt: author.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${author.name} — Times Chronicle Staff`,
      description: author.bio,
      images: [imageUrl],
    },
  };
}

export default async function AuthorPage({ params }) {
  const { slug } = await params;

  const author = data.authors.find((a) => a.slug === slug);
  if (!author) {
    return (
      <section className="flex flex-col items-center justify-center px-5 text-center bg-white dark:bg-[#01131d] text-black dark:text-white py-20 sm:py-32">
        <h1 className="font-bbh text-3xl sm:text-4xl mb-4">Author Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-md">
          We couldn’t find the author you’re looking for. Please check the URL or try browsing other authors.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Go Back Home
        </a>
      </section>
    );
  }

  /* ---------- JSON-LD ---------- */

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author.name,
    "url": `${SITE_URL}/author/${author.slug}`,
    "image": `${SITE_URL}${author.photo}`,
    "description": author.bio,
    "jobTitle": "Journalist",
    "worksFor": {
      "@type": "NewsMediaOrganization",
      "name": "Times Chronicle",
      "url": SITE_URL,
    },
    "sameAs": [
      author.twitter,
      author.quora,
      author.reddit
    ].filter(Boolean),
  };

  const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
          {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL,
          },
          {
          "@type": "ListItem",
          "position": 2,
          "name": "Authors",
          "item": `${SITE_URL}/author`,
          },
          {
          "@type": "ListItem",
          "position": 3,
          "name": author.name,
          "item": `${SITE_URL}/author/${author.slug}`,
          },
      ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        id="author-person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <script
        id="author-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* AUTHOR HEADER */}
      <section
        className="
          mx-auto px-5 md:px-10 py-20
          flex flex-col md:flex-row items-start md:items-center gap-8
          bg-white dark:bg-[#01131d]

          /* DOT BACKGROUND */
          bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]
          bg-[size:14px_14px]
          dark:bg-[radial-gradient(#1f2933_1px,transparent_1px)]
          dark:bg-[size:14px_14px]
        "
      >
        {/* IMAGE */}
        <div className="shrink-0">
          <img
            src={author.photo || "/blank-profile-picture.webp"}
            alt={author.name}
            className="w-28 h-28 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* INFO */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            {author.name}, Author at Times Chronicle
            <FaCheck className="text-green-500 text-sm" />
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mt-2 max-w-2xl">
            {author.name} is a journalist and author at Wiresavvy. {author.bio}
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-4 mt-4">
            {author.twitter && (
              <a href={author.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-gray-500 hover:text-blue-500 transition" />
              </a>
            )}
            {author.facebook && (
              <a href={author.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-gray-500 hover:text-blue-600 transition" />
              </a>
            )}
            {author.instagram && (
              <a href={author.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-500 hover:text-pink-500 transition" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* MORE NEWS BY AUTHOR */}
      <MoreNewsByAuthor authorId={author.id} authorName={author.name} />
    </>
  );
}
