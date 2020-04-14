import axios from "axios";

const URL = "https://api.themoviedb.org/3";

const instance = axios.create({
  baseURL: URL,
  timeout: 5000,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTIxMGFjNzk0NjU1ZmZkYWE0ODIzZjc0ODVkMTI0YSIsInN1YiI6IjVlOTMxZjNlN2E5N2FiMDAxMjBkMmE0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j144dX1_j86vMl2Jgmz-ZY5aGEp4FNqQUCxI3s7WpVE",
  },
});

export default instance;
