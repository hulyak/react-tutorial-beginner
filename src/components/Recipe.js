import React from 'react';

// inside recipe object destructure label,etc
const Recipe = ({label, calories, image, url, ingredients}) => {
  return (
    <div className="recipe">
      <h2>{label}</h2>
      <div className="recipe__list">
        <ol>
          {ingredients.map((ingredient) => (
            <li key={ingredient.text}>{ingredient.text}</li>
          ))}
        </ol>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Check the recipe!
      </a>
      <p>Calories: {Math.floor(calories)}</p>
      <img src={image} alt={label} />
    </div>
  );
};

export default Recipe;
