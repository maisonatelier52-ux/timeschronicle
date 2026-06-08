const SITE_URL = "https://www.timeschronicle.org";

export const metadata = {
  title: "Ownership & Funding — Times Chronicle",
  description:
    "Learn about Times Chronicle's ownership, editorial independence, funding model, sponsored content policy, affiliate relationships, and commitment to transparency.",
  alternates: {
    canonical: `${SITE_URL}/ownership-and-funding`,
  },
  openGraph: {
    title: "Ownership & Funding — Times Chronicle",
    description:
      "Discover how Times Chronicle operates, how it is funded, and how editorial independence is maintained.",
    url: `${SITE_URL}/ownership-and-funding`,
    type: "website",
    siteName: "Times Chronicle",
  },
  twitter: {
    card: "summary",
    title: "Ownership & Funding — Times Chronicle",
    description:
      "Transparency about Times Chronicle's ownership, funding, and editorial independence.",
  },
};

const sectionsLeft = [
  {
    title: "Who We Are",
    body: (
      <p>
        The Times Chronicle is an independent digital publication covering
        news, culture, lifestyle, and the stories shaping today's world. Our
        goal is straightforward: create engaging, trustworthy content that
        keeps readers informed and connected.
      </p>
    ),
  },
  {
    title: "Editorial Independence",
    body: (
      <>
        <p>
          Our editorial team makes all decisions about what we cover and how we
          cover it. Brands, advertisers, sponsors, and outside partners do not
          influence our news reporting, editorial opinions, or story selection.
        </p>

        <p className="mt-3">
          We believe readers deserve content guided by editorial judgment —
          not commercial interests.
        </p>
      </>
    ),
  },
  {
    title: "How We Are Funded",
    body: (
      <p>
        The Times Chronicle may generate revenue through advertising,
        sponsored content, affiliate partnerships, and other business
        activities that support the operation of this website. These revenue
        sources help us continue producing journalism for our readers.
      </p>
    ),
  },
];

const sectionsRight = [
  {
    title: "Sponsored Content",
    body: (
      <p>
        From time to time, we may publish sponsored content or partner with
        brands on special projects. When this happens, the content will be
        clearly labeled so readers can easily distinguish it from our
        independent editorial coverage.
      </p>
    ),
  },
  {
    title: "Affiliate Relationships",
    body: (
      <p>
        Some articles may contain affiliate links. If a reader purchases a
        product or service through one of these links, the Times Chronicle may
        earn a commission at no additional cost to the reader. Affiliate
        partnerships do not affect our editorial standards or influence our
        coverage.
      </p>
    ),
  },
  {
    title: "Our Commitment",
    body: (
      <>
        <p>
          No matter how the Times Chronicle is funded, our responsibility
          remains the same: to provide readers with content that is accurate,
          engaging, and created with integrity.
        </p>

        <blockquote className="mt-4 pl-4 border-l-2 border-amber-700 italic text-stone-500 text-sm">
          "The trust of our audience will always come first."
        </blockquote>
      </>
    ),
  },
];

export default function OwnershipFunding() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Ownership & Funding",
            headline: "Ownership & Funding",
            description:
              "Information about Times Chronicle's ownership, funding, editorial independence, sponsored content, and affiliate relationships.",
            url: `${SITE_URL}/ownership-and-funding`,
            publisher: {
              "@type": "Organization",
              name: "Times Chronicle",
              url: SITE_URL,
            },
          }),
        }}
      />

      <div className="min-h-screen bg-[#faf8f4] font-serif">
        {/* Hero */}
        <div className="border-b-4 border-stone-900 bg-[#faf8f4]">
          <div className="max-w-3xl mx-auto px-6 py-16 text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-700 font-sans mb-4">
              Transparency
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight mb-4">
              Ownership &
              <br />
              <span className="italic font-normal">Funding</span>
            </h1>

            <div className="w-16 h-px bg-amber-700 mx-auto mt-6" />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-6 py-14 grid md:grid-cols-[1fr_2px_1fr] gap-10">
          {/* Left */}
          <div className="space-y-10">
            {sectionsLeft.map((section) => (
              <section
                key={section.title}
                className="pb-8 border-b border-stone-200 last:border-0"
              >
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 mb-3">
                  {section.title}
                </h2>

                <div className="text-stone-700 leading-relaxed text-[15px]">
                  {section.body}
                </div>
              </section>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:block bg-stone-200" />

          {/* Right */}
          <div className="space-y-10">
            {sectionsRight.map((section) => (
              <section
                key={section.title}
                className="pb-8 border-b border-stone-200 last:border-0"
              >
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 mb-3">
                  {section.title}
                </h2>

                <div className="text-stone-700 leading-relaxed text-[15px]">
                  {section.body}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-stone-200 bg-stone-50">
          <div className="max-w-3xl mx-auto px-6 py-8 text-center">
            <p className="text-xs text-stone-400 font-sans tracking-wide">
              Questions about our ownership or funding?{" "}
              <a
                href="/contact"
                className="text-amber-700 underline underline-offset-2"
              >
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}