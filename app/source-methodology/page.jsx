const SITE_URL = "https://www.timeschronicle.org";

export const metadata = {
  title: "Source Methodology — Times Chronicle",
  description:
    "Learn how Times Chronicle researches, verifies, and evaluates sources through rigorous reporting, fact-checking, editorial review, and transparent sourcing standards.",

  keywords: [
    "Source Methodology",
    "Journalism Standards",
    "Fact Checking",
    "Editorial Standards",
    "Reporting Process",
    "Source Verification",
    "Anonymous Sources",
    "News Sources",
    "Times Chronicle",
  ],

  alternates: {
    canonical: `${SITE_URL}/source-methodology`,
  },

  openGraph: {
    title: "Source Methodology — Times Chronicle",
    description:
      "Discover the sourcing standards, fact-checking practices, and editorial principles that guide every Times Chronicle story.",
    url: `${SITE_URL}/source-methodology`,
    siteName: "Times Chronicle",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Source Methodology — Times Chronicle",
    description:
      "Learn how Times Chronicle verifies information, evaluates sources, and maintains high editorial standards.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const sourceCategories = [
  {
    icon: "🏛️",
    label: "Official Sources",
    items: [
      "Government press releases and official announcements",
      "Congressional records and federal filings",
      "Court documents and regulatory disclosures",
      "Company statements and corporate filings",
    ],
  },
  {
    icon: "🎙️",
    label: "Interviews & Firsthand Reporting",
    items: [
      "On-record interviews with officials and experts",
      "Named source attribution wherever possible",
      "Firsthand coverage of events and hearings",
      "Industry interviews and expert commentary",
    ],
  },
  {
    icon: "📰",
    label: "Publications & Research",
    items: [
      "Respected national and international news organizations",
      "Peer-reviewed research and academic publications",
      "Trade publications and industry reports",
      "Market data from established research firms",
    ],
  },
  {
    icon: "📱",
    label: "Digital & Social",
    items: [
      "Verified official accounts only",
      "Confirmed social media statements from public figures",
      "Rumors and unverified posts are not used as sources",
      "Screenshots are verified for authenticity before use",
    ],
  },
];

const threeQuestions = [
  { q: "Is it credible?", desc: "Does the source have a track record of accuracy? Is it verifiable and established?" },
  { q: "Is it reliable?", desc: "Can the information be confirmed independently? Does it hold up to scrutiny?" },
  { q: "Is it relevant?", desc: "Does it directly support the story being reported? Is it current and applicable?" },
];

export default function SourceMethodology() {
  return (
    <div className="min-h-screen bg-[#faf8f4] font-serif">
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Source Methodology",
            headline: "Source Methodology",
            description:
                "Learn how Times Chronicle researches, verifies, and evaluates sources through comprehensive reporting, fact-checking, and editorial review.",
            url: `${SITE_URL}/source-methodology`,
            publisher: {
                "@type": "Organization",
                name: "Times Chronicle",
                url: SITE_URL,
            },
            mainEntity: {
                "@type": "CreativeWork",
                name: "Source Methodology",
                about:
                "Editorial sourcing standards, fact-checking procedures, anonymous source policy, and reporting methodology.",
            },
            }),
        }}
        />

      {/* Hero */}
      <div className="border-b-4 border-stone-900">
        <div className="max-w-3xl mx-auto px-6 py-10 text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-700 font-sans mb-5">
              How We Report
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight mb-4">
              Source<br />
              <span className="italic font-normal">Methodology</span>
            </h1>
            <div className="w-16 h-1 bg-amber-700 mx-auto mb-8" />
            <p className="text-stone-500 text-[16px] leading-relaxed max-w-xl mx-auto">
              Good journalism depends on good sources. Every Times Chronicle story begins with
              comprehensive reporting, fact-checking, and source vetting.
            </p>
        </div>
      </div>

      {/* The three questions — featured treatment */}
      <div className="bg-black/90 text-white">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-amber-500 font-sans mb-8 text-center">
            Every Source Is Evaluated on Three Questions
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {threeQuestions.map((item, i) => (
                <div className="text-center">
                  <div className="text-4xl font-bold text-white font-serif mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 className="text-lg font-bold font-serif mb-3 text-white">{item.q}</h2>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* Source categories */}
      <div className="max-w-5xl mx-auto px-6 py-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-amber-700 font-sans mb-10 text-center">
            Sources We Use
          </p>
        <div className="grid sm:grid-cols-2 gap-7">
          {sourceCategories.map((cat, i) => (
              <div className="bg-white border border-stone-200 p-7 hover:border-amber-300 hover:shadow-sm transition-all h-full">
                <div className="text-2xl mb-3">{cat.icon}</div>
                <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-900 font-sans mb-4">
                  {cat.label}
                </h2>
                <ul className="space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-stone-600 text-[14px]">
                      <span className="text-amber-600 shrink-0 mt-0.5 font-sans font-bold">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
          ))}
        </div>
      </div>

      {/* Standards section — fact-checking, anon sources, social */}
      <div className="bg-stone-50 border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Fact-Checking",
              body: "Editors and reporters verify names, dates, quotes, events, and attributed information prior to publication. Unsubstantiated claims are not presented as confirmed facts.",
            },
            {
              title: "Anonymous Sources",
              body: "We always favor named sources. Anonymous sources may be considered when information serves the public interest and comes from individuals with direct, verifiable knowledge. Such information undergoes additional editorial review before use.",
            },
            {
              title: "Developing News",
              body: "Some stories continue evolving after publication. We review credible new information and update coverage where necessary, clearly noting any significant changes made to a published article.",
            },
          ].map((item, i) => (
            <div key={i}>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700 font-sans mb-4">
                {item.title}
              </h2>
              <p className="text-stone-700 text-[14px] leading-relaxed">{item.body}</p>
              </div>
          ))}
        </div>
      </div>

      {/* Why it matters */}
      <div className="border-t-4 border-stone-900 bg-stone-900 text-stone-100">
        <div className="max-w-3xl mx-auto px-6 py-14 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-amber-500 font-sans mb-5">
            Why Sourcing Matters
          </p>
          <p className="text-xl md:text-2xl font-serif italic text-stone-300 leading-relaxed mb-8">
            "Readers deserve information they can trust. That's why sourcing remains at the center
            of every story we publish. Good journalism starts with asking better questions — and
            verifying every answer."
          </p>
          <div className="flex justify-center gap-4 font-sans text-[11px] uppercase tracking-widest">
            <a
              href="/editorial-policy"
              className="px-5 py-2 border border-stone-600 text-stone-400 hover:border-amber-600 hover:text-amber-500 transition-colors"
            >
              Editorial Policy
            </a>
            <a
              href="/corrections-policy"
              className="px-5 py-2 border border-stone-600 text-stone-400 hover:border-amber-600 hover:text-amber-500 transition-colors"
            >
              Corrections Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}