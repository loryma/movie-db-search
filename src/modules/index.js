import { combineReducers } from "redux";
import search from "./search";

export { fetchMovies } from "./search";

export default combineReducers({
  search,
});
