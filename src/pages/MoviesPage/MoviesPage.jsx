import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList"
import { searchMovies } from "../../services/api";
import s from'../MoviesPage/MoviesPage.module.css';
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {

  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  
  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        const results = await searchMovies(query);
        setMovies(results.results);
      };
      fetchMovies();
    }
  }, [query]);

const handleSearch = (e) => {
  e.preventDefault();
  const formQuery = e.target.elements.query.value;
  setSearchParams({ query: formQuery });
};

 return (
   <>
     <div className={s.wrapper}>
       <form onSubmit={handleSearch}>
         <input
           type="text"
           name="query"
           defaultValue={query}
           placeholder="Search movies"
         />
         <button type="submit">Search</button>
       </form>
     </div>
     <MovieList movies={movies} />
   </>
 );
};


export default MoviesPage;