import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import './navbar.css';

const Navbar = ({onNewGame}) => (
			 <header>
			    <h2><a>Memory Game</a></h2>
			    <nav>
			    	
			      <li><button onClick={onNewGame}>Guess</button></li>
			    </nav>
 			 </header>
);

// Navbar.propTypes = {
//   onNewGame: PropTypes.func.isRequired
// };


export default Navbar;