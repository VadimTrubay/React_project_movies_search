import React, {useEffect, useState} from 'react';
import css from './MovieReviews.module.css';
import {getMovieReviews} from '../../services/movieApi.js';
import {useParams} from 'react-router-dom';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const {movieId} = useParams();

  useEffect(() => {
    if (!movieId) return;

    async function getReviews() {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error)
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <div className={css.review}>
      {reviews && reviews.length ? (
        <ol>
          {reviews.map(({id, author, content}) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ol>
      ) : (
        <h4>We don't have any reviews for this movie</h4>
      )}
    </div>
  );
};

export default MovieReviews;
