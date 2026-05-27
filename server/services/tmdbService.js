import axios from "axios";

export const getMovieMetadata = async (title) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          query: title,
        },
      }
    );

    const movie = response.data.results[0];

    if (!movie) return null;

    return {
      poster: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null,

      backdrop: movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : null,

      rating: movie.vote_average,

      release_date: movie.release_date,

      overview: movie.overview,
    };
  } catch (err) {
    console.log("TMDB ERROR:", err.message);

    return null;
  }
};