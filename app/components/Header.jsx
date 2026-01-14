"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import data from "@/data/data.json";

export default function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const categories = useMemo(() => {
    return [
      ...new Set(
        data.articles
          .filter((a) => a.published && a.category)
          .map((a) => a.category.toLowerCase())
      ),
    ];
  }, []);

  /* Scroll direction logic */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* Search results */
  const results =
    query.length > 0
      ? data.articles.filter((a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) && a.published === true
        )
      : [];

  const formattedDate = useMemo(() => {
    return new Date().toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-transform duration-300 ease-in-out
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
        border-b border-gray-300 dark:border-gray-800
        bg-white dark:bg-[#01131de0]
        backdrop-blur
      `}
    >
      {/* TOP BAR */}
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-7 py-3 uppercase">
        {/* Logo + Categories */}
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className="text-2xl font-bold font-bbh text-black dark:text-white"
          >
            Timeschronicle
          </Link>

          {/* Desktop Categories */}
          <nav className="hidden md:flex space-x-6 text-[12px]">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/category/${cat.toLowerCase()}`}
                className="
                  relative font-semibold
                  text-black dark:text-gray-200
                  after:absolute after:bottom-0 after:left-0
                  after:h-[2px] after:w-0
                  after:bg-black dark:after:bg-white
                  after:transition-all after:duration-200
                  hover:after:w-full
                "
              >
                {cat}
              </Link>
            ))}
          </nav>
        </div>

        {/* DATE (NEW) */}
        <div className="hidden lg:block text-[11px] hidden lg:block tracking-widest text-gray-500 dark:text-gray-400">
          {formattedDate}
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-5">
          <button
            onClick={() => setOpenSearch(!openSearch)}
            aria-label="Search"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-700 transition-colors"
          >
            {openSearch ? <FaTimes /> : <FaSearch />}
          </button>

          <div className="hidden sm:flex items-center space-x-4">
            <FaFacebookF className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>

      {/* SEARCH PANEL */}
      {openSearch && (
        <div className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#01131de0]">
          <div className="max-w-[1400px] mx-auto px-7 py-4">
            <input
              type="text"
              placeholder="Search headlines..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="
                w-full p-3 text-sm
                bg-gray-100 dark:bg-[#0e1f2a]
                text-black dark:text-white
                outline-none
              "
              autoFocus
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
                    <h4 className="font-bbh text-lg">
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
      )}

      {/* MOBILE CATEGORIES */}
      <div className="md:hidden flex overflow-x-auto border-t border-gray-200 px-7 py-2 space-x-4 uppercase">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/category/${cat.toLowerCase()}`}
            className="text-[12px] font-semibold whitespace-nowrap hover:text-gray-400"
          >
            {cat}
          </Link>
        ))}
      </div>
    </header>
  );
}