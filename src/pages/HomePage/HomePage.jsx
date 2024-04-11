import React from 'react';
import {useEffect, useState} from "react";
import {getMovies} from "../../services/movieApi.js";
import MovieList from "../MovieList/MovieList.jsx";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getAllMovies() {
      try {
        const data = await getMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error)
      }
    }
    getAllMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={movies}/>
    </>
  );
};

export default Home;