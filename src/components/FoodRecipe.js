import React, {useState, useEffect} from 'react';
import Recipe from './Recipe';

const FoodRecipe = () => {
  // create a state for search query
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  // make a search with user's query
  const [query, setQuery] = useState('');

  const APP_ID = '563ef9b6';
  const APP_KEY = 'a6adea137d5513370559c5fc6f3f3a91';

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getData();
  }, [query]);

  const getData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    // get the result from API
    setRecipes(result.hits);
    // clear the input when we submit the form
    setSearch('');
  };

  // make search when the form is submit
  const onSubmit = (e) => {
    e.preventDefault();
    // update the state with the search input
    setQuery(search);
  };

  return (
    <div>
      <h1>Food Recipe App </h1>
      <form onSubmit={onSubmit} className="formContainer">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoComplete="off"
          placeholder="Search Food"
        />
        <input type="submit" className="btn" value="Search" />
      </form>
      <div className="recipe">
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
