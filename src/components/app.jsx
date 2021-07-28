import React, { Component } from "react";
import axios from "axios";
import Title from "./Title/title";
import "../components/app.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Login/login";
import Profile from '../components/Profile/profile'
import NavBar from "./NavBar/navBar";

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar/>
      <Login/>
      <Switch>
        {/* <Route path="/api/auth" exact component={Login} />
        <Route path="/api/collections/profile" component={Profile} /> */}
      </Switch>
    </div>
  );
}

export default App;
