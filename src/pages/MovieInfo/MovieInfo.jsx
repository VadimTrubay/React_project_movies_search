import React from 'react';
import css from './MovieInfo.module.css';
import defaultImg from '../../assets/defaultImg.png'


const MovieInfo = ({movie}) => {
  return (
    (<div className={css.container}>
      {movie.poster_path ?
        <img className={css.img}
             src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
             alt={movie.poster_path}/>
        :
        <img className={css.img}
             src={defaultImg}
             alt='No image'/>}
      <div className={css.description}>
        {movie.release_date && <h1 className={css.title}>{movie.title} ({movie.release_date.slice(0, 4)})</h1>}
        <p>User Scope: {Math.floor(movie.vote_average * 10)} %</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        {movie.genres && <ul className={css.genres}>{movie.genres.map(({id, name}) => <li key={id}>{name}</li>)}</ul>}
      </div>
    </div>)
  )
}

export default MovieInfo
