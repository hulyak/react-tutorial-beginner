import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className="ui secondary pointing menu">
			<Link to="/" className="item">
				State Hook
			</Link>
			<Link to="/state-array" className="item">
				State Hook Array
			</Link>
			<Link to="/state-object" className="item">
				State Hook Object
			</Link>
			<Link to="/use-effect" className="item">
				useEffect
			</Link>
			<Link to="/use-effect-dependency" className="item">
				Dependency
			</Link>
			<Link to="/cleanup" className="item">
				Cleanup
			</Link>
			<Link to="/food-recipe" className="item">
				Food Recipe
			</Link>
		</div>
	);
}

export default Header;
