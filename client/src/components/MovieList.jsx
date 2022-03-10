import React from 'react';
import Movie from './Movie.jsx';

var MovieList = ({movies}) => {
  if (movies.length < 1) {
    return 'No movies found';
  } else {
    return (
      <div id="movie-list">
        {movies.map(movie =>
          <Movie movie = {movie}/>
        )}
      </div>
    )
  }
};

export default MovieList;