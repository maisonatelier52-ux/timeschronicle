// HeaderServer.jsx
import Link from "next/link";
import Image from "next/image";

// Define static categories
const categories = [
  "national",
  "politics",
  "business",
  "technology",
  "health",
  "world"
];

export default function HeaderServer() {

  const mobileDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-300 dark:border-gray-800 bg-white dark:bg-[#01131d]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-7 py-3 uppercase">
        
        {/* LOGO + CATEGORIES */}
        <div className="flex items-center space-x-6">
          <Link href="/" title="Home">
            {/* Light logo */}
            <Image
              src="/logo/Times-Chronicle-Black-Text.png"
              alt="Times Chronicle"
              width={220}
              height={40}
              priority
              className="block dark:hidden"
            />

            {/* Dark logo */}
            <Image
              src="/logo/Times-Chronicle-White-Text.png"
              alt="Times Chronicle"
              width={220}
              height={40}
              className="hidden dark:block"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex space-x-6 text-[12px]">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/category/${cat}`}
                title={cat}
                className="relative font-semibold text-black dark:text-gray-200
                  after:absolute after:bottom-0 after:left-0
                  after:h-[2px] after:w-0
                  after:bg-black dark:after:bg-white
                  after:transition-all after:duration-200
                  hover:after:w-full"
              >
                {cat}
              </Link>
            ))}
          </nav>
        </div>

        {/* ✅ MOBILE DATE */}
        <div className="sm:hidden text-[11px] text-gray-500 dark:text-gray-400">
          {mobileDate.replace(" ", " ")}
        </div>

        {/* DATE */}
        <div className="hidden sm:block text-[11px] text-gray-500 dark:text-gray-400">
          {mobileDate.replace(" ", " ")}
        </div>

        {/* SEARCH ICON PLACEHOLDER (hydrated later) */}
        {/* <div id="header-client-slot" /> */}
      </div>

      {/* MOBILE CATEGORIES */}
      <div className="lg:hidden flex overflow-x-auto border-t border-gray-200 px-7 py-2 space-x-4 uppercase">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/category/${cat}`}
            title={cat}
            className="text-[12px] font-semibold whitespace-nowrap"
          >
            {cat}
          </Link>
        ))}
      </div>
    </header>
  );
}