"use client";

import { useEffect, useState } from "react";
// import Link from "next/link";
// import data from "@/data/data.json";
// import {
//   FaSearch,
//   FaTimes,
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaYoutube,
// } from "react-icons/fa";

export default function HeaderClient() {
  // const [openSearch, setOpenSearch] = useState(false);
  // const [query, setQuery] = useState("");
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  /* Scroll hide / show */
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y < 80) setShowHeader(true);
      else if (y > lastScrollY) setShowHeader(false);
      else setShowHeader(true);
      setLastScrollY(y);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // const results =
  //   query.length > 0
  //     ? data.articles.filter(
  //         (a) =>
  //           a.published &&
  //           a.title.toLowerCase().includes(query.toLowerCase())
  //       )
  //     : [];

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-[60]
        transition-transform duration-300
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* RIGHT ICONS */}
      {/* <div className="absolute top-6 right-7 flex items-center gap-5"> */}
        {/* SEARCH */}
        {/* <button
          aria-label="Search"
          onClick={() => setOpenSearch((v) => !v)}
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
        >
          {openSearch ? <FaTimes /> : <FaSearch />}
        </button> */}

        {/* SOCIAL ICONS (DESKTOP ONLY) */}
        {/* <div className="hidden sm:flex items-center gap-4 text-gray-500 dark:text-gray-400">
          <a href="#" aria-label="Facebook" className="hover:text-blue-600">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-500">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-red-600">
            <FaYoutube />
          </a>
        </div> */}
      {/* </div> */}

      {/* SEARCH PANEL */}
      {/* {openSearch && (
        <div className="mt-[70px] bg-white dark:bg-[#01131d] border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-[1400px] mx-auto px-7 py-4">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search headlines..."
              className="
                w-full p-3 text-sm
                bg-gray-100 dark:bg-[#0e1f2a]
                text-black dark:text-white
                outline-none
              "
            />

            {results.length > 0 && (
              <div className="mt-4 divide-y divide-gray-200 dark:divide-gray-800">
                {results.slice(0, 6).map((article) => (
                  <Link
                    key={article.slug}
                    href={`/news/${article.slug}`}
                    onClick={() => {
                      setOpenSearch(false);
                      setQuery("");
                    }}
                    className="block py-3 transition-all hover:pl-3"
                  >
                    <h4 className="font-bold text-lg">
                      {article.title}
                    </h4>
                    <p className="text-[9px] uppercase text-gray-400">
                      {article.time} Read
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )} */}
    </div>
  );
}