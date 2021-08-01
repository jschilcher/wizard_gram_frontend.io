import React from "react";
import { Switch, Route } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import Title from "./Title/title";
import Login from "./Login/login";
import Profile from "./Profile/profile";
import NavBar from "./NavBar/navBar";
import Register from "./Register/register";
import "../components/app.css";
// import jwtDecode from "jwt-decode";

export default function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />
      <Switch>
        <Route path={ROUTES.PROFILE} component={Profile} />
        <Route path={ROUTES.LOGIN} exact component={Login} />
        <Route path={ROUTES.REGISTER} component={Register} />
      </Switch>
    </div>
  );
}
