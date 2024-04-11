import React, {useEffect, useState} from 'react';
import css from './MoviesPage.module.css';
import {getMovieSearch} from '../../services/movieApi.js';
import MovieList from '../MovieList/MovieList.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import toast, {Toaster} from 'react-hot-toast';
import {useSearchParams} from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get('query') ?? '';


  useEffect(() => {
    if (querySearch === '') return;

    async function getMoviesSearch() {
      try {
        setLoad(true);
        const movies = await getMovieSearch(querySearch);
        setMovies(movies);
        if (!movies.results.length) toast.error('Not found for your request');
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false);
      }
    }

    getMoviesSearch();
  }, [querySearch]);

  const updateQueryString = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value;
    if (!searchQuery) return toast.error('Please, enter your query');
    const params = searchQuery !== '' ? {query: searchQuery} : {};
    setSearchParams(params);
    e.target.reset();
  };

  return (
    <div>
      {load && <Loader/>}
      <form onSubmit={updateQueryString} className={css.form}>
        <input
          type='text'
          name='query'
          placeholder='Search for a movie'
          className={css.input}
        />
        <button type='submit' className={css.button}>
          Search
        </button>
      </form>
      {movies.results && <MovieList movies={movies.results}/>}
      <Toaster/>
    </div>
  );
};

export default Movies;

