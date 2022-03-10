import React from 'react';
var Search = (props) => {
  return (
    <form id="search" onSubmit = {(e) => props.handleSearchSubmit(e)}>
      <input id="search-input" onChange = {(e) => props.handleInputChange(e.target.value)}></input>
      <button id="search-button">Go!</button>
    </form>
  )
}

export default Search;