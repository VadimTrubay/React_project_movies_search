import {MovieAPI} from '../../serviсes/moviesApi';
import {MoviesList} from '../../components/MoviesList/MoviesList';
import {useEffect, useState} from 'react';
import css from './Home.module.css'
import Loader from "../../components/Loader/Loader.jsx";

const movieAPI = new MovieAPI();

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {

    async function fetchData() {
      try {
        setLoad(true);
        const resp = await movieAPI.getTrending()
        setMovies(resp.results)
        setLoad(false);
      } catch (err) {
        setErr(err)
      }

    }

    fetchData()
  }, [])

  return <>
    {load && <Loader/>}
    {movies.length > 0 && <>
      <h1 className={css.headertitle}>Trending today</h1>
      <MoviesList data={movies}/>
    </>}
    {err && <h1>Oooops... Please reload page</h1>}
  </>
}