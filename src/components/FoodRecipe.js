import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';

const FoodRecipe = () => {
	const [ recipes, setRecipes ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ query, setQuery ] = useState('');

	const APP_ID = '563ef9b6';
	const APP_KEY = 'a6adea137d5513370559c5fc6f3f3a91';

	const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

	useEffect(
		() => {
			getData();
		},
		[ query ]
	);

	const getData = async () => {
		const response = await fetch(url);
		const result = await response.json();
		console.log(result);
		// get the result from API
		setRecipes(result.hits);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setQuery(search);
		// empty the input field after making search
		setSearch('');
	};

	return (
		<div className="ui container">
			<h1>Food Recipe App </h1>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="Search for recipes"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button type="submit" className="btn">
					Search
				</button>
			</form>
			<div className="ui two column grid">
				{/* map over our array */}
				{recipes !== [] &&
					recipes.map((recipe) => (
						<Recipe
							key={recipe.recipe.url}
							label={recipe.recipe.label}
							calories={recipe.recipe.calories}
							image={recipe.recipe.image}
							url={recipe.recipe.url}
							ingredients={recipe.recipe.ingredients}
						/>
					))}
			</div>
		</div>
	);
};

export default FoodRecipe;
