import axios from "axios";

import {
  FETCH_WEEK_REQUEST,
  FETCH_WEEK_FAILURE,
  FETCH_WEEK_SUCCESS,
} from "./weekTypes";

export const fetchWeekRequest = () => {
  return {
    type: FETCH_WEEK_REQUEST,
  };
};

export const fetchWeekSuccess = (movies) => {
  return {
    type: FETCH_WEEK_SUCCESS,
    payload: movies,
  };
};

export const fetchWeekFailure = (error) => {
  return {
    type: FETCH_WEEK_FAILURE,
    payload: error,
  };
};

export const fetchWeekMovies = () => async (dispatch, getState) => {
  dispatch(fetchWeekRequest());
  await axios
    .get("https://api.themoviedb.org/3/trending/movie/week", {
      params: {
        api_key: "d4f8b9b9e09e960aa569095fe6080358",
      },
    })
    .then(function (response) {
      const results = response.data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        vote: movie.vote_average,
        poster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
        date: movie.release_date.substring(0, 4),
        overview: movie.overview,
        backdrop: "https://image.tmdb.org/t/p/original" + movie.backdrop_path,
      }));
      dispatch(fetchWeekSuccess(results));
    })
    .catch(function (error) {
      const errorMsg = error.message;
      dispatch(fetchWeekFailure(errorMsg));
    });
};
