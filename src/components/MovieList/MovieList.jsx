import { Link, useLocation } from "react-router-dom";
import { getMovieImageUrl } from "../../services/api";
import s from "../MovieList/MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  if (!Array.isArray(movies) || movies.length === 0) {
    return <p>No movies available</p>;
  }

  return (
    <div>
      <ul className={s.gallery}>
        {movies.map((movie) => (
          <li className={s.item} key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                src={getMovieImageUrl(movie.poster_path)}
                alt={movie.title}
              ></img>
              <h3>{movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
