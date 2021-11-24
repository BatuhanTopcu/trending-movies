import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SearchCard from "./SearchCard";

const Header = () => {
  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(show);
  }, [show]);

  useEffect(() => {
    if (searchKey.length === 0) {
      setSearchResults([]);
      return null;
    }
    const delayDebounceFn = setTimeout(async () => {
      await axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "d4f8b9b9e09e960aa569095fe6080358",
            query: searchKey,
          },
        })
        .then(function (response) {
          if (response.data.results.length > 0) {
            const results = response.data.results.map((movie) => ({
              id: movie.id,
              title: movie.title,
              poster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
              backdrop: "https://image.tmdb.org/t/p/w500" + movie.backdrop_path,
              date: movie.release_date.substring(0, 4),
            }));
            setSearchResults(results.slice(0, 5));
          } else {
            setSearchResults([]);
          }
        })
        .catch(function (error) {
          setSearchResults([]);
        });
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchKey]);

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
        <div className="flex rounded-lg focus-within:ring-4 focus-within:ring-gray-600 tr w-min relative">
          <input
            type="text"
            name="search"
            className="bg-gray-200 rounded-l-lg px-1 sm:px-2 shippori text-sm sm:text-lg py-1 outline-none"
            placeholder="Search movies"
            autoComplete="off"
            value={searchKey}
            onFocus={() => setShow(true)}
            onBlur={() =>
              setTimeout(async () => {
                setShow(false);
              }, 100)
            }
            onChange={handleChange}
            onKeyPress={(e) =>
              searchKey.length > 0 && e.key === "Enter"
                ? navigate("/search/" + searchKey, { replace: true })
                : null
            }
          />
          <button
            onClick={() =>
              searchKey.length > 0
                ? navigate("/search/" + searchKey, { replace: true })
                : null
            }
            className="inline-flex items-center bg-gray-100 border-0 px-1 sm:px-3 py-1 focus:outline-none hover:bg-gray-200 rounded-r-lg text-sm sm:text-lg shippori tr"
          >
            Search
          </button>
          {searchResults.length > 0 && show && (
            <div className="w-full h-min flex flex-col gap-2 bg-gray-200 shadow-xl absolute top-0 mt-8 md:mt-12 left-0 z-30 rounded-lg p-2">
              {searchResults.map((movie, index) => (
                <SearchCard
                  title={movie.title}
                  id={movie.id}
                  backdrop={movie.backdrop}
                  date={movie.date}
                  key={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
