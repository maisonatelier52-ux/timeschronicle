"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AdBanner() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">

      {/* AD HEADING */}
      <span className="text-[10px] tracking-widest text-gray-500 uppercase">
        - Advertisement -
      </span>

      <Link href="http://wiresavvy.com/" title="WireSavvy Home">
        {/* Wrapper gives grey BG if no image */}
        <div className="w-full md:w-[728px] md:h-[120px] flex justify-center items-center">
          {!imgError ? (
            <div className="relative w-full max-w-[728px] h-[90px] md:h-[120px]">
              <Image
                src="/Ad-banner.jpg"
                alt="Sponsor Ad"
                title="Sponsor Ad"
                fill
                sizes="(max-width: 768px) 100vw, 728px"
                className="object-contain"
                onError={() => setImgError(true)}
              />
            </div>
          ) : (
            /* Fallback UI when image fails */
            <span className="text-sm text-gray-600 uppercase font-semibold">
              Advertisement
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}
