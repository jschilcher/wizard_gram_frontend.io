import React, { Component } from "react";
import axios from "axios";
import Title from "./Title/title";
import "../components/app.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Login/login";
import Profile from '../components/Profile/profile'
import NavBar from "./NavBar/navBar";
import Register from "./Register/register";

function App() {
  return (
    <div className="App">
        <Title/>
      <NavBar/>
   
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/register" exact component={Register} />
      </Switch>
     </div>
  );
}

export default App;
