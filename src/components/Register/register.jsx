import React, { useState} from 'react';
import { Redirect } from "react-router-dom";
import axios from "axios";
import "../Register/register.css";

const Register = () => {

    const [userData, setUserData] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validToken, setValidToken] = useState(true);
  
    const handleChange = (event) => {
        setFirstName(document.getElementById("floatingInputFirstname").value);
        setLastName(document.getElementById("floatingInputLastname").value);
        setUserName(document.getElementById("floatingInputUsername").value);
      setEmail(document.getElementById("floatingInputEmail").value);
      setPassword(document.getElementById("floatingPassword").value);
    };

    const displayEnteredValues = () => {
        console.log("handleSubmit triggered!");
        console.log("Email address entered", userName);
        console.log("Email address entered", email);
        console.log("Password entered", password);
      };

      const fetchToken = async () => {
        let register = { firstname: firstName, lastname: lastName , username: userName ,email: email, password: password };
        let response = await axios.post("http://localhost:5000/api/collections/user", register);
        console.log("response", response.data);
        localStorage.setItem("token", response.data);
      };
    
      const validateToken = async () => {
        try {
          const jwt = localStorage.getItem("token");
          const response = await axios.get(
            "http://localhost:5000/api/collections/user",
            { headers: { "x-auth-token": jwt } }
          );
          console.log("Token validation is successful", response.data);
          setValidToken(true);
          return response;
        } catch (error) {
          console.log("Token validation has failed", error);
        }
      };
    
      const justAFunction = async (response) => {
        try {
          setUserData(await validateToken.call(response));
          console.log("Here is the userData", userData);
          loginRedirectOrFailure();
        } catch (error) {}
      };
    
      const loginRedirectOrFailure = async () => {
        if (validToken) {
          return <Redirect to="/profile" />;
        } else {
          console.log("Login Attempt Failed. Please Try Again");
        }
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        displayEnteredValues();
        fetchToken();
        justAFunction();
      };

    return (
        
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 col-xl-9 mx-auto">
                        <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                            <div class="card-img-left d-none d-md-flex">
                
                            </div>
                            <div class="card-body p-4 p-sm-5">
                            <h5 class="card-title text-center mb-5 fw-light fs-5">Register</h5>
                            <form onSubmit={handleSubmit}>

                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInputFirstname" placeholder="my firstname" required autoFocus onChange={handleChange}/>
                                    <label for="floatingInputFirstname">First Name</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInputLastname" placeholder="my lastname" required autoFocus onChange={handleChange}/>
                                    <label for="floatingInputLastname">Last Name</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInputUsername" placeholder="myusername" required autoFocus onChange={handleChange}/>
                                    <label for="floatingInputUsername">Username</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInputEmail" placeholder="name@example.com" onChange={handleChange}/>
                                    <label for="floatingInputEmail">Email address</label>
                                </div>

                                <hr/>

                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange}/>
                                    <label for="floatingPassword">Password</label>
                                </div>

                                <div class="d-grid mb-2">
                                    <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Register</button>
                                </div>

                                <a class="d-block text-center mt-2 small" href="#">Have an account? Sign In</a>

                                <hr class="my-4"/>

                                <div class="d-grid mb-2">
                                <button class="btn btn-lg btn-google btn-login fw-bold text-uppercase" type="submit">
                                    <i class="fab fa-google me-2"></i> Sign up with Google
                                </button>  
                            </div>
                            </form>

                            <div class="d-grid">
                                <button class="btn btn-lg btn-facebook btn-login fw-bold text-uppercase" type="submit">
                                    <i class="fab fa-facebook-f me-2"></i> Sign up with Facebook
                                </button>
                            </div>

                        
                    </div>
                </div>
             </div>
         </div>
         </div>
   

    );
}
export default Register;

