import React, { useState, useEffect /*, PropTypes*/ } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import * as ROUTES from "../../constants/routes";
import axios from "axios";
import "../Login/login.css";

const Login = (props) => {
  const [userData, setUserData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  let specificUser;
  let username;

  // Will research TailWind CSS later since its a better bootstrap experience

  useEffect(() => {
    document.title = "Login - WizardGram";
  }, []);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async (event) => {
    await axios
      .get("http://localhost:5000/api/collections/user")
      .then((response) => {
        setUserData(response.data);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      specificUser = userData.filter(function (el) {
        return email === el.email;
      });
      localStorage.setItem("specificUser", JSON.stringify(specificUser));
      setUserData(specificUser);
      history.push(ROUTES.PROFILE);
    } catch {
      localStorage.removeItem(userData);
      setUserData(null);
      console.log("HandleSubmit has failed");
    }
  };

  return (
    <div className="login container px-4 py-5 mx-auto">
      <div className="card card0"></div>
      <div className="d-flex flex-lg-row flex-column-reverse">
        <div className="card card1">
          <div className="row justify-content-center my-auto">
            <div className="col-md-8 col-10 my-5">
              {/* <div className="row justify-content-center px-3 mb-3"> <img id="logo" src="https://i.imgur.com/PSXxjNY.png"> </div> */}
              <h3 className="mb-5 text-center heading">Wizard Gram</h3>
              <h6 className="msg-info">Please login to your account</h6>
              <form onSubmit={handleSubmit} method="POST">
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
                    onChange={({ target }) => setEmail(target.value)}
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
                      onChange={({ target }) => setPassword(target.value)}
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
};

export default Login;

//  const fetchToken = () =>{
//      //Make API call to function
//   let response = axios.post(
//     "http://localhost:5000/api/auth",
//     loginInfo
//   );
// console.log(response);

//...
// Extract the JWT from the response
// const { jwt_token } = response.data;

// Now fetchUser
