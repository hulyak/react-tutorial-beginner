import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import StateHook from './components/StateHook';
import StateHookArray from './components/StateHookArray';
import StateHookObject from './components/StateHookObject';
import FoodRecipe from './components/FoodRecipe';
import Cleanup from './components/Cleanup';
import UseEffect from './components/UseEffect';
import UseEffectDependency from './components/UseEffectDependency';

import './App.css';

export default function App() {
	return (
		<Router>
			<Header />
			<main className="container mx-auto">
				<Switch>
					<Route path="/" exact>
						<StateHook />
					</Route>
					<Route path="/state-array">
						<StateHookArray />
					</Route>
					<Route path="/state-object">
						<StateHookObject />
					</Route>
					<Route path="/use-effect">
						<UseEffect />
					</Route>
					<Route path="/use-effect-dependency">
						<UseEffectDependency />
					</Route>
					<Route path="/cleanup">
						<Cleanup />
					</Route>
					<Route path="/food-recipe">
						<FoodRecipe />
					</Route>
				</Switch>
			</main>
		</Router>
	);
}
