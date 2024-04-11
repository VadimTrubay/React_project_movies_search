import {MovieAPI} from '../../serviсes/moviesApi';
import {Button} from '../../components/Button/Button';
import {MoviesList} from '../../components/MoviesList/MoviesList';
import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import css from './Movies.module.css'

const movieAPI = new MovieAPI();

export default function Movies() {
  const [sp, setSp] = useSearchParams();
  const search = sp.get('search')
  const [inputValue, setInputValue] = useState(search || '');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);


  const handleSubmit = e => {
    e.preventDefault()
    const name = e.target.movie.value;
    if (name) setSp({search: name})
  }


  useEffect(() => {
    if (!search) return
    setInputValue(search)

    async function fetchData() {
      try {
        movieAPI.setSearchQuestion(search)
        const resp = await movieAPI.searchMovies()
        setMovies(resp.results)
      } catch (error) {
        setError(error)
      }
    }

    fetchData()
  }, [search])

  return (
    <>
      <form className={css.formflex} onSubmit={handleSubmit}>
        <input className={css.inputstyle} type='text' name='movie' placeholder='Name movie' autoFocus value={inputValue}
               onChange={e => setInputValue(e.target.value)}/>
        <Button text={'Search'}/>
      </form>
      {movies.length > 0 && <MoviesList data={movies}/>}
      {error && <h1>Oooops... Please reload page</h1>}
    </>
  );
}

