import axios from "axios";

import {
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_SUCCESS,
  SET_SEARCH_TERM,
  EMPTY_SEARCH,
} from "./searchTypes";

export const setSearchTerm = (term) => {
  return {
    type: SET_SEARCH_TERM,
    payload: term,
  };
};

export const fetchSearchRequest = () => {
  return {
    type: FETCH_SEARCH_REQUEST,
  };
};

export const emptySearch = () => {
  return {
    type: EMPTY_SEARCH,
  };
};

export const fetchSearchSuccess = (movies) => {
  return {
    type: FETCH_SEARCH_SUCCESS,
    payload: movies,
  };
};

export const fetchSearchFailure = (error) => {
  return {
    type: FETCH_SEARCH_FAILURE,
    payload: error,
  };
};

export const fetchSearchMovies = () => async (dispatch, getState) => {
  dispatch(fetchSearchRequest());
  await axios
    .get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d4f8b9b9e09e960aa569095fe6080358",
        query: getState().search.searchTerm,
      },
    })
    .then(function (response) {
      if (response.data.results.length > 0) {
        const results = response.data.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          vote: movie.vote_average,
          poster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
          date: movie.release_date.substring(0, 4),
          overview: movie.overview,
        }));
        dispatch(fetchSearchSuccess(results));
      } else {
        dispatch(emptySearch());
      }
    })
    .catch(function (error) {
      const errorMsg = error.message;
      dispatch(fetchSearchFailure(errorMsg));
    });
};
