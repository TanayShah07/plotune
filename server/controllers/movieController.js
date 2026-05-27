import axios from "axios";
import { getMovieMetadata } from "../services/tmdbService.js";

export const searchMovies = async (req, res) => {
  try {
    const { query, type } = req.body;

    const response = await axios.post(
      "http://127.0.0.1:8000/recommend",
      {
        query,
        type,
      }
    );

    const enrichedResults = await Promise.all(
      response.data.results.map(async (movie) => {
        const metadata = await getMovieMetadata(movie.title);

        return {
          ...movie,
          ...metadata,
        };
      })
    );

    res.json({
      results: enrichedResults,
    });

  } catch (err) {
    console.log(err.message);

    res.status(500).json({
      message: "Recommendation failed",
    });
  }
};