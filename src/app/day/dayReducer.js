import {
  FETCH_DAY_REQUEST,
  FETCH_DAY_FAILURE,
  FETCH_DAY_SUCCESS,
} from "./dayTypes";

const initialState = {
  loading: false,
  dayMovies: [],
  error: "",
};

export const dayReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DAY_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_DAY_SUCCESS: {
      return {
        ...state,
        dayMovies: action.payload,
        loading: false,
      };
    }
    case FETCH_DAY_FAILURE: {
      return {
        error: action.payload,
        dayMovies: [],
        loading: false,
      };
    }
    default:
      return state;
  }
};
