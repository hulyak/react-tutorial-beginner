import React, { useState } from 'react';

const StateHook = () => {
	const [ title, setTitle ] = useState('hello world');

	const handleClick = () => {
		setTitle('React is cool');
	};

	return (
		<div className="container">
			<h2>{title}</h2>
			<button type="button" onClick={handleClick} className="btn">
				Change title
			</button>
		</div>
	);
};

export default StateHook;
