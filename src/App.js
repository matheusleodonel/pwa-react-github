import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';

import Login from './Login/Login';
import Home from './Home/Home';
import Repositories from './Repositories/Repositories';
import Followers from './Followers/Followers';
import Following from './Following/Following';


function App() {
  const [apilist, setApilist] = useState(0);

  /* CONST USERNAME */

  const setUser = (valor) => {
    axios
      .get(
        "https://api.github.com/users/" + valor
      )
      .then((res) => {
        setApilist(res.data);
        window.location.href = '/home'
      })
      .catch((error) => {
        if(error.res){
          console.log("errar é humano")
        } else if(error.request){
          console.log("request 3")
        } else{
          console.log("elseeee")
        }
        console.log("Isso não existe")
      })
    console.log(apilist);
  }
/* 
  CRIAR FUNÇÃO DE REPOSITÓRIO
*/
  const handleClick = (event) => {

    setUser(event.target.login.value);
    event.preventDefault();
  }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login handleClick={handleClick} />
          </Route>
        </Switch>

        <Switch>
          <Route path="/home">
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

/*function App {
  constructor(){
    super();
    this.state = {
      githubData: [],
      textInput: ""
    };
  }
  componentDidMount(){
    axios
      .get(
        api.baseUrl + `https://api.github.com/` +
        api.client_id + "&client_secret=" + api.client_secret
      )
      .then((res) => {
        console.log("Infos da API", res);

        this.setState({ githubData: res.data.items });
      });


      function handleClick () {
          console.log(textInput);

      }

      const handleChange = (event) => {
          this.setState({setTextInput:event.target.value});
      }
  }

  render() {
    const { githubData } = this.state;
    //console.log("Infos do State", githubData);
    return (
      <div className="container App">
        <div className="row">
          {githubData.map((dataMap) => (
            <div key={dataMap.id} className="col-md-12">
              <Login item = {dataMap.name} />
          </div>
          ))}
        </div>
        <Login handleClick={handleClick} handleChange={handleChange}/>
      </div>
    )
  }
}
*/
