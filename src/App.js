import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/navbar';
import StateHook from './components/StateHook';
import StateHookArray from './components/StateHookArray';
import StateHookObject from './components/StateHookObject';
import FoodRecipe from './components/FoodRecipe';

import './App.css';

export default function App() {
  const links = [
    {
      name: 'State Hook',
      path: '/',
    },
    {
      name: 'State Hook Array',
      path: '/state-array',
    },
    {
      name: 'State Hook Object',
      path: '/state-object',
    },
    {
      name: 'FoodRecipe',
      path: '/food-recipe',
    },
  ];
  return (
    <Router>
      <header>
        <Navbar links={links} />
      </header>
      <main className="container mx-auto">
        <Switch>
          <Route path="/" exact component={StateHook} />
          <Route path="/state-array" component={StateHookArray} />
          <Route path="/state-object" component={StateHookObject} />
          <Route path="/food-recipe" component={FoodRecipe} />
        </Switch>
      </main>
    </Router>
  );
}
