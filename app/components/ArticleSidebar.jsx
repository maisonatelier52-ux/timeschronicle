"use client";

import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function ArticleSidebar() {
  const [agreed, setAgreed] = useState(false);

  return (
    <aside className="hidden lg:block lg:w-[320px]">
      <div className="sticky top-0 h-screen flex flex-col justify-center gap-7">

        {/* FOLLOW US — NO BORDER */}
        <div className="text-center">
          <h3 className="font-bold text-lg uppercase mb-2">
            Follow Us
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Find us on social medias
          </p>

          <div className="flex justify-center gap-4 group">
            <IconBox bg="bg-blue-600" glow="rgba(37,99,235,0.7)">
              <FaFacebookF />
            </IconBox>

            <IconBox bg="bg-sky-500" glow="rgba(14,165,233,0.7)">
              <FaTwitter />
            </IconBox>

            <IconBox
              bg="bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400"
              glow="rgba(236,72,153,0.7)"
            >
              <FaInstagram />
            </IconBox>

            <IconBox bg="bg-blue-700" glow="rgba(29,78,216,0.7)">
              <FaLinkedinIn />
            </IconBox>
          </div>
        </div>

        {/* NEWSLETTER — DASHED BORDER */}
        <div
          className="
            border-2 border-dashed border-gray-300 dark:border-gray-800
            p-6
            text-center
            max-w-[280px]
            mx-auto
          "
        >
          <h3 className="font-bold text-2xl uppercase mb-2">
            Newsletter
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
            Subscribe to our newsletter to get our newest articles instantly!
          </p>

          <input
            type="email"
            placeholder="Your email address"
            className="
              w-full px-3 py-2 mb-4
              border border-gray-300 dark:border-gray-700
              bg-transparent text-sm
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
          />

          {/* CHECKBOX */}
          <label className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400 mb-4 cursor-pointer text-left">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="mt-0.5 accent-blue-600"
            />
            <span>
              I have read and agree to the{" "}
              <span className="underline">terms & conditions</span>
            </span>
          </label>

          {/* SUBSCRIBE BUTTON */}
          <button
            disabled={!agreed}
            className={`
              w-full py-2
              text-sm uppercase tracking-wide
              transition-all duration-300
              ${
                agreed
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-300 text-white cursor-not-allowed"
              }
            `}
          >
            Subscribe
          </button>
        </div>

      </div>
    </aside>
  );
}

/* ICON — SAME HOVER EFFECT AS SHARE ARTICLE */
function IconBox({ children, bg, glow }) {
  return (
    <div
      style={{ "--glow": glow }}
      className={`
        flex items-center justify-center
        w-14 h-14 rounded-full
        text-white
        ${bg}
        transition-all duration-300
        group-hover:opacity-40 hover:!opacity-100
        hover:shadow-[0_0_16px_var(--glow)]
      `}
    >
      <span className="text-2xl">
        {children}
      </span>
    </div>
  );
}