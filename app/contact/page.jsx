const SITE_URL = "https://www.timeschronicle.org";

export const metadata = {
  title: "Contact Us — Times Chronicle",
  description:
    "Get in touch with Times Chronicle for news tips, editorial enquiries, corrections, advertising partnerships, legal matters, or general questions.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Us — Times Chronicle",
    description:
      "Contact the Times Chronicle newsroom, editorial desk, advertising team, or legal department.",
    url: `${SITE_URL}/contact`,
    type: "website",
    siteName: "Times Chronicle",
  },
  twitter: {
    card: "summary",
    title: "Contact Us — Times Chronicle",
    description:
      "Reach the Times Chronicle newsroom with news tips, corrections, partnerships, or legal enquiries.",
  },
};

const contacts = [
  {
    label: "News Tips & Story Ideas",
    icon: "📰",
    desc: "Have a tip or think we're missing an important story? Our editorial team reviews all submissions.",
    address: "tips@timeschronicle.org",
  },
  {
    label: "Editorial & Corrections",
    icon: "✏️",
    desc: "Spotted an error or want to submit a Right of Reply? Reach our editorial desk directly.",
    address: "editorial@timeschronicle.org",
  },
  {
    label: "Advertising & Partnerships",
    icon: "📊",
    desc: "For advertising enquiries, sponsored content, or partnership opportunities.",
    address: "advertising@timeschronicle.org",
  },
  {
    label: "Legal & Privacy",
    icon: "🔏",
    desc: "For legal notices, DMCA claims, or privacy-related requests.",
    address: "legal@timeschronicle.org",
  },
];

const reporters = [
  {
    name: "Charles-Williams",
    beat: "National Affairs",
    slug: "charles-williams",
  },
  {
    name: "Chris Louis",
    beat: "Politics",
    slug: "chris-louis",
  },
  {
    name: "David Jonathan",
    beat: "Economy & Business",
    slug: "david-jonathan",
  },
  {
    name: "Dr. Marina Cordelia",
    beat: "Technology",
    slug: "dr-marina-cordelia",
  },
  {
    name: "Mark Nathaniel",
    beat: "Health & Science",
    slug: "mark-nathaniel",
  },
  {
    name: "Naida Storm",
    beat: "World News",
    slug: "naida-storm",
  },
];

export default function ContactUs() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us",
    url: `${SITE_URL}/contact`,
    description:
      "Contact the Times Chronicle newsroom for editorial enquiries, corrections, advertising, legal matters, and news tips.",
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
              Contact Us
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight mb-4">
              We're
              <br />
              <span className="italic font-normal">listening.</span>
            </h1>

            <div className="w-16 h-1 bg-amber-700 mx-auto mb-8" />

            <p className="text-stone-500 text-[16px] leading-relaxed max-w-lg mx-auto">
              Whether you have a news tip, a correction request, or a general
              enquiry — our team reads every message.
            </p>
          </div>
        </div>

        {/* Contact Departments */}
        <div className="max-w-5xl mx-auto px-6 py-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-amber-700 font-sans mb-8 text-center">
            Contact by Department
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mb-16">
            {contacts.map((contact) => (
              <div
                key={contact.label}
                className="bg-white border border-stone-200 p-6 hover:border-amber-300 hover:shadow-sm transition-all"
              >
                <div className="text-2xl mb-3">{contact.icon}</div>

                <h2 className="text-[11px] font-bold uppercase tracking-[0.15em] text-stone-900 font-sans mb-2">
                  {contact.label}
                </h2>

                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                  {contact.desc}
                </p>

                <a
                  href={`mailto:${contact.address}`}
                  className="text-amber-700 text-sm font-sans font-medium hover:text-amber-900 underline underline-offset-2 transition-colors"
                >
                  {contact.address}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Reporters */}
        <div className="border-t border-stone-200 bg-stone-50">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-stone-400 font-sans mb-6 text-center">
              Reach a Reporter
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {reporters.map((reporter) => (
                <a
                  key={reporter.slug}
                  href={`/author/${reporter.slug}`}
                  className="flex items-center justify-between bg-white border border-stone-200 px-4 py-3 hover:border-amber-400 transition-all group"
                >
                  <div>
                    <p className="text-stone-800 text-sm font-bold font-serif leading-tight group-hover:text-amber-800 transition-colors">
                      {reporter.name}
                    </p>

                    <p className="text-[11px] text-stone-400 font-sans uppercase tracking-wide">
                      {reporter.beat}
                    </p>
                  </div>

                  <span className="text-stone-300 group-hover:text-amber-600 transition-colors text-sm">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}