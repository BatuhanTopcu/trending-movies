import React from "react";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import MovieCard from "./components/MovieCard";
import Slider from "./components/Slider";
import Loading from "./components/Loading";
import ScrollTop from "./components/ScrollTop";
import { connect } from "react-redux";
import { fetchDayMovies } from "./app/day/dayActions";
import { fetchWeekMovies } from "./app/week/weekActions";

function App({
  fetchTrendingMoviesDay,
  trendingMoviesDay,
  fetchTrendingMoviesWeek,
  trendingMoviesWeek,
}) {
  const [slideImages, setSlideImages] = useState([]);

  useEffect(() => {
    fetchTrendingMoviesDay();
    fetchTrendingMoviesWeek();
  }, []);

  useEffect(() => {
    setSlideImages(
      trendingMoviesDay.dayMovies.slice(0, 5).map((movie) => ({
        backdrop: movie.backdrop,
        title: movie.title,
        id: movie.id,
      }))
    );
  }, [trendingMoviesDay]);

  if (trendingMoviesWeek.loading || trendingMoviesDay.loading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  return (
    <Layout>
      <ScrollTop />
      <div className="">
        <div className="px-4 2xl:px-60 py-4 flex flex-col gap-4">
          <div className="">
            <Slider slideImages={slideImages} />
          </div>
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
            MOST POPULAR
          </h1>
          <div className="moviegrid">
            {trendingMoviesDay.dayMovies.map((movie, index) => (
              <MovieCard
                index={index}
                key={movie.id}
                title={movie.title}
                likes={movie.vote}
                image={movie.poster}
                date={movie.date}
                overview={movie.overview}
                id={movie.id}
              />
            ))}
          </div>
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            TRENDING THIS WEEK
          </h1>
          <div className="moviegrid">
            {trendingMoviesWeek.weekMovies.map((movie, index) => (
              <MovieCard
                index={index}
                key={movie.id}
                title={movie.title}
                likes={movie.vote}
                image={movie.poster}
                date={movie.date}
                overview={movie.overview}
                id={movie.id}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    trendingMoviesDay: state.day,
    trendingMoviesWeek: state.week,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrendingMoviesDay: () => dispatch(fetchDayMovies()),
    fetchTrendingMoviesWeek: () => dispatch(fetchWeekMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
