import React, { useState, useEffect } from 'react';

function UseEffect() {
	const [ count, setCount ] = useState(0);
	const [ isOn, setIsOn ] = useState(false);

	useEffect(() => {
		document.title = isOn;
		console.log('first render');
	});

	const handleClick = () => {
		setIsOn(!isOn);
		setCount(count + 1);
	};
	return (
		<div>
			<h1>{isOn ? 'ON' : 'OFF'}</h1>
			<h1>I was clicked {count} times</h1>
			<button onClick={handleClick}>Click me</button>
		</div>
	);
}

export default UseEffect;
