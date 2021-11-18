import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white px-4 2xl:px-60 p-4 mt-auto flex flex-col md:flex-row shadow-lg">
      <Link to={`/`}>
        <h1 className="flex items-center text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
            />
          </svg>
          <span className="ml-1 text2xl shippori font-bold">
            TrendingMovies
          </span>
        </h1>
      </Link>
      <div className="center ml-auto ">
        <h1 className="shippori text-sm md:text-base">
          Coded by
          <a
            href="https://github.com/BatuhanTopcu"
            className="mx-1 font-semibold hover:text-blue-500 tr"
          >
            Batuhan Topcu
          </a>
          for
          <a
            href="https://www.appcent.mobi/"
            className="mx-1 font-semibold hover:text-red-500 tr"
          >
            Appcent
          </a>
          project
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
