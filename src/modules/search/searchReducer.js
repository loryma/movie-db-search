import * as actionTypes from "./searchActionTypes";

const initial = { loading: false, error: null, results: null, query: "" };

function searchReducer(state = initial, action) {
  switch (action.type) {
    case actionTypes.START_FETCHING_MOVIES:
      return { ...state, loading: true, error: null };
    case actionTypes.SUCCESS_FETCHING_MOVIES:
      return {
        ...state,
        movies: [...payload.movies],
        loading: false,
        error: null,
      };
    case actionTypes.FAILT_FETCHING_MOVIES:
      return { ...state, loading: false, error: payload.error };
    default:
      return state;
  }
}

export default searchReducer;
