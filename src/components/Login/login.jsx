import React from "react";
// import {Link} from "react-router-dom;"
import axios from "axios";
import "../Login/login.css";
import jwtDecode from "jwt-decode";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {},
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //dont forget bindings
  }

  componentDidMount() {
    this.fetchUser();

    const jwt = localStorage.getItem("token");
    try {
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch {}
  }

  componentDidUpdate() {
    console.log("We Did It!");
  }

  handleSubmit(event) {
    event.preventDefault();
    this.fetchUser();
    this.validateToken();
    console.log("handleSubmit triggered!");
    console.log(this.state.email);
    console.log(this.state.password);
  }

  handleChange(event) {
    this.setState({
      email: document.getElementById("email").value,
      password: document.getElementById("psw").value,
    });
  }

  async fetchUser() {
    let login = { email: this.state.email, password: this.state.password };
    let response = await axios.post("http://localhost:5000/api/auth", login);
    console.log("response", response.data);
    localStorage.setItem("token", response.data);
  }

  async validateToken() {
    try {
      const jwt = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:5000/api/collections/user",
        { headers: { "x-auth-token": jwt } }
      );
      console.log("That's one valid Token you got there", response.data);
    } catch (error) {
      console.log("Token validation has taken a major L", error);
    }
  }

  render() {
    return (
      <div className="container px-4 py-5 mx-auto">
        <div className="card card0"></div>
        <div className="d-flex flex-lg-row flex-column-reverse">
          <div className="card card1">
            <div className="row justify-content-center my-auto">
              <div className="col-md-8 col-10 my-5">
                {/* <div className="row justify-content-center px-3 mb-3"> <img id="logo" src="https://i.imgur.com/PSXxjNY.png"> </div> */}
                <h3 className="mb-5 text-center heading">Wizard Gram</h3>
                <h6 className="msg-info">Please login to your account</h6>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    {" "}
                    <label className="form-control-label text-muted">
                      Email
                    </label>{" "}
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                    <div className="form-group">
                      {" "}
                      <label className="form-control-label text-muted">
                        Password
                      </label>{" "}
                      <input
                        type="password"
                        id="psw"
                        name="psw"
                        placeholder="Password"
                        className="form-control"
                        onChange={this.handleChange}
                      />
                      <div className="row justify-content-center my-3 px-3">
                        <input
                          className="btn-block btn-color"
                          type="submit"
                          value="Login"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="bottom text-center mb-5">
                <p href="#" className="sm-text mx-auto mb-3">
                  Don't have an account?
                  <button className="btn btn-white ml-2">Create new</button>
                </p>
              </div>
            </div>
            <div className="card card2">
              <div className="my-auto mx-md-5 px-md-5 right">
                {/* <h3 className="text-white">Welcome to wizard gram</h3> <small className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
