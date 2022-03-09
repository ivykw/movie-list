import React from 'react';
import Move from './Movie';

var MovieList = ({movies}) => {
  return (
    <div id="movie-list">
      {movies.map(movie =>
        <Movie movie = {movie}/>
      )}
    </div>
  )
};

export default MovieList;