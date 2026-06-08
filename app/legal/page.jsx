const SITE_URL = "https://www.timeschronicle.org";

export const metadata = {
  title: "Legal Information — Times Chronicle",
  description:
    "Read the Legal Information page for Times Chronicle, including copyright, editorial content, external links, affiliate disclosure, liability limitations, and policy updates.",
  alternates: {
    canonical: `${SITE_URL}/legal`,
  },
  openGraph: {
    title: "Legal Information — Times Chronicle",
    description:
      "Learn about the legal guidelines governing the use of the Times Chronicle website and its published content.",
    url: `${SITE_URL}/legal`,
    type: "website",
    siteName: "Times Chronicle",
  },
  twitter: {
    card: "summary",
    title: "Legal Information — Times Chronicle",
    description:
      "Review the legal information, copyright policies, disclaimers, and website guidelines for Times Chronicle.",
  },
};

function Article({ title, children }) {
  return (
    <article className="py-8 border-b border-stone-200 last:border-0">
      <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700 font-sans mb-3">
        {title}
      </h2>

      <div className="text-stone-700 leading-relaxed text-[15px] font-serif space-y-3">
        {children}
      </div>
    </article>
  );
}

export default function Legal() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Legal Information",
    url: `${SITE_URL}/legal`,
    description:
      "Legal information outlining copyright, editorial content, affiliate disclosures, liability limitations, and website policies for Times Chronicle.",
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
            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-700 font-sans mb-4">
              Legal
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight mb-2">
              Legal
              <br />
              <span className="italic font-normal">
                Information
              </span>
            </h1>

            <div className="w-16 h-px bg-amber-700 mx-auto mt-6 mb-8" />

            <p className="text-stone-500 max-w-lg mx-auto text-[15px] leading-relaxed">
              By accessing and using the Times Chronicle, you agree to use
              the website in a lawful and respectful manner.
            </p>
          </div>
        </div>

        {/* Content */}

        <div className="max-w-2xl mx-auto px-6 py-12">

          <Article title="Content Ownership">
            <p>
              Unless otherwise stated, all articles, images, graphics,
              logos, and other content published on the Times Chronicle
              are protected by copyright and intellectual property laws.
              Content may not be copied, republished, distributed, or
              reproduced without prior written permission, except where
              permitted by applicable law.
            </p>
          </Article>

          <Article title="Editorial Content">
            <p>
              The information published on the Times Chronicle is
              provided for general informational and entertainment
              purposes. While we strive for accuracy, we cannot
              guarantee that all information will always be complete,
              current, or free from error.
            </p>

            <p>
              Readers should use their own judgment when relying on
              information published on the website.
            </p>
          </Article>

          <Article title="External Links">
            <p>
              Some articles may include links to third-party websites for
              additional information or reference. The Times Chronicle
              does not control or endorse the content, policies, or
              practices of external websites and is not responsible for
              their content or availability.
            </p>
          </Article>

          <Article title="Opinions and Views">
            <p>
              Opinions expressed in articles, interviews, or guest
              contributions belong to the respective authors and do not
              necessarily reflect the views of the Times Chronicle as a
              whole.
            </p>
          </Article>

          <Article title="Affiliate Disclosure">
            <p>
              Some content may contain affiliate links. If readers make
              purchases through these links, the Times Chronicle may earn
              a commission at no additional cost to the reader. These
              relationships do not influence our editorial decisions or
              coverage.
            </p>
          </Article>

          <Article title="Limitation of Liability">
            <p>
              The Times Chronicle, its writers, editors, contributors,
              and affiliates shall not be held liable for any loss,
              damage, or inconvenience resulting from the use of
              information published on this website. Use of the website
              and its content is at the reader's own discretion.
            </p>
          </Article>

          <Article title="Changes to Policies">
            <p>
              We may update our policies, guidelines, and legal
              information from time to time. Any updates will be
              reflected on this page. Continued use of the website after
              changes are published constitutes acceptance of those
              changes.
            </p>
          </Article>

        </div>

        {/* Footer */}

        <div className="border-t border-stone-200 bg-stone-900 text-stone-100">
          <div className="max-w-2xl mx-auto px-6 py-12 text-center">

            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-500 font-sans mb-4">
              Our Commitment
            </p>

            <p className="italic text-stone-300 leading-relaxed mb-6">
              "The Times Chronicle is committed to maintaining a
              transparent, responsible, and respectful digital
              environment for readers, contributors, and partners."
            </p>

            <a
              href="/contact"
              className="inline-block px-6 py-2 border border-amber-600 text-amber-500 text-[11px] uppercase tracking-widest font-sans hover:bg-amber-600 hover:text-stone-900 transition-colors"
            >
              Contact Us
            </a>

          </div>
        </div>

      </div>
    </>
  );
}