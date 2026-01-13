"use client";

export default function CategoryTag1({ text }) {
  return (
    <span
      className={`bg-blue-500 text-white text-[10px] font-semibold px-1
                  cursor-pointer inline-block transition-shadow duration-200`}
      style={{ boxShadow: "0 0 0px rgba(0, 195, 255, 0)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 0 10px 2px rgba(11, 140, 205, 1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 0 0px rgba(0, 195, 255, 0)";
      }}
    >
      {text}
    </span>
  );
}
