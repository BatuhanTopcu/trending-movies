import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Slider = ({ slideImages }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 5000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const nextSlide = () => {
    setIndex(index + 1 >= slideImages.length ? 0 : index + 1);
  };
  const prevSlide = () => {
    setIndex(index - 1 < 0 ? slideImages.length - 1 : index - 1);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="w-full h-60 rounded-2xl overflow-hidden relative shadow-2xl">
      <svg
        onClick={() => nextSlide()}
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 text-white z-30 absolute right-0 mt-20 cursor-pointer opacity-50 hover:opacity-100 tr"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
      <svg
        onClick={() => prevSlide()}
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 text-white z-30 absolute left-0 mt-20 cursor-pointer opacity-50 hover:opacity-100 tr"
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

      {slideImages.map((slide, i) => (
        <Link to={"movies/" + slide.id} key={i}>
          <div
            key={i}
            className={`${
              index === i ? "opacity-100 z-20" : "opacity-0 z-0"
            } transform transition-all duration-1000 ease-in-out absolute top-0 left-0 w-full h-60`}
          >
            <h1 className="absolute top-0 left-4 text-8xl shippori font-semibold select-none text-white z-20">
              {i + 1}
            </h1>
            <div className="absolute -top-8 -left-8 bg-black w-36 h-36 rounded-full z-10 shadow-2xl"></div>
            <h1
              className={`${
                slide.title.length > 20
                  ? "text-xl"
                  : slide.title.length > 15
                  ? "text-2xl"
                  : slide.title.length > 10
                  ? "text-3xl"
                  : "text-4xl"
              } absolute p-3 -mt-12 bottom-0 right-0 montagu font-semibold select-none bg-gray-200 rounded-tl-xl z-10`}
            >
              {slide.title}
            </h1>
            <img
              src={slide.backdrop}
              className={`w-max h-max absolute top-0 left-0 slide transform`}
              alt={slide.title}
              key={i}
              id={i}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Slider;
