const SITE_URL = "https://www.timeschronicle.org";

export const metadata = {
  title: "About Us — Times Chronicle",
  description:
    "Learn about Times Chronicle, our mission, editorial values, and the topics we cover, including politics, business, technology, health, and world news.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Us — Times Chronicle",
    description:
      "Discover the mission and editorial philosophy behind Times Chronicle.",
    url: `${SITE_URL}/about`,
    type: "website",
    siteName: "Times Chronicle",
  },
  twitter: {
    card: "summary",
    title: "About Us — Times Chronicle",
    description:
      "Learn about Times Chronicle's mission, newsroom values, and editorial coverage.",
  },
};

const beats = [
  {
    label: "U.S. Politics",
    icon: "🏛️",
    desc: "White House, Congress, elections, and public policy.",
  },
  {
    label: "National Affairs",
    icon: "⚖️",
    desc: "Federal agencies, Supreme Court, and major rulings.",
  },
  {
    label: "Economy & Business",
    icon: "📈",
    desc: "Markets, corporations, employment, and economic trends.",
  },
  {
    label: "Technology",
    icon: "💡",
    desc: "AI, Big Tech, cybersecurity, and digital innovation.",
  },
  {
    label: "Health & Science",
    icon: "🔬",
    desc: "Public health, medical research, and healthcare systems.",
  },
  {
    label: "World News",
    icon: "🌍",
    desc: "International politics, conflict, and global diplomacy.",
  },
];

export default function AboutUs() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Us",
    headline: "About Times Chronicle",
    description:
      "Times Chronicle is an independent digital news publication committed to covering politics, business, technology, health, and world affairs with accuracy and integrity.",
    url: `${SITE_URL}/about`,
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
      <div className="border-b-4 border-stone-900 bg-[#faf8f4]">
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-amber-700 font-sans mb-5">
            About Us
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 leading-none mb-6">
            News that
            <br />
            <span className="italic font-normal text-stone-600">
              holds its ground.
            </span>
          </h1>

          <div className="w-20 h-1 bg-amber-700 mb-8" />

          <p className="text-stone-600 text-lg leading-relaxed max-w-2xl">
            The Times Chronicle is an independent digital news publication
            committed to covering the stories that matter — with accuracy,
            depth, and integrity.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-stone-900 text-stone-100">
        <div className="max-w-3xl mx-auto px-6 py-14 text-center">
          <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-stone-200">
            "News never stands still. Neither do we."
          </p>

          <div className="w-10 h-px bg-amber-700 mx-auto mt-8" />
        </div>
      </div>

      {/* Narrative */}
      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14">
        <div>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700 font-sans mb-4">
            Looking Beyond the Headline
          </h2>

          <p className="text-stone-700 leading-relaxed text-[15px] mb-4">
            A breaking story can generate thousands of reactions in minutes.
            The real story usually takes longer to find.
          </p>

          <p className="text-stone-700 leading-relaxed text-[15px] mb-4">
            Behind every political development sits a process. Behind every
            market shift is a human consequence. We focus on the people,
            decisions, and forces shaping the direction of the news — not just
            the noise around it.
          </p>

          <p className="text-stone-700 leading-relaxed text-[15px]">
            The facts matter. The context matters more.
          </p>
        </div>

        <div>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700 font-sans mb-4">
            Why We Exist
          </h2>

          <p className="text-stone-700 leading-relaxed text-[15px] mb-4">
            News reaches far beyond the headlines. It influences policy. It
            shapes public opinion. It holds power accountable.
          </p>

          <p className="text-stone-700 leading-relaxed text-[15px] mb-4">
            The Times Chronicle was built to make important stories accessible,
            engaging, and worth reading — for readers who want more than a
            summary and less than a textbook.
          </p>

          <p className="text-stone-700 leading-relaxed text-[15px]">
            Whether you follow every political development or simply want to
            understand a major story, we're built for you.
          </p>
        </div>
      </div>

      {/* Beats */}
      <div className="bg-stone-50 border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-amber-700 font-sans mb-3 text-center">
            What We Cover
          </p>

          <h2 className="text-3xl font-bold text-stone-900 text-center mb-12">
            Our <span className="italic font-normal">Beats</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {beats.map((beat) => (
              <div
                key={beat.label}
                className="bg-white border border-stone-200 p-6 hover:border-amber-300 hover:shadow-sm transition-all"
              >
                <div className="text-2xl mb-3">{beat.icon}</div>

                <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-stone-900 font-sans mb-2">
                  {beat.label}
                </h3>

                <p className="text-stone-500 text-sm leading-relaxed">
                  {beat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t-4 border-stone-900 bg-[#faf8f4]">
        <div className="max-w-3xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-stone-700 font-serif text-lg italic">
            "Readers deserve information they can trust."
          </p>

          <div className="flex gap-4 font-sans text-[11px] uppercase tracking-widest shrink-0">
            <a
              href="/our-team"
              className="px-5 py-2 bg-stone-900 text-stone-100 hover:bg-stone-700 transition-colors"
            >
              Meet the Team
            </a>

            <a
              href="/contact"
              className="px-5 py-2 border border-stone-900 text-stone-900 hover:bg-stone-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}