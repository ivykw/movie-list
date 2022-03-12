import React from 'react';

var Movie = (props) => (
  <div>
    {props.movie.title}
    <button className="watched-button" onClick={(event) => {props.handleClick(event, props.movie.title)}}>Watched</button>
  </div>
)

export default Movie;