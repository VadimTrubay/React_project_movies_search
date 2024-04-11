import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import css from './MovieList.module.css';
import defaultImg from '../../assets/defaultImg.png'

const MovieList = ({movies}) => {
  const location = useLocation();
  console.log(movies)

  return (
    <div>
      <ul className={css.movie_list}>
        {movies.map(({id, title, release_date, poster_path}) => (
          <li className={css.movie_list_item} key={id}>
            <NavLink to={`/movies/${id}`} state={{from: location}}>
              {poster_path ?
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                     alt={poster_path}/>
                :
                <img src={defaultImg} alt='No image'/>}
              <h3 className={css.movie_list_title}>{title}</h3>
              <p className={css.movie_list_release}>{release_date.split('-')[0]}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList
