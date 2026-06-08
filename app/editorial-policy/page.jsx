const SITE_URL = "https://www.timeschronicle.org";

export const metadata = {
  title: "Editorial Policy — Times Chronicle",
  description:
    "Learn about the editorial standards, reporting principles, fact-checking process, editorial independence, and corrections policy followed by Times Chronicle.",
  alternates: {
    canonical: `${SITE_URL}/editorial-policy`,
  },
  openGraph: {
    title: "Editorial Policy — Times Chronicle",
    description:
      "Explore the editorial principles and journalistic standards that guide reporting at Times Chronicle.",
    url: `${SITE_URL}/editorial-policy`,
    type: "website",
    siteName: "Times Chronicle",
  },
  twitter: {
    card: "summary",
    title: "Editorial Policy — Times Chronicle",
    description:
      "Read about Times Chronicle's editorial standards, accuracy, fairness, corrections, and reporting practices.",
  },
};

const principles = [
  {
    number: "01",
    title: "Accuracy First",
    icon: "🎯",
    body: "Names matter. Dates matter. Facts matter. We verify information before publishing and review all details carefully. If information cannot be independently confirmed, we say so — plainly.",
  },
  {
    number: "02",
    title: "Editorial Independence",
    icon: "🛡️",
    body: "Our coverage is determined by editors and reporters. Advertisers, brands, and commercial partners do not direct editorial decisions. Sponsored content is always clearly identified and kept separate from our journalism.",
  },
  {
    number: "03",
    title: "Research and Sources",
    icon: "📋",
    body: "Our reporting is based on official statements, interviews, public documents, industry research, and trusted publications. News develops — stories evolve. We update coverage as credible new information comes to light.",
  },
  {
    number: "04",
    title: "Fairness and Representation",
    icon: "⚖️",
    body: "We seek fairness, context, and respect in all the stories we tell. When criticism or allegations are included, we make reasonable efforts to seek comment from those involved before publication.",
  },
  {
    number: "05",
    title: "Reviews and Recommendations",
    icon: "✅",
    body: "Products, services, and public figures are evaluated through reporting, research, and editorial judgment. Coverage cannot be purchased. Positive reviews are never guaranteed by commercial relationships.",
  },
  {
    number: "06",
    title: "Corrections",
    icon: "🔄",
    body: "Mistakes happen. Ignoring them is not an option. When a significant error is identified, we correct it promptly and responsibly — and we are transparent with readers about what changed.",
  },
];

export default function EditorialPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Editorial Policy",
    url: `${SITE_URL}/editorial-policy`,
    description:
      "Editorial standards, reporting practices, corrections policy, and journalistic principles followed by Times Chronicle.",
    publisher: {
      "@type": "Organization",
      name: "Times Chronicle",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <div className="min-h-screen bg-[#faf8f4] font-serif">

        {/* Hero */}

        <div className="border-b-4 border-stone-900">
          <div className="max-w-3xl mx-auto px-6 py-16 text-center">

            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-700 font-sans mb-5">
              How We Work
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight mb-4">
              Editorial
              <br />
              <span className="italic font-normal">
                Policy
              </span>
            </h1>

            <div className="w-16 h-1 bg-amber-700 mx-auto mb-8" />

            <p className="text-stone-500 text-[16px] leading-relaxed max-w-lg mx-auto">
              Every article begins with a simple goal: earn the reader's trust.
              These are the standards that guide every story we publish at the
              Times Chronicle.
            </p>

          </div>
        </div>

        {/* Banner */}

        <div className="bg-stone-800 text-stone-100">
          <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-center">

            {[
              {
                label: "Before publishing",
                text: "Every story undergoes editorial review.",
              },
              {
                label: "When uncertain",
                text: "We say so clearly — no speculation as fact.",
              },
              {
                label: "When wrong",
                text: "We correct it promptly and transparently.",
              },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[10px] uppercase tracking-[0.25em] text-amber-500 font-sans mb-2">
                  {item.label}
                </p>

                <p className="text-stone-300 text-[15px] font-serif italic">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* Principles */}

        <div className="max-w-5xl mx-auto px-6 py-16">

          <p className="text-[11px] uppercase tracking-[0.3em] text-amber-700 font-sans mb-10 text-center">
            Our Editorial Principles
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {principles.map((p) => (
              <div
                key={p.number}
                className="flex gap-5 bg-white border border-stone-200 p-7 hover:border-amber-300 hover:shadow-sm transition-all h-full"
              >
                <div className="shrink-0">
                  <span className="text-3xl font-bold text-stone-300 block leading-none">
                    {p.number}
                  </span>

                  <span className="text-xl mt-1 block">
                    {p.icon}
                  </span>
                </div>

                <div>
                  <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-900 font-sans mb-3">
                    {p.title}
                  </h2>

                  <p className="text-stone-600 text-[14px] leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Reporting */}

        <div className="bg-stone-50 border-t border-stone-200">
          <div className="max-w-3xl mx-auto px-6 py-14">

            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700 font-sans mb-5">
              How We Report
            </h2>

            <p className="text-stone-700 text-[15px] leading-relaxed mb-4">
              News moves quickly. Information can move even faster — and
              inaccurately. Our team follows official announcements,
              public records, first-hand reporting, and verified sources
              whenever available.
            </p>

            <p className="text-stone-700 text-[15px] leading-relaxed mb-4">
              We cover U.S. politics, national affairs, the economy,
              technology, health, and world news. Each beat is handled by
              reporters with subject-matter focus who understand the
              context behind the story — not just the facts on the
              surface.
            </p>

            <p className="text-stone-700 text-[15px] leading-relaxed">
              If you have concerns about any of our reporting, or believe
              something requires correction or a right of reply, our
              editorial team is available through our{" "}
              <a
                href="/contact"
                className="text-amber-700 underline underline-offset-2"
              >
                Contact page
              </a>.
            </p>

          </div>
        </div>

        {/* Promise */}

        <div className="border-t-4 border-stone-900 bg-stone-900 text-stone-100">
          <div className="max-w-3xl mx-auto px-6 py-12 text-center">

            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-500 font-sans mb-5">
              Our Promise
            </p>

            <p className="text-xl md:text-2xl font-serif italic text-stone-300 leading-relaxed">
              "Accuracy matters. Curiosity matters. Readers come first."
            </p>

          </div>
        </div>

      </div>
    </>
  );
}