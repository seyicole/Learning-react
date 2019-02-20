import React, { Component } from 'react';

class SearchForm extends Component{
	constructor(props){
		super(props);
		this.state = {inputValue: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e){
		this.setState({
			inputValue: e.target.value
		});
	}

	handleSubmit(){
		// console.log('http://www.omdbapi.com/?apikey=2c82fd2e&s=' + this.state.inputValue);
		this.props.searchMovie(this.state.inputValue);
	}

	render() {
		return(
			<div>
				<input type="text" placeholder="Search movie"
				 value={this.state.inputValue}
				 onChange={this.handleChange}
				 />
				<button
				onClick={this.handleSubmit}
				>Search</button>
			</div>
			)
	}
}

export default SearchForm;