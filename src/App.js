import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './Login/Login';
import Home from './Home/Home';
import Repositories from './Repositories/Repositories';
import Followers from './Followers/Followers';
import Following from './Following/Following';


function App() {
  return (
    <div className="App">
      <button>Home</button>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Switch>
          <Route path="/repositories">
            <Repositories />
          </Route>
        </Switch>

        <Switch>
          <Route path="/following">
            <Following />
          </Route>
        </Switch>

        <Switch>
          <Route path="/followers">
            <Followers />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
