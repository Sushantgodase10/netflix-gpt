import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
const movies = useSelector((store) => store.movies);
console.log(movies);
  return (
    movies.nowPlayingMovies && (
    <div className= " px-4 bg-black">
      <div  className="-mt-48 pl-4 relative z-20">
      <MovieList  title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList  title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList  title={"Popular"} movies={movies.popularMovies}/>
      <MovieList  title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
      <MovieList  title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
      </div>
    )
  );
};

export default SecondaryContainer;
