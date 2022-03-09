import React from 'react';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      found: []
    }
  }
  onSubmit() {
    // clear list
    // display all matches (or partial matches) to the title
  }
  render() {
    return (
      <div>
        <h2>MovieList</h2>
          <input id="search-bar"></input>
          <button id="go">Go!</button>
          <div id="movie-list"><MovieList movies={movies}/></div>
      </div>
    );
  }
}

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

export default App;