import {
  FETCH_SINGLE_REQUEST,
  FETCH_SINGLE_FAILURE,
  FETCH_SINGLE_SUCCESS,
  SET_SINGLE_ID,
  EMPTY_SINGLE,
  FETCH_SIMILAR_FAILURE,
  FETCH_SIMILAR_SUCCESS,
  FETCH_CREDITS_FAILURE,
  FETCH_CREDITS_SUCCESS,
  FETCH_VIDEO_FAILURE,
  FETCH_VIDEO_SUCCESS,
} from "./singleTypes";

const initialState = {
  singleId: "",
  loading: false,
  singleMovie: [],
  error: "",
  similarError: "",
  similarMovies: [],
  credits: [],
  creditsError: "",
  video: [],
  videoError: "",
};

export const singleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_ID: {
      return {
        ...state,
        singleId: action.payload,
      };
    }
    case EMPTY_SINGLE: {
      return {
        ...state,
        singleMovie: [],
        similarMovies: [],
        credits: [],
        video: [],
        error: "",
      };
    }
    case FETCH_SINGLE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_SIMILAR_FAILURE: {
      return {
        ...state,
        similarError: action.payload,
      };
    }
    case FETCH_SIMILAR_SUCCESS: {
      return {
        ...state,
        similarMovies: action.payload,
      };
    }
    case FETCH_SINGLE_SUCCESS: {
      return {
        ...state,
        singleMovie: action.payload,
        loading: false,
      };
    }
    case FETCH_SINGLE_FAILURE: {
      return {
        error: action.payload,
        singleMovie: [],
        loading: false,
      };
    }
    case FETCH_CREDITS_SUCCESS: {
      return {
        ...state,
        credits: action.payload,
      };
    }
    case FETCH_CREDITS_FAILURE: {
      return {
        ...state,
        creditsError: action.payload,
      };
    }
    case FETCH_VIDEO_SUCCESS: {
      return {
        ...state,
        video: action.payload,
      };
    }
    case FETCH_VIDEO_FAILURE: {
      return {
        ...state,
        videoError: action.payload,
      };
    }
    default:
      return state;
  }
};
