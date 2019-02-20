import React, { Component } from 'react';
import TodoList from './Todolist'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Todo List</h1>
        </header>
        <TodoList/>
      </div>
    );
  }
}

export default App;
