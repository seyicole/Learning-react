import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//we need two states 1. list of todos= an array of strings 2. our form input

// 2.1 for map alternative
// const TodoItem = ({text}) => (
//   <li>{text}</li>
// );


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [],
      newVal: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
              e.preventDefault();
              const todos = [...this.state.todos, this.state.newVal];
              this.setState({todos, newVal: ''});
  }

  render() {
    // 2.2 example for 2.1 alternative
    //   const todos = this.state.todos.map((t, i) => (
    //   <TodoItem key={i} text={t} />
    // )); or 
     
      const values = this.state.todos.map((val, index) => (
        <li key={index}> {val}</li>
          ));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Todo-list</h1>
        </header>
        <p className="App-intro">
           To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         <form onSubmit={this.handleSubmit}>
           <input
              type='text'
              name='newVal' //the key has to match the key in the state
              value={this.state.newVal}
              onChange={(e) => 
                this.setState({[e.target.name]: e.target.value})
              }
            />
            <button
              type='submit'
              className='save button'>
              save
            </button>
          </form>
        <div >
          <ul>
            {values}
          </ul>
        </div>
  
      </div>

        
    );
  }
}

export default App;
