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
import DetailFollower from './Followers/DetailFollower';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>

          <Route exact path="/home">
            <Home/>
          </Route>

          <Route exact path="/repositories">
            <Repositories />
          </Route>

          <Route exact path="/following">
            <Following />
          </Route>

          <Route exact path="/followers">
            <Followers />
          </Route>

          <Route exact path="/followers/user/:login">
            <DetailFollower />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
