import { Link } from "react-router-dom";

const SearchCard = ({ title, image, date, backdrop, index, id }) => {
  return (
    <Link to={`/movies/${id}`}>
      <div className="relative bg-white hover:bg-black shadow-xl hover:shadow-none cursor-pointer w-full h-20 overflow-hidden rounded-xl flex flex-col items-center justify-center tr group">
        <div className="montagu font-bold text-lg text-black z-10 group-hover:text-white tr px-1 text-center">
          {title + " - " + date}
        </div>
        <div className="w-full overflow-hidden">
          {backdrop !== "https://image.tmdb.org/t/p/w500null" && (
            <img
              src={backdrop}
              className="absolute opacity-40 top-0 left-0 object-cover w-full h-full"
              alt={title}
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
