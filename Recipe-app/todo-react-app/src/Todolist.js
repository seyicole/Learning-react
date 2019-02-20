import React, { Component } from 'react';

class TodoList extends Component {
	constructor (props){
	    super(props);
	    this.state = {
	      todos: []
	    };
	}

  	ComponentWillMount(){
	    return fetch('http://localhost:3001/api/todos')
	    .then(data => data.json())
	    //this takes the todo arr in d contructor component n set it to d todo here
	    .then(todos => this.setState({todos}));
  	}

	render(){
		return (
			<h1>Todo List</h1>
			)
	}
}

export default TodoList;