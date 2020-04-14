import { combineReducers } from "redux";
import search from "./search";

export { fetchMovies, setQuery } from "./search";

export default combineReducers({
  search,
});
