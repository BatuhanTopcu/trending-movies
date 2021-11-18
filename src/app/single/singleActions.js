import axios from "axios";

import {
  FETCH_SINGLE_REQUEST,
  FETCH_SINGLE_FAILURE,
  FETCH_SINGLE_SUCCESS,
  SET_SINGLE_ID,
  EMPTY_SINGLE,
  FETCH_SIMILAR_FAILURE,
  FETCH_SIMILAR_SUCCESS,
  FETCH_CREDITS_SUCCESS,
  FETCH_CREDITS_FAILURE,
  FETCH_VIDEO_SUCCESS,
  FETCH_VIDEO_FAILURE,
} from "./singleTypes";

export const setSingleId = (id) => {
  return {
    type: SET_SINGLE_ID,
    payload: id,
  };
};

export const fetchSingleRequest = () => {
  return {
    type: FETCH_SINGLE_REQUEST,
  };
};

export const emptySingle = () => {
  return {
    type: EMPTY_SINGLE,
  };
};

export const fetchSingleSuccess = (movie) => {
  return {
    type: FETCH_SINGLE_SUCCESS,
    payload: movie,
  };
};

export const fetchSingleFailure = (error) => {
  return {
    type: FETCH_SINGLE_FAILURE,
    payload: error,
  };
};

export const fetchSimilarSuccess = (movies) => {
  return {
    type: FETCH_SIMILAR_SUCCESS,
    payload: movies,
  };
};

export const fetchSimilarFailure = (error) => {
  return {
    type: FETCH_SIMILAR_FAILURE,
    payload: error,
  };
};

export const fetchCreditsSuccess = (credits) => {
  return {
    type: FETCH_CREDITS_SUCCESS,
    payload: credits,
  };
};

export const fetchCreditsFailure = (error) => {
  return {
    type: FETCH_CREDITS_FAILURE,
    payload: error,
  };
};

export const fetchVideoSuccess = (video) => {
  return {
    type: FETCH_VIDEO_SUCCESS,
    payload: video,
  };
};

export const fetchVideoFailure = (error) => {
  return {
    type: FETCH_VIDEO_FAILURE,
    payload: error,
  };
};

export const fetchSingleMovie = () => async (dispatch, getState) => {
  dispatch(fetchSingleRequest());
  await axios
    .get("https://api.themoviedb.org/3/movie/" + getState().single.singleId, {
      params: {
        api_key: "d4f8b9b9e09e960aa569095fe6080358",
      },
    })
    .then(function (response) {
      const result = {
        title: response.data.title,
        overview: response.data.overview,
        backdrop:
          "https://image.tmdb.org/t/p/original" + response.data.backdrop_path,
        poster: "https://image.tmdb.org/t/p/w500" + response.data.poster_path,
        vote: response.data.vote_average,
        date: response.data.release_date,
        genres: response.data.genres,
        video: response.data.video,
        tagline: response.data.tagline,
        producer: response.data.production_companies,
      };
      dispatch(fetchSingleSuccess(result));
    })
    .catch(function (error) {
      const errorMsg = error.message;
      dispatch(fetchSingleFailure(errorMsg));
    });
};

export const fetchSimilarMovies = () => async (dispatch, getState) => {
  await axios
    .get(
      "https://api.themoviedb.org/3/movie/" +
        getState().single.singleId +
        "/similar",
      {
        params: {
          api_key: "d4f8b9b9e09e960aa569095fe6080358",
        },
      }
    )
    .then(function (response) {
      const results = response.data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        vote: movie.vote_average,
        poster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
        date: movie.release_date.substring(0, 4),
        overview: movie.overview,
      }));
      dispatch(fetchSimilarSuccess(results));
    })
    .catch(function (error) {
      const errorMsg = error.message;
      dispatch(fetchSimilarFailure(errorMsg));
    });
};

export const fetchCredits = () => async (dispatch, getState) => {
  await axios
    .get(
      "https://api.themoviedb.org/3/movie/" +
        getState().single.singleId +
        "/credits",
      {
        params: {
          api_key: "d4f8b9b9e09e960aa569095fe6080358",
        },
      }
    )
    .then(function (response) {
      const results = response.data.cast.map((actor) => ({
        id: actor.id,
        name: actor.name,
        character: actor.character,
        profile: "https://image.tmdb.org/t/p/w500" + actor.profile_path,
      }));
      dispatch(fetchCreditsSuccess(results));
    })
    .catch(function (error) {
      const errorMsg = error.message;
      dispatch(fetchCreditsFailure(errorMsg));
    });
};

export const fetchVideos = () => async (dispatch, getState) => {
  await axios
    .get(
      "https://api.themoviedb.org/3/movie/" +
        getState().single.singleId +
        "/videos",
      {
        params: {
          api_key: "d4f8b9b9e09e960aa569095fe6080358",
        },
      }
    )
    .then(function (response) {
      const results = response.data.results.reduce(function (filtered, video) {
        if (video.site === "YouTube") {
          filtered.push({
            id: video.id,
            name: video.name,
            key: video.key,
            type: video.type,
          });
        }
        return filtered;
      }, []);
      dispatch(fetchVideoSuccess(results));
    })
    .catch(function (error) {
      const errorMsg = error.message;
      dispatch(fetchVideoFailure(errorMsg));
    });
};
