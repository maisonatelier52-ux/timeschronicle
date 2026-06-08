import Link from "next/link";

const SITE_URL = "https://www.timeschronicle.org";

export const metadata = {
  title: "Terms & Conditions — Times Chronicle",
  description:
    "Read the Terms & Conditions governing the use of the Times Chronicle website, including intellectual property, user submissions, liability, advertising, and website policies.",

  alternates: {
    canonical: `${SITE_URL}/terms-and-conditions`,
  },

  openGraph: {
    title: "Terms & Conditions — Times Chronicle",
    description:
      "Review the legal terms, user responsibilities, intellectual property rights, and website policies governing the use of Times Chronicle.",
    url: `${SITE_URL}/terms-and-conditions`,
    siteName: "Times Chronicle",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions — Times Chronicle",
    description:
      "Understand the rules, rights, and responsibilities for using the Times Chronicle website.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const anchors = [
  { id: "using", label: "Using Our Website" },
  { id: "ip", label: "Intellectual Property" },
  { id: "submissions", label: "User Submissions" },
  { id: "accuracy", label: "Accuracy of Information" },
  { id: "links", label: "Third-Party Links" },
  { id: "advertising", label: "Advertising" },
  { id: "liability", label: "Liability" },
  { id: "changes", label: "Changes" },
  { id: "termination", label: "Termination" },
];

function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="py-9 border-b border-stone-200 last:border-0 scroll-mt-24"
    >
      <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700 font-sans mb-4">
        {title}
      </h2>

      <div className="text-stone-700 leading-relaxed text-[15px] font-serif space-y-3">
        {children}
      </div>
    </section>
  );
}

export default function TermsAndConditions() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms & Conditions",
    headline: "Terms & Conditions",
    description:
      "Terms and Conditions governing the use of the Times Chronicle website.",
    url: `${SITE_URL}/terms-and-conditions`,
    publisher: {
      "@type": "Organization",
      name: "Times Chronicle",
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "CreativeWork",
      name: "Terms & Conditions",
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
            Site Governance
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight mb-2">
            Terms &
            <br />
            <span className="italic font-normal">Conditions</span>
          </h1>

          <div className="w-16 h-px bg-amber-700 mx-auto mt-6 mb-6" />

          <p className="text-stone-500 max-w-lg mx-auto text-[15px] leading-relaxed">
            By accessing and using the Times Chronicle, you agree to follow
            these Terms and Conditions. These terms apply to all visitors,
            readers, contributors, and anyone who uses the website.
          </p>
        </div>
      </div>

      {/* Content */}

      <div className="max-w-6xl mx-auto px-6 py-14 grid lg:grid-cols-[220px_1fr] gap-14">
        {/* Sidebar */}

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-sans mb-5">
              Contents
            </p>

            <nav className="space-y-1">
              {anchors.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block py-2 pl-3 border-l-2 border-stone-200 text-stone-500 hover:border-amber-700 hover:text-amber-700 transition-colors text-xs font-sans"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main */}

        <main>
          <Section id="using" title="Using Our Website">
            <p>
              The Times Chronicle is provided for personal, non-commercial use
              unless otherwise stated.
            </p>

            <p>You agree not to:</p>

            <ul className="space-y-2 pt-2">
              {[
                "Use the website for unlawful purposes.",
                "Attempt to disrupt or interfere with website operations.",
                "Copy, reproduce, or distribute content without permission.",
                "Misrepresent your identity or affiliation.",
                "Upload or share harmful, misleading, or offensive material.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-amber-600">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="ip" title="Intellectual Property">
            <p>
              All content published on the Times Chronicle, including articles,
              logos, graphics, images, videos, and website design elements, is
              protected by copyright and intellectual property laws.
            </p>

            <p>
              Unless permission is granted, content may not be copied,
              republished, modified, distributed, or used for commercial
              purposes.
            </p>
          </Section>

          <Section id="submissions" title="User Submissions">
            <p>
              If you submit comments, feedback, suggestions, or other content,
              you grant us the right to review, edit, publish, or remove that
              content when necessary.
            </p>

            <p>
              Users remain responsible for the material they submit and must
              ensure it does not violate any applicable laws or third-party
              rights.
            </p>
          </Section>

          <Section id="accuracy" title="Accuracy of Information">
            <p>
              We strive to provide accurate and up-to-date information.
              However, Times Chronicle does not guarantee that all content will
              always be complete, current, or error-free.
            </p>

            <p>
              Information published on this website should be used at the
              reader's own discretion.
            </p>
          </Section>

          <Section id="links" title="Third-Party Links">
            <p>
              Our website may contain links to external websites for additional
              information, products, services, or references.
            </p>

            <p>
              We are not responsible for the content, policies, or practices of
              third-party websites and encourage readers to review their own
              policies separately.
            </p>
          </Section>

          <Section id="advertising" title="Advertising & Sponsored Content">
            <p>
              Times Chronicle may display advertisements, sponsored content,
              affiliate links, and promotional materials.
            </p>

            <p>
              Sponsored content and paid partnerships are identified where
              appropriate. These relationships do not influence our editorial
              decisions or reporting.
            </p>
          </Section>

          <Section id="liability" title="Limitation of Liability">
            <p>
              To the fullest extent permitted by law, Times Chronicle, its
              owners, editors, writers, contributors, and affiliates shall not
              be liable for any direct, indirect, incidental, or consequential
              damages arising from the use of this website or reliance on its
              content.
            </p>
          </Section>

          <Section id="changes" title="Changes to These Terms">
            <p>
              We may update these Terms and Conditions from time to time as the
              website evolves.
            </p>

            <p>
              Continued use of the website after changes are published
              constitutes acceptance of the revised Terms and Conditions.
            </p>
          </Section>

          <Section id="termination" title="Termination of Access">
            <p>
              We reserve the right to restrict, suspend, or terminate access to
              the website for users who violate these Terms and Conditions or
              engage in conduct that may harm the website, its readers, or its
              operations.
            </p>
          </Section>
        </main>
      </div>

      {/* Footer CTA */}

      <section className="bg-stone-900 text-center py-12 px-6">
        <p className="text-[11px] uppercase tracking-[0.3em] text-amber-500 font-sans mb-3">
          Questions?
        </p>

        <p className="text-stone-400 italic text-sm mb-6">
          If you have questions regarding these Terms & Conditions, please
          contact our editorial team.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center border border-amber-600 px-6 py-3 text-[11px] uppercase tracking-[0.2em] font-sans text-amber-500 hover:bg-amber-600 hover:text-stone-900 transition-colors"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}