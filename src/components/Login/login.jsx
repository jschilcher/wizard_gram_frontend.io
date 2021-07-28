import React from 'react';
// import {Link} from "react-router-dom;"
import "../Login/login.css"

function Login(props) {
    return(
        <div className="container px-4 py-5 mx-auto">
            <div className="card card0"></div>
                <div className="d-flex flex-lg-row flex-column-reverse">
                    <div className="card card1">
                        <div className="row justify-content-center my-auto">
                            <div className="col-md-8 col-10 my-5">
                                {/* <div className="row justify-content-center px-3 mb-3"> <img id="logo" src="https://i.imgur.com/PSXxjNY.png"> </div> */}
                                <h3 className="mb-5 text-center heading">Wizard Gram</h3>
                                <h6 className="msg-info">Please login to your account</h6>
                                <div className="form-group"> <label className="form-control-label text-muted">Username</label> <input type="text" id="email" name="email" placeholder="Phone no or email id" className="form-control"/>
                                <div className="form-group"> <label className="form-control-label text-muted">Password</label> <input type="password" id="psw" name="psw" placeholder="Password" className="form-control"/> 
                                <div className="row justify-content-center my-3 px-3"> <button className="btn-block btn-color">Login to wizard gram</button> </div>
                                <div className="row justify-content-center my-2"> <a href="#"><small className="text-muted">Forgot Password?</small></a> </div>
                            </div>
                        </div>
                        <div className="bottom text-center mb-5">
                            <p href="#" className="sm-text mx-auto mb-3">Don't have an account?<button className="btn btn-white ml-2">Create new</button></p>
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
        </div>

    );
}

export default Login;

{/* {/* // const { Component } = React

// className EntryPage extends Component { */}
{/* //   constructor(props){ */}
//     super(props)
//     this.state = {
//       currentView: "signUp"
//     }
//   }

//   changeView = (view) => {
//     this.setState({
//       currentView: view
//     })
//   }

//   currentView = () => {
//     switch(this.state.currentView) {
//       case "signUp":
//         return (
//           <form>
//             <h2>Sign Up!</h2>
//             <fieldset>
//               <legend>Create Account</legend>
//               <ul>
//                 <li>
//                   <label for="username">Username:</label>
//                   <input type="text" id="username" required/>
//                 </li>
//                 <li>
//                   <label for="email">Email:</label>
//                   <input type="email" id="email" required/>
//                 </li>
//                 <li>
//                   <label for="password">Password:</label>
//                   <input type="password" id="password" required/>
//                 </li>
//               </ul>
//             </fieldset>
//             <button>Submit</button>
//             <button type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
//           </form>
//         )
//         break
//       case "logIn":
//         return (
//           <form>
//             <h2>Welcome Back!</h2>
//             <fieldset>
//               <legend>Log In</legend>
//               <ul>
//                 <li>
//                   <label for="username">Username:</label>
//                   <input type="text" id="username" required/>
//                 </li>
//                 <li>
//                   <label for="password">Password:</label>
//                   <input type="password" id="password" required/>
//                 </li>
//                 <li>
//                   <i/>
//                   <a onClick={ () => this.changeView("PWReset")} href="#">Forgot Password?</a>
//                 </li>
//               </ul>
//             </fieldset>
//             <button>Login</button>
//             <button type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
//           </form>
//         )
//         break
//       case "PWReset":
//         return (
//           <form>
//           <h2>Reset Password</h2>
//           <fieldset>
//             <legend>Password Reset</legend>
//             <ul>
//               <li>
//                 <em>A reset link will be sent to your inbox!</em>
//               </li>
//               <li>
//                 <label for="email">Email:</label>
//                 <input type="email" id="email" required/>
//               </li>
//             </ul>
//           </fieldset>
//           <button>Send Reset Link</button>
//           <button type="button" onClick={ () => this.changeView("logIn")}>Go Back</button>
//         </form>
//         )
//       default:
//         break
//     }
//   }


//   render() {
//     return (
//       <section id="entry-page">
//         {this.currentView()}
//       </section>
//     )
//   }
// }

// // export default Login;

// ReactDOM.render(<EntryPage/>, document.getElementById("app"))

 
