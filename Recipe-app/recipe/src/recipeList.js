import React, {Component} from 'react';
import './recipeList.css';
import Recipe from './recipe';	
import PropTypes from  'prop-types';


class RecipeList extends Component {
	static defaultProps = {
		recipes: [
			{
				title: 'cake',
				ingredients: ['flour', 'water', 'magarine'],
				instructions: 'Add ingredients',
				img: 'food.gif'
			},

			{
				title: 'stew',
				ingredients: ['tomatoes', 'pepper', 'onions'],
				instructions: 'Add ingredients',
				img: 'food.gif'
			},

			{
				title: 'salad',
				ingredients: ['maonise', 'carrot', 'carbbage'],
				instructions: 'Add ingredients',
				img: 'food.gif'
			},

			{
				title: 'salad',
				ingredients: ['maonise', 'carrot', 'carbbage'],
				instructions: 'Add ingredients',
				img: 'food.gif'
			}

		]

	}

	static propTypes = {
		recipes: PropTypes.arrayOf(PropTypes.object).isRequired
	} 

	render() {
		
			const recipes =	this.props.recipes.map((ing, index) => (
				<Recipe key={index} {...ing}/>
			))

			return (
				<div className='recipeList'>
				{recipes}
				</div>
				
			);
	}
}

export default RecipeList;