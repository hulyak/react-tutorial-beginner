import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import StateHook from './components/StateHook';
import StateHookArray from './components/StateHookArray';
import StateHookObject from './components/StateHookObject';
import FoodRecipe from './components/FoodRecipe';

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
          <Route path="/state-array" >
            <StateHookArray />
          </Route>
          <Route path="/state-object">
            <StateHookObject />
          </Route>
          <Route path="/food-recipe">
            <FoodRecipe />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
