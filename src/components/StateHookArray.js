import React, { useState } from 'react';

const StateHookArray = () => {
	const [ items, setItems ] = useState([
		{ id: 1, listItem: 'go on a holiday' },
		{ id: 2, listItem: 'go hiking' },
		{ id: 3, listItem: 'learn React Hooks' }
	]);

	// remove items
	const removeItem = (id) => {
		setItems(items.filter((item) => item.id !== id));
	};

	const addItem = () => {
		setItems([
			// don't mutate the array, use spread operator to get the previous state
			...items,
			// add new item
			{
				id: 4,
				listItem: 'meet deadlines'
			}
		]);
	};

	return (
		<div className="ui container">
			<div className="ui grid">
				{items.map((item) => {
					const { id, listItem } = item;
					return (
						<div key={id} className="row">
							<h2 className="five wide column">{listItem}</h2>
							{/* when it is clicked, remove the individual item */}
							<button className="three wide column btn" onClick={() => removeItem(id)}>
								remove
							</button>
						</div>
					);
				})}
			</div>
			{/* when it is clicked, empty the whole array */}
			<button className="btn" onClick={() => setItems([])}>
				Delete all
			</button>
			{/* when it is clicked, add one new item to the list */}
			<button className="btn" onClick={() => addItem()}>
				Add Item
			</button>
		</div>
	);
};

export default StateHookArray;
