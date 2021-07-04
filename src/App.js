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
      <Router>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/repositories">
            <Repositories />
          </Route>

          <Route path="/following">
            <Following />
          </Route>

          <Route path="/followers">
            <Followers />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
