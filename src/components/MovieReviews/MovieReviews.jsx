import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../../services/api";
import s from '../MovieReviews/MovieReviews.module.css';
import { useOutletContext } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useOutletContext();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div className={s.container}>
      <h2 className={s.title}>Reviews</h2>
      {reviews.length ? (
        <ul className={s.list}>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No review found.</p>
      )}
    </div>
  );
};

export default MovieReviews;
