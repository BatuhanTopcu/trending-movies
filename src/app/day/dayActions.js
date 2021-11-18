import axios from "axios";

import {
  FETCH_DAY_REQUEST,
  FETCH_DAY_FAILURE,
  FETCH_DAY_SUCCESS,
} from "./dayTypes";

export const fetchDayRequest = () => {
  return {
    type: FETCH_DAY_REQUEST,
  };
};

export const fetchDaySuccess = (movies) => {
  return {
    type: FETCH_DAY_SUCCESS,
    payload: movies,
  };
};

export const fetchDayFailure = (error) => {
  return {
    type: FETCH_DAY_FAILURE,
    payload: error,
  };
};

export const fetchDayMovies = () => async (dispatch, getState) => {
  dispatch(fetchDayRequest());
  await axios
    .get("https://api.themoviedb.org/3/movie/popular", {
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
      dispatch(fetchDaySuccess(results));
    })
    .catch(function (error) {
      const errorMsg = error.message;
      dispatch(fetchDayFailure(errorMsg));
    });
};
