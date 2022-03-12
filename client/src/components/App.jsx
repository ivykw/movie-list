import React from 'react';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';
import Add from './Add.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: [],
      displayed: [],
      search: '',
      addInput: {},
      watched: false,
      watchedList: [],
      unwatchedList: []
    }
  }

  handleSearchSubmit() {
    event.preventDefault();
    let list = this.state.allMovies;
    var found = [];
    let lowerSearch = this.state.search.toLowerCase();
    for (let i = 0; i < list.length; i++){
      let currentTitle = list[i].title.toLowerCase();
      if (currentTitle.includes(lowerSearch)) {
        found.push(list[i]);
      }
    }
    this.setState({
      displayed : found
    });
  };

  handleInputChange(input) {
    this.setState({
      search: input
    });
  };

  handleAddInput(input) {
    this.setState({
      addInput: {title: input}
    });
  };

  handleAddSubmit() {
    event.preventDefault();
    let list = this.state.allMovies;
    let exists = false;
    for (let i = 0; i < list.length; i++) {
      if (list[i].title === this.state.addInput.title)
        exists = true;
    }
    if (exists === false) {
      list.push(this.state.addInput);
      this.setState({
        allMovies: list,
        unwatchedList: list
      });
    }
  };

  handleWatchedClick(event, movieTitle) {
    event.preventDefault();
    console.log(movieTitle)
    console.log('here', event)
    // if event.target.classList === watched
      // change to unwatched
    let current = this.state.watched;
    let newUnwatched = this.state.unwatchedList;
    let newWatched = this.state.watchedList;
    let removed = null;
    if (current === false) {
      for (let i = 0; i < newUnwatched.length; i++) {
        if (newUnwatched[i].title === movieTitle) {
          removed = newUnwatched.slice(i, 1);
        }
      }
      newWatched.push[removed];
    } else {
      for (let i = 0; i < newWatched.length; i++) {
        if (newWatched[i].title === movieTitle) {
          removed = newWatched.slice(i, 1);
          console.log(removed)
        }
      }
      newUnwatched.push[removed];
    }
    this.setState({
      watched: !current,
      watchedList: newWatched,
      unwatchedList: newUnwatched
    });

  }
    // if watched = true
      // splice movie from unwatched to watched
    // else
      // splice movie from watched to unwatched
    // change button color to indicate watched


  handleWatchedList() {
    event.preventDefault();
    let list = this.state.watchedList;
    this.setState({
      displayed: list
    });
  }

  handleUnwatchedList() {
    event.preventDefault();
    let list = this.state.unwatchedList;
    this.setState({
      displayed: list
    });
  }

  componentDidMount() {
    this.setState({
      displayed: this.state.allMovies,
      unwatchedList: this.state.AllMovies
    });
  };

  render() {
    return (
      <div>
        <div>
        <h2>MovieList</h2>
            <Add handleAddInput = {this.handleAddInput.bind(this)} handleAddSubmit = {this.handleAddSubmit.bind(this)}/>
            <Search handleSearchSubmit = {this.handleSearchSubmit.bind(this)} handleInputChange = {this.handleInputChange.bind(this)}/>
          <button onClick={this.handleWatchedList.bind(this)}>Watched</button>
          <button onClick={this.handleUnwatchedList.bind(this)}>To Watch</button>
          </div>
          <div>
            <MovieList movies = {this.state.displayed} handleWatchedClick = {this.handleWatchedClick.bind(this)}/>
          </div>
      </div>
    );
  }
}

export default App;