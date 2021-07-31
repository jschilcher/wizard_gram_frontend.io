import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import login from "../app";
import "../Register/register.css";

const Register = (props) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const history = useHistory("/profile");

  const handleSubmit = async (event) => {
    //...
    event.preventDefault();
    //Make API call to function
    let response = await axios.post("http://localhost:5000/api/auth", {
      body: JSON.stringify({ firstname, lastname, username, email, password }),
    });
    //...
    // Extract the JWT from the response
    const { jwt_token } = await response.json();
    //...
    // If token was received, then perform login from app.js
    await login({ jwt_token });

    setRedirect(true);
    //...
    // Redirect user to Profile page
    if (redirect) {
      history.push("/profile");
    }
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-xl-9 mx-auto">
          <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
            <div class="card-img-left d-none d-md-flex"></div>
            <div class="card-body p-4 p-sm-5">
              <h5 class="card-title text-center mb-5 fw-light fs-5">
                Register
              </h5>
              <form onSubmit={handleSubmit}>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInputFirstname"
                    placeholder="my firstname"
                    required
                    autoFocus
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <label for="floatingInputFirstname">First Name</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInputLastname"
                    placeholder="my lastname"
                    required
                    autoFocus
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                  <label for="floatingInputLastname">Last Name</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInputUsername"
                    placeholder="myusername"
                    required
                    autoFocus
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                  <label for="floatingInputUsername">Username</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInputEmail"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <label for="floatingInputEmail">Email address</label>
                </div>

                <hr />

                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <div class="d-grid mb-2">
                  <button
                    class="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                    type="submit"
                  >
                    Register
                  </button>
                </div>

                <a class="d-block text-center mt-2 small" href="/profile">
                  Have an account? Sign In
                </a>

                <hr class="my-4" />

                <div class="d-grid mb-2">
                  <button
                    class="btn btn-lg btn-google btn-login fw-bold text-uppercase"
                    type="submit"
                  >
                    <i class="fab fa-google me-2"></i> Sign up with Google
                  </button>
                </div>
              </form>

              <div class="d-grid">
                <button
                  class="btn btn-lg btn-facebook btn-login fw-bold text-uppercase"
                  type="submit"
                >
                  <i class="fab fa-facebook-f me-2"></i> Sign up with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
