import React from "react";

const Loading = () => {
  return (
    <div className="center w-full h-full opacity-40">
      <div className="h-min w-min bg-gradient-to-tl from-gray-700 via-gray-900 to-black rounded-full animate-pulse relative select-none">
        <h1 className="shippori font-bold text-white text-3xl animate-bounce absolute top-20 mt-2 left-0 right-0 text-center">
          Loading
        </h1>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="circle-notch"
          className="h-44 w-44 m-4 text-white animate-spin"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M512 256c0 141.2-114.8 256-256 256s-256-114.8-256-256c0-112.4 75.19-213.4 182.9-245.4c16.94-5.047 34.75 4.641 39.78 21.55c5.062 16.94-4.594 34.75-21.53 39.8C120.4 95.97 64 171.7 64 256c0 105.9 86.13 192 192 192s192-86.13 192-192c0-84.34-56.38-160-137.1-184c-16.94-5.047-26.59-22.86-21.53-39.8c5.031-16.91 22.84-26.56 39.78-21.55C436.8 42.64 512 143.6 512 256z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
