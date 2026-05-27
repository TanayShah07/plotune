import axiosInstance from "./axiosInstance";

export const searchMovies = async (query) => {
  return axiosInstance.post("/movies/search", {
    query,
    type: "movie",
  });
};