"use client";

import { useState } from "react";
import {
  FaShareAlt,
  FaFacebookF,
  FaTwitter,
  FaLink,
  FaInstagram,
  FaCheck,
} from "react-icons/fa";

export default function ShareArticle() {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <section className="flex items-center justify-between border-t-2 border-b-2 border-dashed border-gray-300 dark:border-gray-800 py-4 px-3">

        {/* LEFT */}
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 uppercase tracking-wide">
          <FaShareAlt className="text-xl sm:text-2xl" />
          <span className="text-xs lg:text-md">Share this article</span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 group">

          {/* FACEBOOK */}
          <IconWrap label="Facebook">
            <IconBox className="bg-blue-600 hover:shadow-[0_0_12px_rgba(37,99,235,0.7)]">
              <FaFacebookF />
            </IconBox>
          </IconWrap>

          {/* X */}
          <IconWrap label="X">
            <IconBox className="bg-sky-500 hover:shadow-[0_0_12px_rgba(14,165,233,0.7)]">
              <FaTwitter />
            </IconBox>
          </IconWrap>

          {/* COPY LINK */}
          <button
            aria-label="Copy link"
            onClick={copyLink}
            className="relative group/icon"
          >
            <IconWrap label="Copy link">
              <IconBox className="bg-[#efab68] hover:bg-yellow-400 hover:shadow-[0_0_12px_rgba(250,204,21,0.9)]">
                {copied ? <FaCheck /> : <FaLink />}
              </IconBox>
            </IconWrap>
          </button>

          {/* INSTAGRAM */}
          <IconWrap label="Instagram">
            <IconBox className="bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 hover:shadow-[0_0_12px_rgba(236,72,153,0.7)]">
              <FaInstagram />
            </IconBox>
          </IconWrap>

        </div>
      </section>

      {/* 🔔 TOAST */}
      {copied && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 text-sm uppercase tracking-wide rounded-md shadow-lg bg-white text-green-600 border border-green-500 transition-all duration-300 ease-out">
          <FaLink className="text-base" />
          <span>Link copied</span>
        </div>
      )}
    </>
  );
}

/* ICON BOX */
function IconBox({ children, className }) {
  return (
    <div
      className={`
        flex items-center justify-center w-9 h-9
        text-white
        transition-all duration-300
        group-hover:opacity-40 group-hover:group-hover/icon:opacity-100
        ${className}
      `}
    >
      {children}
    </div>
  );
}

/* ICON WRAP (TOOLTIP WITH POINTER) */
function IconWrap({ label, children }) {
  return (
    <div className="relative group/icon">
      {children}

      {/* Tooltip */}
      <div
        className="
          pointer-events-none
          absolute bottom-full left-1/2 -translate-x-1/2 mb-3
          opacity-0 group-hover/icon:opacity-100
          transition-opacity duration-200
          z-50
        "
      >
        <div
          className="
            relative
            bg-black text-white
            text-[10px] uppercase tracking-wide
            px-2 py-1
            whitespace-nowrap
          "
        >
          {label}

          {/* 🔻 POINTER */}
          <span
            className="
              absolute left-1/2 -translate-x-1/2 top-full
              w-0 h-0
              border-l-4 border-r-4 border-t-4
              border-l-transparent
              border-r-transparent
              border-t-black
            "
          />
        </div>
      </div>
    </div>
  );
}
