import React, { Component } from 'react';
import TodoForm from './todoForm';
import Todo from './todo';

const APIURL = '/api/todos/';

class TodoList extends Component {
	constructor (props){
	    super(props);
	    this.state = {
	      todos: []
	    };
	   this.addTodo = this.addTodo.bind(this);
	}

  	componentWillMount(){
	    this.loadTodos();
  	}

  	loadTodos(){
  		fetch(APIURL)
  		//ERR HANDLING
  		.then(resp => {
  			if(!resp.ok){ //if res is not ok
  				// do another check to c if status is = 400
  				if(resp.status >=400 && resp.status < 500){
  					return resp.json().then(data => {
  						let err = {errorMessage: data.message};
  						throw err;
  					})
  				}else {
  					let err = {errorMessage: "Please try again later"}
  					throw err
  				}
  			}
  			return resp.json();
  		})
  		//this takes the todo arr in d contructor component n set it to d todo here
	    .then(todos => this.setState({todos}));
  	}

  	addTodo(val){
  		fetch(APIURL, {
  			method: 'post',
  			headers: new Headers({
  				'Content-Type': 'application/json',
  			}),
  			body: JSON.stringify({name: val})
  		})
  		//ERR HANDLING
  		.then(resp => {
  			if(!resp.ok){ //if res is not ok
  				// do another check to c if status is = 400
  				if(resp.status >=400 && resp.status < 500){
  					return resp.json().then(data => {
  						let err = {errorMessage: data.message};
  						throw err;
  					})
  				}else {
  					let err = {errorMessage: "Please try again later"}
  					throw err
  				}
  			}
  			return resp.json();
  		})
  		//this takes the todo arr in d contructor component n set it to d todo here
	    .then(newTodo => {
	    	this.setState({todos: [...this.state.todos, newTodo]})
	    });
  	}

  	deleteTodo(id){
  		const deleteUrl = APIURL + id;
  		fetch(deleteUrl, {
  			method: 'delete'
  		})
  		//ERR HANDLING
  		.then(resp => {
  			if(!resp.ok){ //if res is not ok
  				// do another check to c if status is = 400
  				if(resp.status >=400 && resp.status < 500){
  					return resp.json().then(data => {
  						let err = {errorMessage: data.message};
  						throw err;
  					})
  				}else {
  					let err = {errorMessage: "Please try again later"}
  					throw err
  				}
  			}
  			 return resp.json();
  		})
  		//this takes the todo arr in d contructor component n set it to d todo here
	    .then(() => {
	    	const todos = this.state.todos.filter(todo => todo._id !== id)
	    	this.setState({todos: todos})
	    });
  	}


  	toggleTodo(todo){
  		const updateUrl = APIURL + todo._id;
  		fetch(updateUrl, {
  			method: 'put',
  			headers: new Headers({
  				'Content-Type': 'application/json',
  			}),
  			body: JSON.stringify({completed: !todo.completed})
  		})
  		//ERR HANDLING
  		.then(resp => {
  			if(!resp.ok){ //if res is not ok
  				// do another check to c if status is = 400
  				if(resp.status >=400 && resp.status < 500){
  					return resp.json().then(data => {
  						let err = {errorMessage: data.message};
  						throw err;
  					})
  				}else {
  					let err = {errorMessage: "Please try again later"}
  					throw err
  				}
  			}
  			 return resp.json();
  		})
  		//this takes the todo arr in d contructor component n set it to d todo here
	    .then(updatedTodo => {
	    	const todos = this.state.todos.map(t => 
	    		(t._id === updatedTodo._id)
	    		? {...t, completed: !t.completed}
	    		: t
	    		)
	    	this.setState({todos: todos})
	    });
  	}
  	


	render(){
		const todos = this.state.todos.map((t) => (
			<Todo
				key={t._id} //because each item has an id already so use ._id
				{...t}
				onDelete={this.deleteTodo.bind(this, t._id)}
				onToggle={this.toggleTodo.bind(this, t)}
			/>
			));
		return (
			<div>
				<h1>Todo List</h1>
				<TodoForm addTodo={this.addTodo}/>
					<ul>
						{todos}
					</ul>
			</div>
			)
	}
}

export default TodoList;