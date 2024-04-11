import React from 'react';
import css from './NotFound.module.css'
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={css.not_found}>
      <p><Link to={'/'}>Back to home page</Link></p>
      NotFound
    </div>
  )
}

export default NotFound
