import {MoviesListItem} from './MoviesListItem';
import css from './MoviesList.module.css'

export function MoviesList({data}) {
  return <>
    <div className={css.listflex}>
      {data.map(item => <MoviesListItem key={`${item.id}${item.title}`} data={item}/>)}
    </div>
  </>
}