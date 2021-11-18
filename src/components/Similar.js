import React from "react";
import { Link } from "react-router-dom";

const Similar = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="relative max-h-60 w-auto group rounded-lg overflow-hidden shadow-lg">
        <div className="absolute w-full h-full delay-100 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 tr">
          <h1 className="select-none text-center text-lg text-black montagu font-bold 2xl:mt-10">
            {movie.title}({movie.date.substring(0, 4)})
          </h1>
          <h1 className="select-none text-center mx-1 text-sm text-gray-900 shippori font-bold">
            {movie.overview.split(/\s+/).slice(0, 12).join(" ") + "..."}
          </h1>
        </div>
        <img
          src={movie.poster}
          className="object-cover w-full h-full group-hover:opacity-20 tr"
          alt={movie.title}
        />
      </div>
    </Link>
  );
};

export default Similar;
