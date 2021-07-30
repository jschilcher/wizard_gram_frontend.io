import React, { Component } from "react";
import axios from "axios";
import Title from "./Title/title";
import "../components/app.css";
import { Switch, Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Login from "./Login/login";
import Profile from "./Profile/profile";
import NavBar from "./NavBar/navBar";
import Register from "./Register/register";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    componentDidMount() {
        const jwt = localStorage.getItem("token");
        try{
            const user = jwtDecode(jwt);
            this.setstate({
                user
            });
        } catch {

        }
    }
    render() {    
        const user = this.state.user;
  return (
    <div className="App">
      <Title />
      <NavBar user={user} />
      <Switch>
        {/* <Route path="/login" exact component={Login} /> */}
        <Route path="/profile" component={Profile} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" component={Register} />
        
      </Switch>
    </div>
  );
    }
}

export default App;
