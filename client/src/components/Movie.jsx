import React from 'react';

var Movie = (props) => (
  <div>
    <div>{props.movie.title}</div>
    <button id="watched-button" onClick = {props.handleWatchedClick}>Watched</button>
  </div>
)

export default Movie;