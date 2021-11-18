import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="center w-full h-full flex-col">
      <h1 className="text-9xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
        404
      </h1>
      <h1 className="text-7xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
        PAGE NOT FOUND
      </h1>

      <button
        className="mt-8 shadow-2xl flex bg-blue-600 hover:bg-indigo-800 p-3 rounded-full tr"
        onClick={() => navigate(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-40 w-40 text-white"
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
    </div>
  );
};

export default NotFound;
