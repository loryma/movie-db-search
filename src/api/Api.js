import axios from "./axiosInstance";

export const Movies = {
  search(q, page = 1) {
    return axios.get(`/search/movie?query=${q}&page=${page}`);
  },
  get(movie_id) {
    return axios.get(`/movie/${movie_id}`);
  },
};
