import axios from 'axios';

const API_KEY = '03528b4ebd79ba28525f11768a074497';
const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzUyOGI0ZWJkNzliYTI4NTI1ZjExNzY4YTA3NDQ5NyIsInN1YiI6IjY1ZjgxYWRlODFkYTM5MDE4NjY1MTY2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e4p5fLF2YQ1wSXoD53kpQPX9LbzLI0WSXoUb7Kc1NnU';
const BASE_URL = 'https://api.themoviedb.org/3/';
const options = {
  headers: {
    Authorization: API_TOKEN,
  },
};
const defaultParams = {
  api_key: API_KEY,
};
const moviesApi = axios.create({
  baseURL: BASE_URL,
  params: defaultParams,
});

export const getMovies = async () => {
  const response = await moviesApi.get('trending/movie/week', options);
  return response.data;
};

export const getMovieById = async (movieId) => {
  const response = await moviesApi.get(`movie/${movieId}`, options);
  return response.data;
};

export const getMovieCast = async (movieId) => {
  const response = await moviesApi.get(`/movie/${movieId}/credits`, options);
  return response.data;
};

export const getMovieReviews = async (movieId) => {
  const response = await moviesApi.get(`/movie/${movieId}/reviews`, options);
  return response.data;
};

export const getMovieSearch = async (query) => {
  const response = await moviesApi.get(`/search/movie?query=${query}`, options);
  return response.data;
};