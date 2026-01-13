"use client";

export default function CategoryTag({ text }) {
  return (
    <span
      className="absolute bottom-0 left-0 bg-blue-500 text-white text-[10px] font-semibold
                 px-1 py-0.5 cursor-pointer transition-shadow duration-200"
      style={{ boxShadow: "0 0 0px rgba(0, 195, 255, 0)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 0 10px 2px rgba(11, 173, 205, 1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          "0 0 0px rgba(0, 195, 255, 0)";
      }}
    >
      {text}
    </span>
  );
}
