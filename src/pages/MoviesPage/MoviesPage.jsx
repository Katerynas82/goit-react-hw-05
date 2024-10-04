import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList"
import { searchMovies } from "../../services/api";
import s from'../MoviesPage/MoviesPage.module.css';

const MoviesPage = () => {
const [query, setQuery]=useState('');
  const [movies, setMovies] = useState([]);
  
const handleSearch = async (e)=>{
  e.preventDefault();
  const results = await searchMovies(query);
  setMovies(results.results);
}

 return (
   <>
     <div className={s.wrapper}>
       <form onSubmit={handleSearch}>
         <input
           type="text"
           value={query}
           onChange={(e) => setQuery(e.target.value)}
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