import React from "react";
import { useNavigate } from "react-router-dom";

const BackHome = () => {
  const navigate = useNavigate();

  return (
    <button
      className={`transform shadow-2xl group fixed bottom-2 right-2 md:bottom-4 md:right-4 lg:bottom-6 lg:right-6 xl:bottom-10 xl:right-10 bg-gray-900 hover:bg-red-600 p-3 rounded-full tr z-10`}
      onClick={() => navigate(-1)}
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
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

export default BackHome;
