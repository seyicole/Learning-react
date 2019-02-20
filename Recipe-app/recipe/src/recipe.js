import React, {Component} from 'react';
import './recipe.css';
import PropTypes from 'prop-types';


class Recipe extends Component {
	 static propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }

	render() {
		const {title, img, instructions} = this.props;
		const ingredients = this.props.ingredients.map((ing, index) => (
			<li key={index}>{ing}</li>
			))
		return (
			<div className="recipe-card">
				<h2 className="recipe-title">{title}</h2>
				<div className="recipe-img">
					<img src={img} alt={title}/>
				</div>
				<div className="recipe-content">
					<h3>Ingredients</h3>
					<ul>
					{ingredients}
					</ul>
					<h4>Instructions</h4>
					<p>{instructions}</p>
				</div>
			</div>
		);
	}
}

export default Recipe;