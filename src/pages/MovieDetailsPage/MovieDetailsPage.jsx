import React, {useEffect, useRef, useState} from 'react';
import css from './MovieDetailsPage.module.css';
import {NavLink, Outlet, useLocation, useParams} from 'react-router-dom';
import {getMovieById} from '../../services/movieApi.js';
import Loader from '../../components/Loader/Loader.jsx';
import MovieInfo from "../MovieInfo/MovieInfo.jsx";
import {IoArrowBackOutline} from "react-icons/io5";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const [load, setLoad] = useState(false);
  const {movieId} = useParams();
  const location = useLocation();

  const goToBack = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!movieId) return;

    async function getMovies() {
      try {
        setLoad(true);
        const data = await getMovieById(movieId);
        setMovie(data);
        setLoad(false);
      } catch (error) {
        console.log(error)
      }
    }
    getMovies();
  }, [movieId]);

  return (
    <div>
      {load && <Loader/>}
      <div className={css.detail}>
        <NavLink to={goToBack.current} className={css.go_to_back}>
          <IoArrowBackOutline/>Go back
        </NavLink>
      </div>
      {movie && (<MovieInfo movie={movie}/>)}
      <div className={css.additional}>
        <hr/>
        <h2>Additional information</h2>
        <ul className={css.list}>
          <li><NavLink to='cast'>Cast</NavLink></li>
          <li><NavLink to='reviews'>Reviews</NavLink></li>
        </ul>
        <Outlet/>
      </div>

    </div>
  );
};

export default MovieDetailsPage
