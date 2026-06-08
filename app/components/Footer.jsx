"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const newsRoom = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact Us", href: "/contact" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "Corrections Policy", href: "/corrections-policy" },
  { label: "Source Methodology", href: "/source-methodology" },
];

const standards = [
  { label: "Ownership & Funding", href: "/ownership-and-funding" },
  { label: "Advertising Policy", href: "/advertising-policy" },
  { label: "Right of Reply", href: "/right-of-reply" },
  { label: "Legal", href: "/legal" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function Footer() {

  return (
    <footer className="bg-black dark:bg-[#020f15] text-white border-t border-gray-800">

      {/* Top section */}
      <div className="container mx-auto px-7 py-12 grid grid-cols-1 lg:grid-cols-4 gap-10">

        {/* LEFT SECTION */}
        <div className="space-y-4 text-left lg:col-span-2">
          <Link href="/" title="Home" className="block">

            <span className="text-2xl font-extrabold tracking-wide text-white">
              Times Chronicle
            </span>
          </Link>

          <p className="text-sm dark:text-gray-300 max-w-md">
            Times Chronicle brings you the latest news from around the world. Stay updated with real-time headlines and exclusive insights.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-5">
            {[
              { Icon: FaFacebookF, color: "hover:text-blue-600", link: "https://facebook.com", title: "Facebook" },
              { Icon: FaTwitter, color: "hover:text-blue-400", link: "https://twitter.com", title: "Twitter" },
              { Icon: FaInstagram, color: "hover:text-pink-500", link: "https://instagram.com", title: "Instagram" },
              { Icon: FaYoutube, color: "hover:text-red-600", link: "https://youtube.com", title: "YouTube" },
            ].map(({ Icon, color, link, title }) => (
              <a
                key={link}
                href={link}
                title={title}
                target="_blank"
                rel="noreferrer"
                className={`text-xl md:text-2xl transition-transform duration-100 hover:scale-110 ${color}`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-8 md:gap-14 text-left">

            {/* Categories */}
            <div>
              <HeadingWithTriangle text="Newsroom" />
              <ul className="uppercase space-y-0.5 leading-tight">
                {newsRoom.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      title={label}
                      className="text-[10px] text-gray-300 hover:text-gray-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Standards */}
            <div>
              <HeadingWithTriangle text="Standards" />
              <ul className="uppercase space-y-0.5 leading-tight">
                {standards.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      title={label}
                      className="text-[10px] text-gray-300 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <span className="block h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      {/* Bottom */}
      <div className="py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Times Chronicle. All rights reserved.
      </div>
    </footer>
  );
}

/* Heading Component */
function HeadingWithTriangle({ text }) {
  return (
    <div className="relative inline-block mb-2">
      <div className="bg-[#1e1d22] text-white px-4 py-0.5 relative inline-block font-bold uppercase text-sm">
        {text}
        <span className="absolute top-0 right-[-10px] w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[10px] border-l-[#1e1d22]" />
      </div>
      <div className="h-[2px] bg-[#1e1d22] w-full mt-1" />
    </div>
  );
}
