import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import axios from "axios";
import "../Register/register.css";

const Register = (props) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory("/profile");
  let specificUser;
  // let [jwt,setJWT] = useState(localStorage.getItem("token"));

  useEffect(() => {
    document.title = "Register - WizardGram";
  }, []);

  // Just a workaround not intended for live use
  // useEffect(() => {
  //   fetchAllUsers();
  // }, []);

  // const fetchAllUsers = async (event) => {
  //   await axios
  //     .get("http://localhost:5000/api/collections/user")
  //     .then((response) => {
  //       localStorage.setItem("token", response.data);
  //       setJWT()
  //       console.log(jwt);
  //     });
  // };
  // End of workaround

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let loginInfo = {
        firstName: firstname,
        lastName: lastname,
        username: username,
        email: email,
        password: password,
      };
      // console.log(jwt);
      await axios.post(
        "http://localhost:5000/api/collections/user",
        // headers: { "x-auth-token": jwt },
        loginInfo
      );

      alert(
        "You have successfully registered your account! Please Click 'OK' to continue to login page."
      );
      history.push(ROUTES.LOGIN);
    } catch {
      localStorage.removeItem(specificUser);
      console.log("HandleSubmit has failed");
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
                    placeholder="First nName"
                    required
                    autoFocus
                    onChange={({ target }) => setFirstName(target.value)}
                  />
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInputLastname"
                    placeholder="Last Name"
                    required
                    autoFocus
                    onChange={({ target }) => setLastName(target.value)}
                  />
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInputUsername"
                    placeholder="Username"
                    required
                    autoFocus
                    onChange={({ target }) => setUserName(target.value)}
                  />
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInputEmail"
                    placeholder="Email Address"
                    onChange={({ target }) => setEmail(target.value)}
                  />
                </div>

                <hr />

                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={({ target }) => setPassword(target.value)}
                  />
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
