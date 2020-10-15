import React from 'react';

// inside recipe object destructure label,etc
const Recipe = ({label, calories, image, url, ingredients}) => {
  return (
    <div className="recipes">
      <h2>{label}</h2>
      <div>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.text}>{ingredient.text}</li>
          ))}
        </ul>
      </div>

      <p>{calories}</p>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        URL
      </a>
      <button>Ingredients</button>
    </div>
  );
};

export default Recipe;

// noopener noreferrer => for security reasons
