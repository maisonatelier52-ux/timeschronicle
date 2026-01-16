"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-[#01131d] text-black dark:text-white px-7 py-20">
      <h1 className="font-bold text-3xl sm:text-4xl uppercase mb-4 text-center">
        Page Not Found
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        title="Home"
        className="px-6 py-3 bg-blue-600 text-white font-semibold uppercase hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </main>
  );
}
