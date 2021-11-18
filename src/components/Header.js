import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState("");

  const handleChange = (event) => {
    setSearchKey(event.target.value);
  };

  return (
    <header className="text-gray-600 bg-white px-4 lg:px-32 xl:px-40 2xl:px-60 mb-8 shadow-md">
      <div className="container w-full flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex flex-col flex-wrap lg:flex-row justify-between flex-grow items-center">
          <Link to={`/`}>
            <h1 className="flex items-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 md:h-10 md:w-10"
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
              <span className="ml-1 text-xl md:text-3xl shippori font-bold">
                TrendingMovies
              </span>
            </h1>
          </Link>
          <nav className="flex flex-wrap items-center text-base justify-center gap-4 mr-4">
            <Link to={`/`}>
              <h1 className="shippori rounded-xl text-lg p-2 text-black hover:bg-blue-500 hover:text-white tr">
                Home
              </h1>
            </Link>
            <h1 className="shippori text-xl select-none text-gray-400">|</h1>
            <Link to={`/about`}>
              <h1 className="shippori rounded-xl text-lg p-2 text-black hover:bg-blue-500 hover:text-white tr">
                About
              </h1>
            </Link>
          </nav>
        </div>
        <div className="flex rounded-lg focus-within:ring-4 focus-within:ring-gray-600 tr">
          <input
            type="text"
            name="search"
            className="bg-gray-200 rounded-l-lg px-1 sm:px-2 shippori text-sm sm:text-lg py-1 outline-none"
            placeholder="Search movies"
            value={searchKey}
            autoComplete="off"
            onChange={handleChange}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                navigate("/search/" + searchKey, { replace: true });
              }
            }}
          />
          <button
            onClick={() => navigate("/search/" + searchKey, { replace: true })}
            className="inline-flex items-center bg-gray-100 border-0 px-1 sm:px-3 py-1 focus:outline-none hover:bg-gray-200 rounded-r-lg text-sm sm:text-lg shippori tr"
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
