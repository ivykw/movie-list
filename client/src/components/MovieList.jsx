import React from 'react';
import Movie from './Movie.jsx';

var MovieList = ({movies, handleWatchedClick}) => {
  if (movies.length < 1) {
    return 'No movies found';
  } else {
    return (
      <div id="movie-list">
        {movies.map(movie =>
          <div>
            <Movie key={movie.title} movie = {movie} handleClick={handleWatchedClick}/>
          </div>
        )}
      </div>
    )
  }
};

export default MovieList;