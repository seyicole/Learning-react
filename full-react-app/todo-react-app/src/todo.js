//got rid of the {component} becos this is a state component
import React from 'react';

const Todo = ({name, completed, onDelete, onToggle}) => (
	<li>
	<span
		style ={{textDecoration: completed? 'line-through': 'none'}}
		onClick={onToggle}
	>
		{name}
	</span>
		<span onClick={onDelete}>X</span>
	</li>
)

export default Todo;