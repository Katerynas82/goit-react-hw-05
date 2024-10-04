import { Suspense, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMovieDetails, getMovieImageUrl } from "../../services/api";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import s from '../MovieDetailsPage/MovieDetailPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    getMovieDetails();
  }, [movieId]);
  if (!movie) return <p>Loading...</p>;
  return (
    <div className={s.navigate}>
      <div>
        <img src={getMovieImageUrl(movie.poster_path)} alt={movie.title}></img>
      </div>
      <div className={s.block}>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <nav className={s.navigate}>
          <Link to="cast">
            <p>Cast</p>
          </Link>

          <Link to="reviews">
            <p>Review</p>
          </Link>
        </nav>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet context={{ movieId }} />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
