import {
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_SUCCESS,
  SET_SEARCH_TERM,
  EMPTY_SEARCH,
} from "./searchTypes";

const initialState = {
  searchTerm: "",
  loading: false,
  searchResults: [],
  error: "",
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM: {
      return {
        ...state,
        searchTerm: action.payload,
      };
    }
    case EMPTY_SEARCH: {
      return {
        ...state,
        searchResults: [],
        loading: false,
      };
    }
    case FETCH_SEARCH_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_SEARCH_FAILURE: {
      return {
        error: action.payload,
        singleMovie: [],
        loading: false,
      };
    }
    case FETCH_SEARCH_SUCCESS: {
      return {
        ...state,
        searchResults: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};
