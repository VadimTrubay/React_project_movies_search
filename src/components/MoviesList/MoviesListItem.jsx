import {Link, useLocation} from 'react-router-dom';
import css from './MoviesListItem.module.css'
import img from '../../img/img.png';

const BASE_URL = 'https://image.tmdb.org/t/p/w300';

export function MoviesListItem({data: {id, poster_path, title, release_date}}) {
  const location = useLocation();
  const new_release_date = release_date.slice(0, 4);
  return (
    <div className={css.poster_card}>
      <Link to={`/movies/${id}`} state={{from: location}} className={css.link_without_underline}>
        <img
          src={poster_path ? BASE_URL + poster_path : img}
          alt='poster'
        />
        <h2 className={css.poster_title}>{title}</h2>
        <h3 className={css.poster_date}>({new_release_date})</h3>
      </Link>
    </div>
  );
}
