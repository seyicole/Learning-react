import React, {Component} from 'react';
import './header.css';

class Header extends Component {
	render() {
		// const {title, img, instructions} = this.props;
		// const ingredients = this.props.ingredients.map((ing, index) => (
		// 	<li key={index}>{ing}</li>
		// 	))
		return (
			 <header>
			    <h2><a href="#">Recipe App</a></h2>
			    <nav>
			      <li><a href="#">New Recipe</a></li>
			      <li><a href="#">Home </a></li>
			      <li><a href="#">About</a></li>
			      <li><a href="#">Contact Us</a></li>
			    </nav>
 			 </header>
		);
	}
}

export default Header;