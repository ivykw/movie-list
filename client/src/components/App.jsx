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
      watched: false
    }
  }

  handleSearchSubmit() {
    event.preventDefault();
    let list = this.state.allMovies;
    var found = [];
    for (let i = 0; i < list.length; i++){
      if (list[i].title.includes(this.state.search)) {
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
        allMovies: list
      });
    }
  };

  handleWatchedClick() {
    console.log('click!')
  }

  componentDidMount() {
    this.setState({
      displayed: this.state.allMovies
    });
  };

  render() {
    return (
      <div>
        <h2>MovieList</h2>
          <div>
            <Add handleAddInput = {this.handleAddInput.bind(this)} handleAddSubmit = {this.handleAddSubmit.bind(this)}/>
          </div>
          <div>
            <Search handleSearchSubmit = {this.handleSearchSubmit.bind(this)} handleInputChange = {this.handleInputChange.bind(this)}/>
          </div>
          <div>
            <MovieList movies={this.state.displayed} showAll={this.state.allMovies} handleWatch = {this.handleWatchedClick.bind(this)}/>
          </div>
      </div>
    );
  }
}

export default App;