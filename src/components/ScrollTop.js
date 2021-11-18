import React, { useState } from "react";

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <button
      className={`transform shadow-2xl ${
        showScroll ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } group fixed bottom-2 right-2 md:bottom-4 md:right-4 lg:bottom-6 lg:right-6 xl:bottom-10 xl:right-10 bg-gray-900 hover:bg-red-600 p-3 rounded-full tr z-10`}
      onClick={scrollTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white group-hover:animate-pulse"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
};

export default ScrollTop;
