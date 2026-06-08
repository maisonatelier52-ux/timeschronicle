const SITE_URL = "https://www.timeschronicle.org";

export const metadata = {
  title: "Corrections Policy — Times Chronicle",
  description:
    "Learn how Times Chronicle handles factual corrections, updates developing stories, and maintains transparency and accountability in its journalism.",
  alternates: {
    canonical: `${SITE_URL}/corrections-policy`,
  },
  openGraph: {
    title: "Corrections Policy — Times Chronicle",
    description:
      "Read Times Chronicle's Corrections Policy and our commitment to correcting errors quickly and transparently.",
    url: `${SITE_URL}/corrections-policy`,
    type: "website",
    siteName: "Times Chronicle",
  },
  twitter: {
    card: "summary",
    title: "Corrections Policy — Times Chronicle",
    description:
      "Discover how Times Chronicle reviews, verifies, and corrects factual errors while maintaining editorial transparency.",
  },
};

const correctionTypes = [
  "Names and titles",
  "Dates and timelines",
  "Locations and jurisdictions",
  "Quotes and attributed statements",
  "Brand, company, or organization information",
  "Statistics and numerical data",
  "Context, framing, or reporting inaccuracies",
];

const steps = [
  {
    step: "01",
    title: "Error Identified",
    desc: "A factual error is found — either by our editorial team or flagged by a reader.",
  },
  {
    step: "02",
    title: "Editorial Review",
    desc: "Our editors review the original reporting, check available evidence, and verify the error.",
  },
  {
    step: "03",
    title: "Correction Made",
    desc: "The article is updated as soon as possible. Significant corrections are clearly noted in the piece.",
  },
  {
    step: "04",
    title: "Transparency",
    desc: "Readers are informed of meaningful changes. We do not quietly alter significant factual mistakes.",
  },
];

export default function CorrectionsPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Corrections Policy",
    url: `${SITE_URL}/corrections-policy`,
    description:
      "Times Chronicle's Corrections Policy explains how factual errors are reviewed, corrected, and disclosed to readers.",
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
              Accountability in Journalism
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight mb-4">
              Corrections
              <br />
              <span className="italic font-normal">Policy</span>
            </h1>

            <div className="w-16 h-1 bg-amber-700 mx-auto mb-8" />

            <p className="text-stone-500 text-[16px] leading-relaxed max-w-lg mx-auto">
              Accuracy is not optional. We aim to make sure every article is
              factually correct and up to date. When we make a mistake, we
              correct it quickly and transparently.
            </p>
          </div>
        </div>

        {/* Process */}
        <div className="bg-stone-900">
          <div className="max-w-5xl mx-auto px-6 py-14">
            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-500 font-sans mb-10 text-center">
              Our Corrections Process
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {steps.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="text-4xl font-bold text-stone-700 font-serif mb-3">
                    {item.step}
                  </div>

                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-amber-400 font-sans mb-3">
                    {item.title}
                  </h3>

                  <p className="text-stone-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-6 py-14 grid md:grid-cols-[1fr_2px_1fr] gap-10">
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700 font-sans mb-5">
              What Corrections Cover
            </h2>

            <p className="text-stone-600 text-[14px] leading-relaxed mb-5">
              Confirmed factual errors are updated as soon as possible.
              Corrections may include any of the following:
            </p>

            <ul className="space-y-3">
              {correctionTypes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-stone-700 text-[14px]"
                >
                  <span className="text-amber-600 font-bold mt-0.5 font-sans">
                    →
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block bg-stone-200" />

          <div className="space-y-8">
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700 font-sans mb-4">
                Developing Stories
              </h2>

              <p className="text-stone-700 text-[14px] leading-relaxed">
                News and political stories can change rapidly. When significant
                new information emerges after publication, we update articles to
                reflect the latest confirmed developments while clearly
                indicating those updates to readers.
              </p>
            </div>

            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700 font-sans mb-4">
                Reader Feedback
              </h2>

              <p className="text-stone-700 text-[14px] leading-relaxed mb-4">
                Readers help strengthen our journalism. If you believe an
                article contains a factual error, we encourage you to contact
                our editorial team. Every correction request is reviewed
                carefully.
              </p>

              <a
                href="/contact"
                className="inline-block px-5 py-2 bg-stone-900 text-stone-100 text-[11px] font-bold uppercase tracking-widest font-sans hover:bg-amber-700 transition-colors"
              >
                Report an Error →
              </a>
            </div>

            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700 font-sans mb-4">
                Transparency
              </h2>

              <p className="text-stone-700 text-[14px] leading-relaxed">
                We do not quietly alter major factual mistakes. When meaningful
                corrections are made, we ensure readers understand what changed
                and why.
              </p>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="border-t-4 border-stone-900 bg-stone-900 text-stone-100">
          <div className="max-w-3xl mx-auto px-6 py-12 text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-500 font-sans mb-5">
              Keeping Trust
            </p>

            <p className="text-xl md:text-2xl font-serif italic text-stone-300 leading-relaxed">
              "Trust isn't built through perfection. It's built through
              accountability. Our job is to report the truth — and correct it
              when we fall short."
            </p>
          </div>
        </div>
      </div>
    </>
  );
}