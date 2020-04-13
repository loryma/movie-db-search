import * as actionTypes from "./actionTypes";
import * as api from "api";

export const SET_QUERY = (query) => ({
  type: actionTypes.SET_QUERY,
  payload: { query },
});

export const startFetchingMovies = () => ({
  type: actionTypes.startFetchingMovies,
});

export const succesFetchingMovies = (movies) => ({
  type: actionTypes.successFetchingMovies,
  payload: { movies },
});

export const failFetchingMovies = (error) => ({
  type: actionTypes.FAIL_FETCHING_MOVIES,
  payload: { error },
});

export function fetchMovies(query, page = 1) {
  return async (dispatch) => {
    try {
      dispatch(startFetchingMovies());
      const { data } = await api.Movies.search(query, page);
    } catch (e) {
      dispatch(failFetchingMovies(error));
    }
  };
}
