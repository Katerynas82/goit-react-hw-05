import { fetchMovieCast } from "../../services/api";
import { useState, useEffect } from "react";
import s from '../MovieCast/MovieCast.module.css';

import { useOutletContext } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useOutletContext();
  const [cast, setCast] = useState([]);
 
  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);
 
  return (
    <div className={s.container}>
      <h2 className={s.title}>Cast</h2>
      <ul className={s.actorsList}>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path ? 
                  `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                 : 
                  "http://placehold.it/100x150/"
                
              }
              // alt={actor.name}
              
            />
            <h2>{actor.name} </h2>
            <p>as {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
