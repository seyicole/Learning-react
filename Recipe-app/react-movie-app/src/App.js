import React, { Component } from 'react';
import SearchForm from './SearchForm';
import logo from './logo.svg';
import './App.css';



const movieApi = 'http://www.omdbapi.com/?apikey=2c82fd2e&s='

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [] //default state
    }
    this.searchMovie = this.searchMovie.bind(this);
  };

  searchMovie(val){
    // console.log('search movie: ', val)
    fetch(movieApi + val)
    .then(data => data.json())
    .then(movies => this.setState({movies: movies.Search}))
  }

  componentWillMount(){
    fetch(movieApi)
    .then(data => data.json())
    .then(movies => this.setState({movies: movies.Search}))
  }

  
  render() {
    let views = <div>Loading...</div>
      const {movies} = this.state;
    if(movies && movies.length > 0) {
      views = movies.map((m, i) => (
        <div key={i}  m={m}>
          <b>{m.Title}</b> - <strong>{m.Year}</strong>
        </div>
      ))
    }
    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br/>
        <SearchForm searchMovie={this.searchMovie}/>
        <br/>
        {views}
      </div>
    );
  }
}

export default App;
