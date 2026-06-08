const SITE_URL = "https://www.timeschronicle.org";

export const metadata = {
  title: "Right of Reply Policy — Times Chronicle",
  description:
    "Learn about the Times Chronicle Right of Reply Policy, including our commitment to fairness, editorial review, and providing individuals and organizations the opportunity to respond.",
  alternates: {
    canonical: `${SITE_URL}/right-of-reply`,
  },
  openGraph: {
    title: "Right of Reply Policy — Times Chronicle",
    description:
      "Read how Times Chronicle handles right of reply requests and maintains fairness in journalism.",
    url: `${SITE_URL}/right-of-reply`,
    type: "website",
    siteName: "Times Chronicle",
  },
  twitter: {
    card: "summary",
    title: "Right of Reply Policy — Times Chronicle",
    description:
      "Understand Times Chronicle's commitment to fairness, transparency, and responsible reporting.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Right of Reply Policy",
  description:
    "Times Chronicle's Right of Reply Policy explains how the newsroom handles requests for responses, corrections, and editorial fairness.",
  url: `${SITE_URL}/right-of-reply`,
  publisher: {
    "@type": "Organization",
    name: "Times Chronicle",
    url: SITE_URL,
  },
};

const cards = [
  {
    icon: "⚖️",
    title: "Our Approach",
    body: `When a story includes criticism, allegations, or information that could affect a person's or organization's reputation, we make reasonable efforts to seek comment before publication whenever possible. We believe hearing different perspectives helps create more complete and balanced reporting.`,
  },
  {
    icon: "✉️",
    title: "Requesting a Response",
    body: `If you believe a Times Chronicle article contains information about you, your brand, or your organization that requires clarification or a response, you are welcome to contact our editorial team. We review all legitimate requests carefully and consider any additional information provided.`,
  },
  {
    icon: "🕐",
    title: "After Publication",
    body: `Not every response arrives before a story is published. If new information, clarification, or an official statement becomes available after publication, our editorial team may update the article or add the response when appropriate and relevant to the story.`,
  },
  {
    icon: "📋",
    title: "Editorial Judgment",
    body: `While we take all right of reply requests seriously, the decision to publish, update, edit, or include a response remains with our editorial team. Each request is reviewed based on accuracy, relevance, public interest, and available evidence.`,
  },
];

export default function RightOfReply() {
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
              Fairness in Reporting
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight mb-2">
              Right of
              <br />
              <span className="italic font-normal">Reply</span>
            </h1>

            <div className="w-16 h-px bg-amber-700 mx-auto mt-6 mb-8" />

            <p className="text-stone-500 max-w-lg mx-auto leading-relaxed text-[15px]">
              At the Times Chronicle, we aim to report on stories in a fair and
              responsible way. We believe people should have the opportunity to
              respond to information that directly concerns them.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="max-w-5xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-stone-200 p-7 hover:shadow-sm transition-all"
            >
              <div className="text-2xl mb-3">{card.icon}</div>

              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700 font-sans mb-3">
                {card.title}
              </h2>

              <p className="text-stone-700 leading-relaxed text-[15px]">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* Request Box */}
        <div className="max-w-2xl mx-auto px-6 pb-14">
          <div className="bg-amber-50 border border-amber-200 p-8">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700 font-sans mb-5">
              What to Include in Your Request
            </h2>

            <ul className="space-y-3 text-stone-700 text-[15px]">
              {[
                "Your name and contact information",
                "The article in question (link or title)",
                "The specific information you are responding to",
                "Any supporting documents or evidence for our review",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold font-sans text-sm mt-0.5">
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm text-stone-500 italic">
              Providing clear information helps us assess your request more
              efficiently.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-stone-900 text-stone-100">
          <div className="max-w-2xl mx-auto px-6 py-10 text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-500 font-sans mb-4">
              Our Commitment
            </p>

            <p className="italic leading-relaxed text-stone-300">
              "Good journalism involves listening as well as reporting. We are
              committed to fairness, transparency, and responsible
              storytelling."
            </p>

            <a
              href="/contact"
              className="inline-block mt-6 px-6 py-2 border border-amber-600 text-amber-500 text-[11px] uppercase tracking-widest font-sans hover:bg-amber-600 hover:text-stone-900 transition-colors"
            >
              Submit a Right of Reply Request
            </a>
          </div>
        </div>
      </div>
    </>
  );
}