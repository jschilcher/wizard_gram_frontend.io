import React, { Component } from "react";
import axios from "axios";
import Title from "./Title/title";
import "../components/app.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Login/login";
import Profile from '../components/Profile/profile'

function App() {
  return (
    <div className="App">
      <Title />
      <Login />
      <Profile />
      <Switch>
        {/* <Route path="/user" exact component={Title} /> */}
        {/* <Route path="/profile" exact component={Profile} /> */}
      </Switch>
    </div>
  );
}

export default App;
