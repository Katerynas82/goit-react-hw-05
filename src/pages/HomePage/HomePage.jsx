import MovieList from "../../components/MovieList/MovieList"
import {useEffect, useState} from 'react';
import { fetchTrendingMovies } from "../../services/api";
import '../HomePage/HomePage.module.css'

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    fetchTrendingMovies().then(setMovies);
  },[])
  return (
    <div>
        <h1>Trending Movies</h1>
        <MovieList movies={movies}/>
        
    </div>
  )
}

export default HomePage