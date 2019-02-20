 // <Recipe title='pasta'
 //         img= 'food.gif'
 //         ingredients={['tomatoes', 'pepper', 'salt']}
 //         instructions='How to use ingredients'
 //         />

import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './header';
import Recipe from './recipe';
import './RecipeApp.css';
import RecipeList from './recipeList';

class RecipeApp extends Component {
  render() {
    return (
     
      <div className="App">
       <Header/>
       
         <RecipeList/>

      </div>
    );
  }
}

export default RecipeApp;

