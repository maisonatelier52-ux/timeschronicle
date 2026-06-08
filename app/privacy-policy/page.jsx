const SITE_URL = "https://www.timeschronicle.org";

export const metadata = {
  title: "Privacy Policy — Times Chronicle",
  description:
    "Read the Times Chronicle Privacy Policy to understand what information we collect, how we use it, cookies, your rights, and our commitment to protecting your privacy.",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy — Times Chronicle",
    description:
      "Learn how Times Chronicle collects, uses, and protects your personal information.",
    url: `${SITE_URL}/privacy-policy`,
    type: "website",
    siteName: "Times Chronicle",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy — Times Chronicle",
    description:
      "Understand how your information is collected, used, and protected by Times Chronicle.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  description:
    "Privacy Policy explaining how Times Chronicle collects, uses, stores, and protects user information.",
  url: `${SITE_URL}/privacy-policy`,
  publisher: {
    "@type": "Organization",
    name: "Times Chronicle",
    url: SITE_URL,
  },
};

const sections = [
  {
    title: "Data We Collect",
    icon: "🗂️",
    paragraphs: [
      "When you visit the Times Chronicle, certain information may be automatically collected about your device and browsing activity, including your IP address, browser type, pages visited, and the time and date of your visit.",
      "If you sign up for newsletters, submit a contact form, or interact with our website in other ways, we may collect personal information such as your name and email address.",
      "We only collect information that is necessary to operate our website and serve our readers effectively.",
    ],
  },
  {
    title: "How We Use It",
    icon: "⚙️",
    paragraphs: [
      "We use the information we collect to deliver and improve our content, communicate with readers, understand how our website is used, and fulfil any requests or enquiries you submit.",
      "We may also use your information to send newsletters or editorial updates if you have opted in to receive them. You can unsubscribe at any time.",
      "We do not sell personal data to third parties.",
    ],
  },
  {
    title: "Your Rights",
    icon: "🔏",
    paragraphs: [
      "Depending on your location, you may have rights regarding your personal data — including the right to access, correct, or request deletion of information we hold about you.",
      "To exercise any of these rights, please contact us through our Contact page. We will respond to requests within a reasonable timeframe.",
      "We are committed to handling your data with care and in accordance with applicable privacy laws.",
    ],
  },
  {
    title: "Cookies & Tracking",
    icon: "🍪",
    paragraphs: [
      "The Times Chronicle may use cookies and similar tracking technologies to enhance your experience, understand usage patterns, and deliver relevant advertising.",
      "You can manage your cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of some parts of our website.",
      "We may use analytics tools such as Google Analytics to help us understand how readers interact with our content.",
    ],
  },
  {
    title: "Third Parties",
    icon: "🔗",
    paragraphs: [
      "Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of those websites and encourage you to review their privacy policies separately.",
      "We may share aggregated, non-personally identifiable information with advertisers and analytics partners to improve our services. This data cannot be used to identify you individually.",
      "Advertisers and sponsors may use their own tracking technologies in accordance with their own privacy policies.",
    ],
  },
  {
    title: "Contact",
    icon: "✉️",
    paragraphs: [
      "If you have questions about this Privacy Policy or how your personal information is handled, please contact our editorial and operations team through our Contact page.",
      "We may update this Privacy Policy from time to time. Any changes will be published on this page, and your continued use of the website constitutes acceptance of the updated policy.",
      "This policy was last reviewed in 2025.",
    ],
  },
];

export default function PrivacyPolicy() {
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
              Your Data
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight mb-2">
              Privacy
              <br />
              <span className="italic font-normal">Policy</span>
            </h1>

            <div className="w-16 h-px bg-amber-700 mx-auto mt-6 mb-6" />

            <p className="text-stone-500 max-w-lg mx-auto text-[15px] leading-relaxed">
              Your privacy matters to us. This policy explains what information
              we collect, how we use it, and the choices you have.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="max-w-4xl mx-auto px-6 py-14 space-y-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-white border border-stone-200 p-8 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">{section.icon}</span>
                <h2 className="text-2xl font-bold text-stone-900">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-4">
                {section.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-stone-700 leading-relaxed text-[15px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-stone-300 bg-stone-50">
          <div className="max-w-3xl mx-auto px-6 py-12 text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-700 font-sans mb-3">
              Questions About Your Privacy?
            </p>

            <p className="text-stone-600 italic mb-6">
              Contact our editorial team if you have any questions about this
              policy or your personal information.
            </p>

            <a
              href="/contact"
              className="inline-block px-6 py-2 border border-amber-700 text-amber-700 text-[11px] uppercase tracking-widest font-sans hover:bg-amber-700 hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}