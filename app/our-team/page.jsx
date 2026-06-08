import Image from "next/image";

const SITE_URL = "https://www.timeschronicle.org";

export const metadata = {
  title: "Our Team — Times Chronicle",
  description:
    "Meet the journalists and editors behind Times Chronicle. Learn about our newsroom, editorial expertise, and the reporters covering politics, business, technology, health, and world news.",
  alternates: {
    canonical: `${SITE_URL}/our-team`,
  },
  openGraph: {
    title: "Our Team — Times Chronicle",
    description:
      "Meet the newsroom behind Times Chronicle and the journalists committed to independent, trustworthy reporting.",
    url: `${SITE_URL}/our-team`,
    type: "website",
    siteName: "Times Chronicle",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team — Times Chronicle",
    description:
      "Discover the journalists and editors behind Times Chronicle.",
  },
};

const authors = [
  {
    id: 1,
    name: "Charles-Williams",
    slug: "charles-williams",
    photo: "/author/Charles-Williams.webp",
    beat: "National Affairs",
    bio: "Covers U.S. national affairs with a focus on federal agencies, Supreme Court decisions, and major rulings from federal courts. His reporting emphasizes legal accountability, institutional power, and how government actions shape everyday life across the United States.",
    quora: "https://www.quora.com/profile/Charles-Williams-3018",
    medium: "https://medium.com/@charles_williams_wiresavvy01",
    pinterest: "https://in.pinterest.com/charles_williams01/",
  },
  {
    id: 2,
    name: "Chris Louis",
    slug: "chris-louis",
    photo: "/author/Chris-Louis.webp",
    beat: "Politics",
    bio: "Reports on American politics, covering the White House, Congress, elections, and public policy.",
    quora: "https://www.quora.com/profile/Chris-Louis-118",
    medium: "https://medium.com/@chris_louis_timeschronicle",
    pinterest: "https://in.pinterest.com/chris_louis01/",
  },
  {
    id: 3,
    name: "David Jonathan",
    slug: "david-jonathan",
    photo: "/author/David-Jonathan.webp",
    beat: "Economy & Business",
    bio: "Focused on the economy, financial markets, major corporations, and employment trends.",
    quora: "",
    medium: "https://medium.com/@david_jonathan",
    pinterest: "https://in.pinterest.com/david_jonathan0892/_profile/",
  },
  {
    id: 4,
    name: "Dr. Marina Cordelia",
    slug: "dr-marina-cordelia",
    photo: "/author/Dr-Marina-Cordelia.webp",
    beat: "Technology",
    bio: "Covers technology with an emphasis on artificial intelligence, cybersecurity, innovation, and Big Tech.",
    quora: "",
    medium: "",
    pinterest: "",
  },
  {
    id: 5,
    name: "Mark Nathaniel",
    slug: "mark-nathaniel",
    photo: "/author/Mark-Nathaniel.webp",
    beat: "Health & Science",
    bio: "Reports on health policy, medical research, healthcare systems, and scientific developments.",
    quora: "",
    medium: "",
    pinterest: "",
  },
  {
    id: 6,
    name: "Naida Storm",
    slug: "naida-storm",
    photo: "/author/Naida-Storm.webp",
    beat: "World News",
    bio: "Covers international politics, diplomacy, conflicts, and global developments affecting the United States.",
    quora: "",
    medium: "",
    pinterest: "",
  },
];

function SocialLink({ href, label, children }) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-stone-400 hover:text-amber-700 transition-colors"
    >
      {children}
    </a>
  );
}

const QuoraIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 2.136 0 4.14-.562 5.878-1.545l-1.443-2.196C15.296 20.91 13.695 21.4 12 21.4 6.813 21.4 2.6 17.187 2.6 12S6.813 2.6 12 2.6 21.4 6.813 21.4 12c0 2.548-1 4.86-2.625 6.562l1.453 2.21A11.935 11.935 0 0024 12C24 5.373 18.627 0 12 0zm.657 17.13c-.674 1.045-1.62 1.72-2.837 1.72-1.91 0-3.21-1.575-3.21-3.85 0-2.278 1.3-3.853 3.21-3.853.38 0 .733.066 1.05.184l.784 1.194c-.547-.274-1.133-.37-1.696-.37-1.055 0-1.69.89-1.69 2.845 0 1.957.635 2.848 1.69 2.848.468 0 .89-.156 1.235-.44l1.464 1.722z"/>
  </svg>
);

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

function AuthorCard({ author }) {
  return (
    <div className="bg-white border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all">
      <div className="relative bg-stone-100 aspect-[3/4]">
        <Image
          src={author.photo}
          alt={author.name}
          fill
          className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
        />

        <div className="absolute top-3 left-3">
          <span className="bg-stone-900 text-amber-400 text-[10px] uppercase tracking-widest px-2 py-1 font-sans font-bold">
            {author.beat}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-stone-900">
          {author.name}
        </h2>

        <p className="mt-4 text-stone-600 text-sm leading-relaxed">
          {author.bio}
        </p>

        <div className="flex gap-4 mt-5 pt-5 border-t border-stone-100">
          <SocialLink href={author.quora} label="Quora">
            <QuoraIcon />
          </SocialLink>

          <SocialLink href={author.medium} label="Medium">
            <MediumIcon />
          </SocialLink>

          <SocialLink href={author.pinterest} label="Pinterest">
            <PinterestIcon />
          </SocialLink>
        </div>

        <a
          href={`/author/${author.slug}`}
          className="inline-block mt-5 text-xs uppercase tracking-widest text-amber-700 font-bold"
        >
          View Articles →
        </a>
      </div>
    </div>
  );
}

export default function OurTeam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Our Team",
    url: `${SITE_URL}/our-team`,
    description:
      "Meet the journalists and editors behind Times Chronicle.",
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
        <div className="bg-stone-900 text-stone-400 text-[11px] tracking-[0.25em] uppercase text-center py-2 font-sans">
          Times Chronicle · Our Newsroom
        </div>

        <div className="border-b-4 border-stone-900">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-700 font-sans mb-5">
              The People Behind the Stories
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight mb-4">
              Meet the
              <br />
              <span className="italic font-normal">
                Newsroom
              </span>
            </h1>

            <div className="w-16 h-1 bg-amber-700 mb-8" />

            <p className="text-stone-500 max-w-2xl text-base leading-relaxed">
              Every story starts with curiosity. Our reporters cover politics,
              national affairs, business, technology, health, and world news
              with a commitment to accuracy and public service.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author) => (
              <AuthorCard key={author.id} author={author} />
            ))}
          </div>
        </div>

        <div className="bg-stone-900 text-stone-100">
          <div className="max-w-3xl mx-auto px-6 py-14 text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-500 font-sans mb-6">
              What Connects Us
            </p>

            <p className="text-xl md:text-2xl italic text-stone-300 leading-relaxed">
              "Different backgrounds. Different perspectives. One shared
              belief: the public deserves reporting that is accurate,
              independent, and worth their time."
            </p>
          </div>
        </div>

        <div className="border-t border-stone-200 bg-stone-50">
          <div className="max-w-3xl mx-auto px-6 py-8 text-center">
            <p className="text-xs text-stone-400 font-sans tracking-wide">
              Want to reach a specific reporter?{" "}
              <a
                href="/contact"
                className="text-amber-700 underline underline-offset-2"
              >
                Contact the newsroom
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}