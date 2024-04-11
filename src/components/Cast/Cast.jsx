import {MovieAPI} from '../../serviсes/moviesApi';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import img from '../../img/img.png';
import css from './Cast.module.css';

const movieAPI = new MovieAPI();
const BASE_URL = 'https://image.tmdb.org/t/p/w300';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const {movieId} = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await movieAPI.getMovieCredits(movieId);
        setCast(resp.cast);
      } catch (err) {
        setError(err);
      }
    }

    fetchData();
  }, [movieId]);

  return (
    <>
      {cast.length > 0 ? (
        <div className={css.castList}>
          {cast.map(({id, character, original_name, profile_path}) => (
            <div className={css.castcard} key={id}>
              <div>
                <img className={css.imgthumb} src={profile_path ? BASE_URL + profile_path : img} alt='Foto'/>
              </div>
              <h4>{character}</h4>
              <p>({original_name})</p>
            </div>
          ))}
        </div>
      ) : (
        <p className={css.castna}>N/A</p>
      )}
      {error && <h1>Oooops... Please reload page</h1>}
    </>
  );
}
