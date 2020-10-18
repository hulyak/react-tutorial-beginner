import React, { useState, useEffect } from 'react';

function UseEffectDependency() {
	const [ count, setCount ] = useState(0);
	const [ isOn, setIsOn ] = useState(false);

	useEffect(
		() => {
			if (count === 0 && !isOn) return;
			document.title = isOn;
			setCount(count + 1);
		},
		[ isOn ]
	);

	const handleClick = () => {
		setIsOn(!isOn);
	};

	return (
		<div>
			<h1>{isOn ? 'ON' : 'OFF'}</h1>
			<h1>I was clicked {count} times</h1>
			<button onClick={handleClick}>Click me</button>
		</div>
	);
}

export default UseEffectDependency;
