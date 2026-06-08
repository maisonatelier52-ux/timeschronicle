const SITE_URL = "https://www.timeschronicle.org";

export const metadata = {
  title: "Advertising Policy — Times Chronicle",
  description:
    "Learn about Times Chronicle's Advertising Policy, including editorial independence, sponsored content, affiliate partnerships, advertising standards, and our commitment to transparency.",
  alternates: {
    canonical: `${SITE_URL}/advertising-policy`,
  },
  openGraph: {
    title: "Advertising Policy — Times Chronicle",
    description:
      "Understand how advertising and editorial content remain separate at Times Chronicle.",
    url: `${SITE_URL}/advertising-policy`,
    type: "website",
    siteName: "Times Chronicle",
  },
  twitter: {
    card: "summary",
    title: "Advertising Policy — Times Chronicle",
    description:
      "Read Times Chronicle's Advertising Policy and our commitment to transparency and editorial independence.",
  },
};

const rules = [
  {
    title: "Editorial Independence",
    text: "The stories, features, and news articles published by the Times Chronicle are chosen and created by our editorial team. Advertisers do not decide what we cover, how we cover it, or the opinions expressed in our editorial content.",
  },
  {
    title: "Sponsored Content",
    text: "From time to time, we may work with brands on sponsored articles, campaigns, or special projects. Whenever content is sponsored, it will be clearly labeled so readers can easily recognize it.",
  },
  {
    title: "Advertising Standards",
    text: "We aim to work with advertisers whose products, services, and values are relevant to our audience. We reserve the right to reject, remove, or refuse advertising that we believe is misleading, deceptive, offensive, or inconsistent with our editorial standards.",
  },
  {
    title: "Affiliate Partnerships",
    text: "Some content may include affiliate links. If readers make a purchase through these links, the Times Chronicle may receive a commission. These partnerships help support our publication and do not influence our editorial decisions or recommendations.",
  },
  {
    title: "Accuracy and Trust",
    text: "Advertising relationships do not guarantee positive coverage, reviews, or mentions. Our responsibility is to our readers first, and we strive to maintain the trust they place in our content.",
  },
  {
    title: "Changes to This Policy",
    text: "As our business and advertising practices evolve, this policy may be updated from time to time. Any changes will be reflected on this page.",
  },
];

export default function AdvertisingPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Advertising Policy",
    headline: "Advertising Policy",
    description:
      "Times Chronicle's Advertising Policy explains our editorial independence, sponsored content standards, affiliate relationships, and commitment to transparency.",
    url: `${SITE_URL}/advertising-policy`,
    publisher: {
      "@type": "Organization",
      name: "Times Chronicle",
      url: SITE_URL,
    },
  };

  return (
    <div className="min-h-screen bg-[#faf8f4] font-serif">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* Hero */}
      <div className="border-b-4 border-stone-900">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-amber-700 font-sans mb-4">
            Commercial Standards
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight mb-2">
            Advertising
            <br />
            <span className="italic font-normal">Policy</span>
          </h1>

          <div className="w-16 h-px bg-amber-700 mx-auto mt-6 mb-8" />

          <p className="text-stone-500 max-w-lg mx-auto leading-relaxed text-[15px]">
            Advertising helps support the Times Chronicle. We believe readers
            should always know the difference between advertising and editorial
            content.
          </p>
        </div>
      </div>

      {/* Policy rules */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        {rules.map((rule, i) => (
          <div
            key={i}
            className="flex gap-5 py-8 border-b border-stone-200 last:border-0"
          >
            <span className="text-3xl font-bold text-stone-500 font-serif leading-none mt-1 select-none w-8 shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700 font-sans mb-2">
                {rule.title}
              </h2>

              <p className="text-stone-700 leading-relaxed text-[15px] font-serif">
                {rule.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Promise */}
      <div className="bg-black/10">
        <div className="max-w-2xl mx-auto px-6 py-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-amber-500 font-sans mb-4">
            Our Promise
          </p>

          <p className="text-lg font-serif leading-relaxed italic">
            "We want the Times Chronicle to be a place where readers can
            discover new ideas, brands, and stories while feeling confident
            about the content they consume. Transparency, honesty, and reader
            trust will always guide the way we approach advertising."
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-stone-200 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6 py-8 text-center">
          <p className="text-xs text-stone-700 font-sans tracking-wide">
            Advertising enquiries?{" "}
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
  );
}