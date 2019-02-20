import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import './form.css';

//class GuessForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       	<form onSubmit={this.handleSubmit}>
// 		  <input type="radio" name="gender" value="male" checked/> Male<br/>
// 		  <input type="radio" name="gender" value="female"/> Female<br/>
// 		  <input type="radio" name="gender" value="other"/> Other 
// 		  <input type="radio" name="gender" value="other"/> ex
// 		  <input type="submit" value="Submit" />
// 		</form>

//     );
//   }
// }


const GuessForm = ({onNextGame}) => (
			<form onSubmit={this.handleSubmit}>
		  <input type="radio" name="gender" value="male"/> Male<br/>
		  <input type="radio" name="gender" value="female"/> Female<br/>
		  <input type="radio" name="gender" value="other"/> Other 
		  <input type="radio" name="gender" value="other"/> ex
		  <input onClick={onNextGame} type="submit" value="Guess" />
		</form>
);




export default GuessForm;