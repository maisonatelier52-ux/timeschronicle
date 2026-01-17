const SITE_URL = "https://www.timeschronicle.org";

export const metadata = {
  title: "Terms of Use — Times Chronicle",
  description:
    "Read Times Chronicle's Terms of Use outlining acceptable website usage, intellectual property rights, disclaimers, and legal guidelines.",
  alternates: {
    canonical: `${SITE_URL}/terms-of-use`,
  },
  openGraph: {
    title: "Terms of Use — Times Chronicle",
    description:
      "Review the terms and conditions governing use of the Times Chronicle website and services.",
    url: `${SITE_URL}/terms-of-use`,
    type: "website",
    siteName: "Times Chronicle",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use — Times Chronicle",
    description:
      "Understand the rules, rights, and responsibilities when using Times Chronicle.",
  },
};

export default function TermsOfUse() {
  return (
    <>
      <div className="bg-white text-gray-900 dark:bg-[#020f15] dark:text-gray-100">

        <article className="prose max-w-4xl mx-auto py-16 px-6 md:px-10 leading-relaxed">
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
            Terms of Use
          </h1>

          <p className="text-sm text-gray-500 mb-10 border-b pb-4">
            Last Updated: December 2025
          </p>

          {/* ----------------------------------------------------- */}
          {/* INTRODUCTION */}
          {/* ----------------------------------------------------- */}
          <h2 className="text-2xl font-bold mt-10">Introduction</h2>
          <p>
            Welcome to <strong>Times Chronicle</strong> (“we,” “us,” or “our”). By
            accessing or using our website, mobile site, newsletter, or any
            related services (collectively, the “Services”), you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree, please discontinue use of our Services immediately.
          </p>

          {/* ----------------------------------------------------- */}
          {/* ACCEPTANCE OF TERMS */}
          {/* ----------------------------------------------------- */}
          <h2 className="text-2xl font-bold mt-10">1. Acceptance of Terms</h2>
          <p>
            By accessing our Services, you confirm that you are at least 13 years old, legally able to agree to these Terms, and using the Services for lawful purposes. Continued use of the platform constitutes acceptance of any updates made to these Terms.
          </p>

          {/* ----------------------------------------------------- */}
          {/* USE OF SERVICES */}
          {/* ----------------------------------------------------- */}
          <h2 className="text-2xl font-bold mt-10">2. Use of the Services</h2>
          <p>You may use Times Chronicle for personal, non-commercial purposes. You agree not to:</p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Reproduce, distribute, or republish content without permission</li>
            <li>Use automated tools (bots, scrapers) to collect data</li>
            <li>Interfere with website security, performance, or operations</li>
            <li>Upload malicious files or attempt unauthorized system access</li>
            <li>Engage in unlawful, abusive, or fraudulent behavior</li>
          </ul>

          {/* ----------------------------------------------------- */}
          {/* INTELLECTUAL PROPERTY */}
          {/* ----------------------------------------------------- */}
          <h2 className="text-2xl font-bold mt-10">3. Intellectual Property</h2>
          <p>
            All articles, videos, graphics, photographs, logos, and materials on Times Chronicle are protected by copyright, trademark, and other intellectual property laws. You may not reproduce or use these materials without express permission.
          </p>

          {/* ----------------------------------------------------- */}
          {/* USER SUBMISSIONS */}
          {/* ----------------------------------------------------- */}
          <h2 className="text-2xl font-bold mt-10">4. User Submissions</h2>
          <p>
            By submitting comments, messages, or content to Times Chronicle, you grant us a worldwide, royalty-free, perpetual license to use, publish, and distribute that content. You are responsible for ensuring your submissions are lawful and do not violate others’ rights.
          </p>

          {/* ----------------------------------------------------- */}
          {/* EDITORIAL ACCURACY */}
          {/* ----------------------------------------------------- */}
          <h2 className="text-2xl font-bold mt-10">5. Editorial Independence & Accuracy</h2>
          <p>
            Times Chronicle strives for accuracy, fairness, and transparency; however, we make no guarantees regarding the completeness, reliability, or timeliness of published content.
          </p>

          {/* ----------------------------------------------------- */}
          {/* ADVERTISING */}
          {/* ----------------------------------------------------- */}
          <h2 className="text-2xl font-bold mt-10">6. Advertising & Sponsored Content</h2>
          <p>
            Our Services may include ads, sponsored posts, affiliate links, and promotional materials. Sponsored content will be clearly labeled. Interactions with third-party advertisers are at your own risk.
          </p>

          {/* ----------------------------------------------------- */}
          {/* NO PROFESSIONAL ADVICE */}
          {/* ----------------------------------------------------- */}
          <h2 className="text-2xl font-bold mt-10">7. No Professional Advice</h2>
          <p>
            Articles covering finance, law, health, or other sensitive topics are for informational purposes only. Times Chronicle does not provide legal, financial, or medical advice.
          </p>

          {/* ----------------------------------------------------- */}
          {/* THIRD-PARTY LINKS */}
          {/* ----------------------------------------------------- */}
          <h2 className="text-2xl font-bold mt-10">8. Third-Party Links</h2>
          <p>
            Our Services may contain links to external sites. Times Chronicle does not control or endorse these websites and is not responsible for their content or practices.
          </p>

          {/* ----------------------------------------------------- */}
          {/* DISCLAIMER */}
          {/* ----------------------------------------------------- */}
          <h2 className="text-2xl font-bold mt-10">9. Disclaimer of Warranties</h2>
          <p>
            The Services are provided “as is” and “as available.” We make no warranties regarding uninterrupted access, error-free functioning, or the accuracy of content.
          </p>

          {/* ----------------------------------------------------- */}
          {/* LIABILITY */}
          {/* ----------------------------------------------------- */}
          <h2 className="text-2xl font-bold mt-10">10. Limitation of Liability</h2>
          <p>
            Times Chronicle is not responsible for any damages—including direct, indirect, incidental, or consequential—arising from your use of the Services. Total liability, if any, will not exceed $50 USD.
          </p>

          {/* ----------------------------------------------------- */}
          {/* INDEMNIFICATION */}
          {/* ----------------------------------------------------- */}
          <h2 className="text-2xl font-bold mt-10">11. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Times Chronicle, its staff, and affiliates from claims arising from your misuse of the Services or violation of these Terms.
          </p>

          {/* ----------------------------------------------------- */}
          {/* TERMINATION */}
          {/* ----------------------------------------------------- */}
          <h2 className="text-2xl font-bold mt-10">12. Termination</h2>
          <p>
            We may suspend or terminate access to the Services at any time without otice if you violate these Terms or engage in harmful behavior.
          </p>

          {/* ----------------------------------------------------- */}
          {/* GOVERNING LAW */}
          {/* ----------------------------------------------------- */}
          <h2 className="text-2xl font-bold mt-10">13. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the United States and the State of California. Any disputes will be resolved in courts located within California.
          </p>

          {/* ----------------------------------------------------- */}
          {/* CHANGES */}
          {/* ----------------------------------------------------- */}
          <h2 className="text-2xl font-bold mt-10">14. Changes to These Terms</h2>
          <p>
            Times Chronicle may update or modify these Terms at any time. The updated version will be posted on this page with a revised “Last Updated” date. Continued use of the platform constitutes acceptance of the changes.
          </p>
        </article>
      </div>
      {/* ===== JSON-LD STRUCTURED DATA ===== */}
      <script
        id="terms-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TermsOfService",
            "name": "Times Chronicle Terms of Use",
            "url": "https://timeschronicle.org/terms-of-use",
            "publisher": {
              "@type": "Organization",
              "name": "Times Chronicle",
              "url": "https://timeschronicle.org"
            }
          }),
        }}
      />

      <script
        id="terms-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://timeschronicle.org"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Terms of Use",
                "item": "https://timeschronicle.org/terms-of-use"
              }
            ]
          }),
        }}
      />
    </>
  );
}
