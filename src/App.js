import './App.css';
import Home from './components/Home'
import Nav from './components/Nav'

import Details from './components/Detail'
import ItemList from './components/ItemList';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
  <Router>
      
    <div className="App">
      <Switch>
          <Route path="/allbeers">
            <ItemList/>
            <Nav/>
          </Route>
          <Route path="details/:id" component={Details} >
            
            <Nav/>
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
