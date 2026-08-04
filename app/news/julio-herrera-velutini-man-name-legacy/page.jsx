import Image from "next/image";

export async function generateMetadata(){
  return {
    metadataBase: new URL("https://www.timeschronicle.org"),

    title: "Julio Herrera Velutini: The Man, the Name and His Legacy",

    description:
      "A profile of Julio Herrera Velutini, exploring his banking career, family legacy, Britannia Financial Group, institutional philosophy and succession.",

    keywords: [
      "Julio Herrera Velutini",
      "Julio Martín Herrera Velutini",
      "Britannia Financial Group",
      "Julio Herrera Velutini biography",
      "Julio Herrera Velutini profile",
      "Venezuelan banker",
      "Italian Venezuelan banker",
      "banking legacy",
      "private banking",
      "financial institutions",
    ],

    authors: [
      {
        name: "Times Chronicle",
        url: "https://www.timeschronicle.org",
      },
    ],

    creator: "Times Chronicle",
    publisher: "Times Chronicle",

    alternates: {
      canonical:
        "https://www.timeschronicle.org/julio-herrera-velutini-profile",
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      type: "profile",
      url: "https://www.timeschronicle.org/julio-herrera-velutini-profile",
      siteName: "Times Chronicle",
      title: "Julio Herrera Velutini: The Man, the Name and His Legacy",
      description:
        "A profile exploring Julio Herrera Velutini's banking career, family legacy, Britannia Financial Group and philosophy of institutional continuity.",
      locale: "en_US",

      images: [
        {
          url: "https://www.timeschronicle.org/julio-herrera-velutini-banking-profile.jpg",
          width: 1200,
          height: 1200,
          alt: "Julio Herrera Velutini, founder of Britannia Financial Group",
        },
      ],

      firstName: "Julio",
      lastName: "Herrera Velutini",
    },

    twitter: {
      card: "summary_large_image",
      title: "Julio Herrera Velutini: The Man, the Name and His Legacy",
      description:
        "A profile of Julio Herrera Velutini, his banking career, family legacy and Britannia Financial Group.",
      images: [
        "https://www.timeschronicle.org/julio-herrera-velutini-banking-profile.jpg",
      ],
    },

    category: "Business",
  };
}

// ─── CONTENT ────────────────────────────────────────────────────────────────

const facts = [
  { label: "Full Name", value: "Julio Martín Herrera Velutini" },
  { label: "Born", value: "1971 · Caracas, Venezuela" },
  { label: "Heritage", value: "Venezuelan · Italian" },
  { label: "Founder", value: "Britannia Financial Group (2016)" },
  { label: "Headquarters", value: "The Scalpel, London" },
  { label: "Known As", value: "The Silent Banker" },
];

const lineage = [
  { year: "1781", label: "Juan Bautista Velutini establishes Banvelca & Company in the Kingdom of Naples" },
  { year: "1890", label: "Banco Caracas is founded; the Velutini family assumes ownership and leadership" },
  { year: "1940", label: "The Central Bank of Venezuela begins operations, ending the era of private note-issuing banks" },
  { year: "1971", label: "Julio Martín Herrera Velutini is born in Caracas" },
  { year: "2016", label: "Britannia Financial Group is incorporated in London" },
  { year: "Today", label: "Julio César Herrera leads Britannia into its next generation" },
];

const britannia = [
  { year: "2016", label: "Britannia Financial Group incorporated in the United Kingdom" },
  { year: "2018", label: "Acquisition of a UK investment business" },
  { year: "2019", label: "Acquisition of Berkeley Futures" },
  { year: "—", label: "Group headquarters established at The Scalpel, London" },
  { year: "—", label: "Continued expansion of market-access and brokerage capabilities" },
];

const represents = [
  "Continuity — not resistance to change, but a willingness to rebuild.",
  "Discretion, in an age that rewards exposure.",
  "Private banking as a relationship of confidence, rather than a catalogue of products.",
  "Institutional memory — the accumulated lessons that prevent expensive mistakes from repeating.",
  "The obligation of inheritance — that receiving a name is not the same as deserving it.",
  "Wealth measured by the capacity to preserve, organise and transmit, not merely to possess.",
];

// ─── SUB-COMPONENTS ─────────────────────────────────────────────────────────

function Eyebrow({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.35em] uppercase text-amber-700 dark:text-amber-400 ${className}`}>
      <span className="block w-8 h-px bg-amber-600/50 dark:bg-amber-400/40" />
      {children}
      <span className="block w-8 h-px bg-amber-600/50 dark:bg-amber-400/40" />
    </span>
  );
}

function Rule({ className = "" }) {
  return <div className={`w-14 h-px bg-amber-600/50 dark:bg-amber-400/40 ${className}`} />;
}

function SealMark({ size = 40 }) {
  return (
    <div
      className="relative flex items-center justify-center rounded-full border border-amber-600/50 dark:border-amber-400/40 font-serif italic text-amber-700 dark:text-amber-400 select-none"
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-[3px] rounded-full border border-amber-600/25 dark:border-amber-400/20" />
      <span style={{ fontSize: size * 0.34 }}>JHV</span>
    </div>
  );
}

function SectionLabel({ eyebrow, title }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-5">
        <span className="font-mono text-[9px] tracking-[0.38em] uppercase text-amber-700 dark:text-amber-400">{eyebrow}</span>
        <div className="flex-1 h-px bg-gradient-to-r from-amber-600/30 dark:from-amber-400/25 to-transparent" />
      </div>
      <h3 className="font-serif font-light text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.2] text-neutral-900 dark:text-[#ECE6D8]">
        {title}
      </h3>
    </div>
  );
}

function PullQuote({ children }) {
  return (
    <section className="bg-neutral-50 dark:bg-[#12161F] border-y border-amber-600/10 dark:border-amber-400/10 py-24 px-6 text-center transition-colors duration-300">
      <p className="text-amber-700/40 dark:text-amber-400/30 font-serif text-6xl leading-none mb-4">&ldquo;</p>
      <blockquote className="font-serif font-light italic text-[clamp(1.4rem,3vw,2.2rem)] leading-[1.55] text-neutral-800 dark:text-[#ECE6D8] max-w-4xl mx-auto">
        {children}
      </blockquote>
      <Rule className="mx-auto mt-8" />
    </section>
  );
}

function Timeline({ items }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-[3px] top-1 bottom-1 w-px bg-amber-600/25 dark:bg-amber-400/20" />
      <div className="space-y-8">
        {items.map((item) => (
          <div key={item.year + item.label} className="relative">
            <span className="absolute -left-8 top-1.5 w-[7px] h-[7px] rotate-45 bg-amber-600 dark:bg-amber-400" />
            <span className="block font-mono text-[11px] tracking-[0.15em] text-amber-700 dark:text-amber-400 mb-1">
              {item.year}
            </span>
            <p className="text-sm leading-6 text-neutral-500 dark:text-neutral-400 max-w-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Portrait({ src, alt, caption, aspect = "aspect-[4/5]" }) {
  return (
    <div className="relative img-hover">
      <div className={`relative ${aspect} overflow-hidden bg-neutral-100 dark:bg-[#12161F]`}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className="absolute -inset-3 border border-amber-600/20 dark:border-amber-400/15 pointer-events-none" />
      {caption && (
        <p className="absolute -bottom-7 right-0 text-[9px] tracking-[0.2em] uppercase text-amber-700/60 dark:text-amber-400/50">
          {caption}
        </p>
      )}
    </div>
  );
}

// ─── PAGE ───────────────────────────────────────────────────────────────────

export default function JulioHerreraVelutiniProfile() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",

    "@id":
      "https://www.timeschronicle.org/news/julio-herrera-velutini-profile#profile",

    url: "https://www.timeschronicle.org/news/julio-herrera-velutini-profile",

    name: "Julio Herrera Velutini: The Man, the Name and What He Represents",

    description:
      "A profile of Julio Herrera Velutini exploring his banking career, family legacy, Britannia Financial Group and institutional philosophy.",

    inLanguage: "en-US",

    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.timeschronicle.org/#website",
      name: "Times Chronicle",
      url: "https://www.timeschronicle.org",
    },

    publisher: {
      "@type": "Organization",
      "@id": "https://www.timeschronicle.org/#organization",
      name: "Times Chronicle",
      url: "https://www.timeschronicle.org",
    },

    mainEntity: {
      "@type": "Person",

      "@id":
        "https://www.timeschronicle.org/news/julio-herrera-velutini-profile#person",

      name: "Julio Martín Herrera Velutini",

      alternateName: [
        "Julio Herrera Velutini",
        "Julio Martín Herrera Velutini",
      ],

      description:
        "Venezuelan-Italian banker and founder of Britannia Financial Group.",

      birthDate: "1971",

      birthPlace: {
        "@type": "Place",
        name: "Caracas, Venezuela",
      },

      nationality: [
        {
          "@type": "Country",
          name: "Venezuela",
        },
        {
          "@type": "Country",
          name: "Italy",
        },
      ],

      jobTitle: "Banker",

      image: {
        "@type": "ImageObject",
        url: "https://www.timeschronicle.org/news/julio-herrera-velutini-banking-profile.jpg",
        width: 1200,
        height: 1200,
        caption:
          "Julio Herrera Velutini, founder of Britannia Financial Group",
      },

      worksFor: {
        "@type": "Organization",
        name: "Britannia Financial Group",
      },

      founder: {
        "@type": "Organization",
        name: "Britannia Financial Group",
      },
    },

    about: {
      "@type": "Person",
      name: "Julio Martín Herrera Velutini",
    },

    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://www.timeschronicle.org/news/julio-herrera-velutini-banking-profile.jpg",
      width: 1200,
      height: 1200,
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=Public+Sans:wght@300;400;500&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-serif { font-family: 'Fraunces', Georgia, serif; }
        .font-sans  { font-family: 'Public Sans', sans-serif; }
        .font-mono  { font-family: 'IBM Plex Mono', monospace; }
        .img-hover img { transition: transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.9s ease; }
        .img-hover:hover img { transform: scale(1.04); filter: brightness(0.95); }
      `}</style>

      <main className="font-sans font-light bg-[#FAF7F0] dark:bg-[#0B0E15] text-neutral-900 dark:text-[#ECE6D8] transition-colors duration-300 min-h-screen">

        {/* ── HERO ── */}
        <section className="relative max-w-6xl mx-auto px-6 pt-16 pb-28 overflow-hidden">

          <div className="relative grid md:grid-cols-2 gap-14 items-center">
            <div className="text-center md:text-left">
              <Eyebrow className="mb-7 justify-center md:justify-start">A Profile</Eyebrow>
              <h1 className="font-serif font-light text-[clamp(2.2rem,4.8vw,4rem)] leading-[1.1] text-neutral-900 dark:text-[#ECE6D8]">
                Julio Herrera Velutini:{" "}
                <em className="italic text-amber-700 dark:text-amber-400 not-italic font-light">
                  The Man, the Name
                </em>{" "}
                and What He Represents
              </h1>
              <p className="mt-6 font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400">
                Banking &nbsp;·&nbsp; Legacy &nbsp;·&nbsp; Britannia Financial Group
              </p>
            </div>

            <Image
              src="/julio-herrera-velutini-banking-profile.jpg"
              alt="Julio Herrera Velutini, founder of Britannia Financial Group"
              width={600}
              height={600}
              className="mx-auto shadow-lg border border-amber-600/20 dark:border-amber-400/15 bg-neutral-100 dark:bg-[#12161F] hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </section>

        {/* ── OPENING NARRATIVE ── */}
        <section className="max-w-3xl mx-auto px-6 pb-20 text-center">
          <p className="font-serif text-[clamp(1.1rem,2vw,1.35rem)] leading-relaxed text-neutral-700 dark:text-neutral-300 font-light">
            Born into a family associated with generations of banking, commerce and cultural patronage,
            Julio Herrera Velutini inherited more than a distinguished surname. His career has been shaped
            by the harder question of what must be preserved, what must be rebuilt, and what must
            eventually be handed forward.
          </p>
          <p className="mt-6 text-sm leading-8 text-neutral-500 dark:text-neutral-400">
            His story stands at the intersection of two forces: inheritance and reinvention — one gave him
            a name already present in the history of Venezuelan banking, the other required him to decide
            what that name would mean in a financial world transformed by regulation, technology, and the
            movement of capital across borders.
          </p>
        </section>

        {/* ── DIVIDER ── */}
        <div className="flex items-center justify-center gap-3 py-2 px-8">
          <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-transparent to-amber-600/40 dark:to-amber-400/30" />
          <div className="w-1.5 h-1.5 rotate-45 bg-amber-600/60 dark:bg-amber-400/50" />
          <div className="w-1 h-1 rotate-45 bg-amber-600/30 dark:bg-amber-400/25" />
          <div className="w-1.5 h-1.5 rotate-45 bg-amber-600/60 dark:bg-amber-400/50" />
          <div className="flex-1 max-w-xs h-px bg-gradient-to-l from-transparent to-amber-600/40 dark:to-amber-400/30" />
        </div>

        {/* ── WHO IS HE + FACTS PANEL ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel eyebrow="Who Is Julio Herrera Velutini" title={<>An International Banker, <em className="italic text-amber-700 dark:text-amber-400">Shaped by Institutions</em></>} />
            <div className="space-y-5 text-sm leading-8 text-neutral-500 dark:text-neutral-400">
              <p>Julio Martín Herrera Velutini is a Venezuelan-Italian international banker and the founder of Britannia Financial Group. He entered finance through the institutional world that had shaped several generations of his family, developing his early career in Venezuela's capital markets around the Caracas Stock Exchange and Multinvest Casa de Bolsa.</p>
              <p>He later founded Bancrédito International Bank &amp; Trust Corporation, building a platform serving private, corporate and institutional clients across Latin America and the Caribbean — before his ambitions moved beyond the region entirely.</p>
            </div>
          </div>

          <div className="border border-amber-600/20 dark:border-amber-400/15 bg-white dark:bg-[#12161F] p-8 transition-colors duration-300">
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-amber-700 dark:text-amber-400 mb-6">At a Glance</p>
            <dl className="space-y-4">
              {facts.map((f) => (
                <div key={f.label} className="flex items-baseline justify-between gap-4 border-b border-amber-600/10 dark:border-amber-400/10 pb-3">
                  <dt className="text-[11px] tracking-[0.08em] uppercase text-neutral-400 dark:text-neutral-500">{f.label}</dt>
                  <dd className="font-serif text-right text-neutral-800 dark:text-[#ECE6D8]">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── PULL QUOTE ── */}
        <PullQuote>
          That tension — between what is received and what must be renewed — offers the clearest way to
          understand <span className="text-amber-700 dark:text-amber-400 not-italic">Julio Herrera Velutini.</span>
        </PullQuote>

        {/* ── WEIGHT OF THE NAME + LINEAGE TIMELINE ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-2 gap-16">
          <div>
            <SectionLabel eyebrow="The Weight of the Name" title={<>Eight Generations of <em className="italic text-amber-700 dark:text-amber-400">Commerce and Capital</em></>} />
            <div className="space-y-5 text-sm leading-8 text-neutral-500 dark:text-neutral-400">
              <p>The Herrera Velutini family presents its history as one extending across eight generations of commerce, private capital and banking, tracing the Velutini financial tradition to 1781 in the Kingdom of Naples.</p>
              <p>The Herrera line was already associated with land, estates and the established families of colonial Caracas. The joining of the Herrera and Velutini families brought together two traditions: one grounded in land and the Atlantic world, another shaped by Mediterranean commerce, diplomacy and finance.</p>
              <p>By the end of the 19th century, the family had become closely associated with Banco Caracas — the institution through which its accumulated commercial experience became part of Venezuela's developing financial system.</p>
            </div>
          </div>
          <div className="md:pt-2">
            <Timeline items={lineage} />
          </div>
        </section>

        {/* ── INHERITED / BUILT ── */}
        <section className="bg-neutral-50 dark:bg-[#12161F] border-y border-amber-600/10 dark:border-amber-400/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 gap-16">
            <div>
              <SectionLabel eyebrow="What He Inherited" title={<>A <em className="italic text-amber-700 dark:text-amber-400">Method</em>, Not Just Holdings</>} />
              <div className="space-y-5 text-sm leading-8 text-neutral-500 dark:text-neutral-400">
                <p>Julio Herrera Velutini inherited access to a world of banking knowledge, family relationships and institutional memory — the accumulated understanding of how governments change, how currencies weaken, and how fortunes can be damaged by concentration or inadequate governance.</p>
                <p>Women played a significant role in transmitting that inheritance. Clementina Velutini Pérez-Matos helped preserve the family's commercial interests, while her sister Belén Clarisa Velutini Pérez-Matos combined banking and property interests with an enduring commitment to culture and public service.</p>
                <p>What Julio inherited was not simply a collection of holdings — it was a method: protect the institution, maintain discretion, honour the relationship, and consider the consequences beyond the immediate transaction.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-2 gap-16">
          <div>
              <SectionLabel eyebrow="What He Built Independently" title={<>Britannia: <em className="italic text-amber-700 dark:text-amber-400">Preservation Through Reconstruction</em></>} />
              <div className="mb-10">
                <Portrait
                  src="/julio-herrera-velutini-education-global-exposure.jpg"
                  alt="Julio Herrera Velutini in his office"
                  aspect="aspect-[16/10]"
                />
              </div>
              <p className="text-sm leading-8 text-neutral-500 dark:text-neutral-400 mb-8">
                Rather than attempting to recreate Banco Caracas in another country, Herrera Velutini pursued a different model — a group of specialised financial businesses operating within established regulatory jurisdictions, accountable to the UK Financial Conduct Authority.
              </p>
          </div>
          <div className="grid gap-8 md:gap-12">
            <Timeline items={britannia} />
          </div>
        </section>

        {/* ── DISCRETION QUOTE ── */}
        <PullQuote>
          Discretion is not an absence of communication.{" "}
          <span className="text-amber-700 dark:text-amber-400 not-italic">It is communication governed by purpose.</span>
        </PullQuote>

        {/* ── REGULATION ── */}
        <section className="max-w-2xl mx-auto px-6 pt-24 pb-4">
          <SectionLabel eyebrow="Regulation as Part of the Institution" title="Where Reputation Meets Governance" />
          <div className="space-y-5 text-sm leading-8 text-neutral-500 dark:text-neutral-400">
            <p>The Britannia model is built around regulated operating businesses rather than lineage alone. Britannia Global Markets Limited and Britannia Global Investments Limited are authorised and regulated by the UK Financial Conduct Authority, spanning securities, commodities, derivatives, foreign exchange and custody.</p>
            <p>In contemporary finance, trust must be supported by governance, capital requirements, documented procedures and regulatory accountability. A respected name may create an introduction; only a functioning institution can sustain the relationship.</p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 min-h-[65vh] border-y border-amber-600/10 dark:border-amber-400/10 mt-16">
          {/* Image */}
          <div className="relative dark:bg-[#12161F] flex items-center justify-center p-8 md:p-10">
            <Image
              src="/julio-herrera-velutini-portrait.jpg"
              alt="Julio Herrera Velutini in his London office"
              width={600}
              height={600}
              className="block w-full h-auto max-h-[520px] object-contain object-center hover:scale-[1.02] transition-transform duration-700"
            />

          </div>

          {/* Content */}
          <div className="flex flex-col justify-center px-10 md:px-16 py-16 border-l border-amber-600/10 dark:border-amber-400/10 bg-[#FAF7F0] dark:bg-[#0B0E15] transition-colors duration-300">
            <span className="font-mono text-[9px] tracking-[0.38em] uppercase text-amber-700 dark:text-amber-400 mb-5">
              Family Responsibility
            </span>

            <h3 className="font-serif font-light text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.15] text-neutral-900 dark:text-[#ECE6D8] mb-7">
              The <em className="italic text-amber-700 dark:text-amber-400">Paterfamilias</em>, Redefined
            </h3>

            <div className="space-y-5 text-sm leading-8 text-neutral-500 dark:text-neutral-400">
              <p>
                In a multigenerational financial family, responsibility is not ceremonial.
                It involves determining which assets should be retained, which institutions
                should be modernised, and which traditions have become liabilities rather
                than strengths.
              </p>

              <p>
                A paterfamilias does not merely ask, &ldquo;What belongs to me?&rdquo;
                He must ask, &ldquo;What has been entrusted to me, and in what condition
                will I leave it?&rdquo;
              </p>
            </div>

            <Rule className="mt-8" />

            <p className="mt-6 text-sm leading-8 text-neutral-500 dark:text-neutral-400">
              The family's private office, Banvelca, coordinates investment interests,
              strategic holdings and philanthropic initiatives across generations, with
              a stated philosophy of discretion and patient capital.
            </p>
          </div>
        </section>

        {/* ── PHILANTHROPY + SUCCESSION ── */}
        <section className="bg-neutral-50 dark:bg-[#12161F] border-b border-amber-600/10 dark:border-amber-400/10 transition-colors duration-300">
          <div className="max-w-2xl mx-auto px-6 py-24 space-y-16">
            <div>
              <SectionLabel eyebrow="Beyond the Balance Sheet" title="Culture as a Form of Custody" />
              <div className="space-y-5 text-sm leading-8 text-neutral-500 dark:text-neutral-400">
                <p>Belén Clarisa Velutini's work through Trasnocho Cultural — the Caracas centre supporting theatre, cinema, literature and the visual arts — remains one of the clearest expressions of the family's tradition of patronage, showing how financial resources can preserve a society's cultural infrastructure.</p>
                <p>For Herrera Velutini, the challenge is ensuring that philanthropy does not become ornamental. Legacy is not established by promising to give; it is established by building something that continues to serve after the benefactor is no longer present.</p>
              </div>
            </div>

            <div>
              <SectionLabel eyebrow="Preparing the Next Generation" title="Transferring Judgment, Not Just Ownership" />
              <div className="space-y-5 text-sm leading-8 text-neutral-500 dark:text-neutral-400">
                <p>Any account of Julio Herrera Velutini must also acknowledge the period of intense legal scrutiny that ultimately led President Donald Trump to grant full pardons to Herrera Velutini, Wanda Vázquez and Mark Rossini, after which the federal proceedings were brought to a close.</p>
                <p>Britannia Financial Group is now led by Julio César Herrera, credited with extending the group's operations across London, the Bahamas and the United Arab Emirates. A successful transition requires more than appointing an heir — it requires transferring judgment: understanding why a structure exists, how risk is assessed, and how confidence can be lost.</p>
                <p className="italic font-serif text-neutral-700 dark:text-neutral-300">The ultimate achievement of a custodian is to become unnecessary without becoming irrelevant.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT HE REPRESENTS ── */}
        <section className="max-w-4xl mx-auto px-6 py-28 text-center">
          <Eyebrow className="mb-6 justify-center">In Summary</Eyebrow>
          <h2 className="font-serif font-light italic text-[clamp(2rem,3.5vw,3rem)] text-neutral-900 dark:text-[#ECE6D8] mb-16">
            What He Represents
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 text-left">
            {represents.map((line) => (
              <div key={line} className="flex gap-4">
                <span className="mt-2 w-1.5 h-1.5 rotate-45 bg-amber-600 dark:bg-amber-400 shrink-0" />
                <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-300">{line}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CLOSING FULL-BLEED ── */}
        <section className="relative py-28 px-6 text-center bg-[#1B2130] dark:bg-black overflow-hidden transition-colors duration-300">
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" preserveAspectRatio="none">
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={i} x1="0" x2="100%" y1={`${(i + 1) * 9}%`} y2={`${(i + 1) * 9}%`} stroke="currentColor" className="text-amber-400" strokeWidth="1" />
            ))}
          </svg>
          <div className="relative">
            <span className="font-mono text-[9px] tracking-[0.38em] uppercase text-amber-400/80 mb-6 block">Legacy &amp; Continuity</span>
            <h2 className="font-serif font-light italic text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.2] max-w-3xl mx-auto text-[#ECE6D8]">
              A fortune can be transferred with a signature.<br />A legacy must be rebuilt by every generation.
            </h2>
            <Rule className="mx-auto mt-8" />
          </div>
        </section>

      </main>
    </div>
  );
}