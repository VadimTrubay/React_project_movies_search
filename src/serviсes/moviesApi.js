import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjE3ZGMxMzZlZGFlNjkwMTFmNTZiM2E0M2I3YjRjMCIsInN1YiI6IjY1NWUxZmNlMjY2Nzc4MDE0ZTk0OGE4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jr2tp7PBlGeGpY0LXLeU6Aq5bMm4NVEy8ImAKNU6t7Q';

export class MovieAPI {
  config = {
    params: {
      query: '',
      page: 1,
    },
  };

  setSearchQuestion(q) {
    this.config.params.query = q;
    this.config.params.page = 1;
  }

  getTrending() {
    return axios('trending/movie/day', this.config).then(({ data }) => {
      this.config.params.page += 1;
      return data;
    });
  }

  searchMovies() {
    return axios('search/movie', this.config).then(({ data }) => {
      this.config.params.page += 1;
      return data;
    });
  }

  getMovieDetails(movieId) {
    return axios(`movie/${movieId}`).then(({ data }) => data);
  }

  getMovieCredits(movieId) {
    return axios(`movie/${movieId}/credits`).then(({ data }) => data);
  }

  getMovieReviews(movieId) {
    return axios(`movie/${movieId}/reviews`).then(({ data }) => data);
  }

  setParams(params) {
    this.config.params = {
      ...this.config.params,
      ...params,
    };
  }

  setConfig(config) {
    for (const key in config) {
      this.config[key] = { ...this.config[key], ...config[key] };
    }
  }
}