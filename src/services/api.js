import axios from "axios";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";
const AUTH_HEADER = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTg3NGU3NDlkZmFjNzFjZDE3ZjAyN2YxODQ5Y2JlMyIsIm5iZiI6MTcyNzcyMTM1OC40MTEwNiwic3ViIjoiNjZmYTlkNGIzOTEwMTNlZmFiMTMzM2Y0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.mA1oTBapusnad6jefRvRZf7bao939kKOICl3Ptzrdgg`,
  },
};

export const fetchTrendingMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  try {
    const response = await axios.get(url, AUTH_HEADER);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

export const fetchMovies = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  try {
    const response = await axios.get(url, AUTH_HEADER);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  try {
    const response = await axios.get(url, AUTH_HEADER);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const fetchMovieCast = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  try {
    const response = await axios.get(url, AUTH_HEADER);
    return response.data.cast;
  } catch (error) {
    console.error("Error fetching movie cast:", error);
    throw error;
  }
};

export const fetchMovieReviews = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
  try {
    const response = await axios.get(url, AUTH_HEADER);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  try {
    const response = await axios.get(url, AUTH_HEADER);
    return response.data;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};


export const getMovieImageUrl = (path) => `${IMAGE_BASE_URL}${path}`;
