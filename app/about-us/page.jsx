const SITE_URL = "https://timeschronicle.org";

export const metadata = {
  title: "About Times Chronicle — Independent US Digital News Platform",
  description:
    "Learn about Times Chronicle, an independent US digital news platform delivering factual reporting across business, finance, law, lifestyle, travel, and investigations.",  alternates: {
    canonical: `${SITE_URL}/about-us`,
  },
  openGraph: {
    title: "About Times Chronicle — Independent US Digital News Platform",
    description:
      "Discover the mission and vision behind Times Chronicle — an independent US digital news platform.",
    url: `${SITE_URL}/about-us`,
    type: "website",
    siteName: "Times Chronicle",
    images: [
      {
        url: `${SITE_URL}/logo/Times-Chronicle-White-Text.png`,
        width: 1200,
        height: 630,
        alt: "About Times Chronicle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Times Chronicle",
    description:
      "Learn who we are and what drives our mission to deliver factual US news.",
    images: [`${SITE_URL}/logo/Times-Chronicle-White-Text.png`],
  },
};

export default function AboutPage() {

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/about-us#webpage`,
    "url": `${SITE_URL}/about-us`,
    "name": "About Times Chronicle",
    "description": metadata.description,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Times Chronicle",
      "url": SITE_URL
    },
    "about": {
      "@type": "NewsMediaOrganization",
      "name": "Times Chronicle"
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": `${SITE_URL}/about-us`
      }
    ]
  };

  return (
    <>
      {/* JSON-LD STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="min-h-screen bg-white text-gray-900 dark:bg-[#020f15] dark:text-gray-100 transition-colors duration-300">

        {/* HERO */}
        <section className="relative w-full h-[520px] overflow-hidden rounded-b-3xl shadow-md">
          <img
            src="/about.webp"
            alt="Times Chronicle newsroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center leading-tight">
              Truthful reporting is the foundation<br />
              of an informed society.
            </h1>
          </div>
        </section>

        {/* INTRO */}
        <section className="max-w-4xl mx-auto px-7 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Times Chronicle
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Times Chronicle</strong> is an independent digital news publication
            dedicated to accurate, fair, and responsible journalism. We focus on
            the stories shaping the United States—providing clarity, context, and
            accountability in a fast-moving news environment.
          </p>
        </section>

        {/* MISSION */}
        <section className="max-w-6xl mx-auto px-7 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Our Mission
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Our mission is to inform the public with journalism rooted in facts,
              independence, and public interest. We aim to help readers understand
              complex national issues without bias, sensationalism, or political
              pressure.
            </p>
          </div>
          <img
            src="/write.webp"
            alt="Times Chronicle editorial mission"
            className="rounded-2xl shadow-lg object-cover w-full h-80"
          />
        </section>

        {/* VALUES */}
        <section className="bg-white dark:bg-[#041a22] py-20 px-7">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-14">
              Our Editorial Values
            </h3>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Accuracy",
                  text: "Every story is carefully researched, verified, and reviewed to ensure factual correctness.",
                },
                {
                  title: "Independence",
                  text: "We operate free from political parties, corporate influence, and ideological agendas.",
                },
                {
                  title: "Accountability",
                  text: "We believe journalism should hold institutions and power to account in the public interest.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-gray-50 dark:bg-[#03151c] shadow-sm"
                >
                  <h4 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COVERAGE */}
        <section className="max-w-6xl mx-auto px-7 py-20 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8">
            What We Cover
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Times Chronicle delivers in-depth reporting across national affairs,
            politics, business, technology, health, and world news—focusing on
            stories that matter most to readers in the United States.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 dark:bg-black text-white py-28 px-7 text-center rounded-t-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Stay Ahead of the News
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Follow Times Chronicle for timely, accurate, and insightful reporting
            that helps you understand what’s happening—and why it matters.
          </p>
        </section>

      </div>
    </>
  );
}
