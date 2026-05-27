import axios from "./axiosInstance";

export const searchRecommendations = async (query, type) => {
  const response = await axios.post("/movies/search", {
    query,
    type,
  });

  return response.data;
};