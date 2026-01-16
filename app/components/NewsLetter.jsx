"use client";

import { useState } from "react";

export default function NewsletterBox() {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  return (
    <section
      className="
        relative bg-cover bg-center
        px-4 sm:px-6 md:px-8
        py-10 sm:py-12 md:py-16
      "
      style={{ backgroundImage: "url(/Newsletterimg.jpg)" }}
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="bg-black/95 text-white p-4 sm:p-6 md:p-10">
          <div
            className="
              flex flex-col md:flex-row
              items-center md:items-center
              justify-between
              gap-6 md:gap-8
              border border-dashed border-white
              p-4 sm:p-6
            "
          >

            {/* LEFT CONTENT */}
            <div className="text-center md:text-left max-w-md">
              <h3 className="flex items-center justify-center md:justify-start gap-2 font-bold font-semibold text-lg sm:text-xl md:text-2xl">
                <span>📌</span>
                Sign Up for Daily Newsletter
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 mt-2">
                Subscribe to our newsletter to get our newest articles instantly!
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!agree) return alert("Please agree to the terms.");
                console.log("Email submitted:", email);
              }}
              className="w-full md:w-auto"
            >
              <div className="flex flex-col gap-3 w-full">

                {/* INPUT + BUTTON */}
                <div className="flex flex-col sm:flex-row gap-2 w-full md:w-[420px]">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="
                      w-full px-4 py-3 text-sm
                      bg-[#1e1e1e] text-white
                      placeholder-gray-400
                      outline-none
                      border border-gray-700
                      focus:border-gray-400
                    "
                  />

                  <button
                    type="submit"
                    className="
                      bg-white text-black
                      text-sm font-semibold
                      px-6 py-3
                      hover:bg-gray-200 transition
                      whitespace-nowrap
                    "
                  >
                    Sign Up
                  </button>
                </div>

                {/* TERMS */}
                <label className="flex items-start gap-2 text-[11px] sm:text-xs text-gray-400">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={() => setAgree(!agree)}
                    className="mt-0.5"
                    required
                  />
                  I have read and agree to the terms & conditions
                </label>

              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
