import { Link } from "react-router-dom";

const MovieCard = ({ title, likes, image, date, overview, index, id }) => {
  return (
    <Link to={`/movies/${id}`}>
      <div className="bg-white hover:bg-black shadow-xl hover:shadow-none cursor-pointer w-60 mh rounded-3xl flex flex-col items-center justify-center tr group">
        <div className="relative mt-2 mx-2">
          <div className="w-56 rounded-2xl overflow-hidden">
            {image !== "https://image.tmdb.org/t/p/w500null" && (
              <img
                src={image}
                className="object-cover w-full h-full"
                alt={title}
              />
            )}
          </div>
          <div
            className={`absolute bottom-0 left-0 scale-75 transform ${
              image !== "https://image.tmdb.org/t/p/w500null"
                ? "-mb-4 ml-3"
                : "-mb-6 ml-3"
            } flex flex-row gap-1`}
          >
            <div className="px-3 center text-blue-300 minicard">
              {index + 1}
            </div>
            <div className="px-2 text-white center minicard">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {date}
            </div>
            {likes !== 0 && (
              <div
                className={`px-2 center minicard ${
                  parseInt(likes) > 5 ? "text-green-500" : "text-red-500"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                {likes}
              </div>
            )}
          </div>
        </div>
        <div className="pt-6 pb-3 w-full px-4 flex-grow h-full">
          <h1
            className={` ${
              title.length > 15 ? "text-md" : "text-xl"
            }   montagu font-semibold leading-none tracking-wider text-black text-center group-hover:text-white tr`}
          >
            {title}
          </h1>
          <h1 className="font-medium leading-none shippori text-gray-700 mt-1 group-hover:text-gray-400 tr">
            {overview.split(/\s+/).slice(0, 12).join(" ") + "..."}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
