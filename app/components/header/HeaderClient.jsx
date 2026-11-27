"use client";

import { useEffect, useState } from "react";
import {
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";

export default function HeaderClient() {
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [searchIndex, setSearchIndex] = useState(null);
  const [searchFailed, setSearchFailed] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  useEffect(() => {
    if (!openSearch || searchIndex) return;

    const controller = new AbortController();

    async function loadSearchIndex() {
      try {
        const response = await fetch("/search-index.json", {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Could not load the search index");

        const index = await response.json();
        if (!controller.signal.aborted) setSearchIndex(index);
      } catch {
        if (!controller.signal.aborted) setSearchFailed(true);
      }
    }

    loadSearchIndex();
    return () => controller.abort();
  }, [openSearch, searchIndex]);

  const normalizedQuery = query.toLowerCase();
  const results = searchIndex && normalizedQuery
    ? searchIndex.filter((article) =>
        article.title.toLowerCase().includes(normalizedQuery)
      ).slice(0, 6)
    : [];

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-[60]
        transition-transform duration-300
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* RIGHT ICONS */}
      <div className="absolute top-6 right-7 flex items-center gap-5">
        {/* SEARCH */}
        <button
          aria-label="Search"
          onClick={() => {
            setSearchFailed(false);
            setOpenSearch((v) => !v);
          }}
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
        >
          {openSearch ? <FaTimes /> : <FaSearch />}
        </button>

      </div>

      {/* SEARCH PANEL */}
      {openSearch && (
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

            {searchFailed && (
              <p role="status" className="mt-4 text-sm">
                Search couldn’t load. Close and reopen search to try again.
              </p>
            )}

            {query && !searchIndex && !searchFailed && (
              <p role="status" className="mt-4 text-sm">Loading headlines…</p>
            )}

            {results.length > 0 && (
              <div className="mt-4 divide-y divide-gray-200 dark:divide-gray-800">
                {results.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/news/${article.slug}`}
                    prefetch={false}
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
                      {article.category}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
