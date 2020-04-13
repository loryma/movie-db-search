import * as actionTypes from "./searchActionTypes";
import * as api from "api";

export const SET_QUERY = (query) => ({
  type: actionTypes.SET_QUERY,
  payload: { query },
});

export const startFetchingMovies = () => ({
  type: actionTypes.START_FETCHING_MOVIES,
});

export const successFetchingMovies = (movies) => ({
  type: actionTypes.SUCCESS_FETCHING_MOVIES,
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
      dispatch(successFetchingMovies(data.results));
    } catch (error) {
      dispatch(failFetchingMovies(error));
    }
  };
}
