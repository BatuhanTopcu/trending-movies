import {
  FETCH_WEEK_REQUEST,
  FETCH_WEEK_FAILURE,
  FETCH_WEEK_SUCCESS,
} from "./weekTypes";

const initialState = {
  loading: false,
  weekMovies: [],
  error: "",
};

export const weekReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEEK_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_WEEK_SUCCESS: {
      return {
        ...state,
        weekMovies: action.payload,
        loading: false,
      };
    }
    case FETCH_WEEK_FAILURE: {
      return {
        error: action.payload,
        weekMovies: [],
        loading: false,
      };
    }
    default:
      return state;
  }
};
