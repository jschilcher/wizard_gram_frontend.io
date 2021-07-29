import React from "react";
// import {Link} from "react-router-dom;"
import axios from "axios";
import "../Login/login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {},
      searchVal: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searchVal: event.target.value });
    console.log({ searchVal: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.searchVal);
  }

  async fetchUser() {
    let response = await axios.post(
      "http://localhost:5000/api/auth" /*varible data to be passed in*/
    );
    console.log(response.data);
  }

  render() {
    return (
      // <div className="container px-4 py-5 mx-auto">
      //   <div className="card card0"></div>
      //   <div className="d-flex flex-lg-row flex-column-reverse">
      //     <div className="card card1">
      //       <div className="row justify-content-center my-auto">
      //         <div className="col-md-8 col-10 my-5">
      //           {/* <div className="row justify-content-center px-3 mb-3"> <img id="logo" src="https://i.imgur.com/PSXxjNY.png"> </div> */}
      //           <h3 className="mb-5 text-center heading">Wizard Gram</h3>
      //           <h6 className="msg-info">Please login to your account</h6>
      //           <div className="form-group">
      //             {" "}
      //             <label className="form-control-label text-muted">
      //               Email
      //             </label>{" "}
      //             <input
      //               type="text"
      //               id="email"
      //               name="email"
      //               placeholder="Phone no or email id"
      //               className="form-control"
      //             />
      //             <div className="form-group">
      //               {" "}
      //               <label className="form-control-label text-muted">
      //                 Password
      //               </label>{" "}
      //               <input
      //                 type="password"
      //                 id="psw"
      //                 name="psw"
      //                 placeholder="Password"
      //                 className="form-control"
      //               />
      //               <div className="row justify-content-center my-3 px-3">
      //                 {" "}
      //                 <button
      //                   className="btn-block btn-color"
      //                   onClick={this.handleOnClick}
      //                 >
      //                   Login to wizard gram
      //                 </button>{" "}
      //               </div>
      //               <div className="row justify-content-center my-2">
      //                 {" "}
      //                 <a href="#">
      //                   <small className="text-muted">Forgot Password?</small>
      //                 </a>{" "}
      //               </div>
      //             </div>
      //           </div>
      //           <div className="bottom text-center mb-5">
      //             <p href="#" className="sm-text mx-auto mb-3">
      //               Don't have an account?
      //               <button className="btn btn-white ml-2">Create new</button>
      //             </p>
      //           </div>
      //         </div>
      //         <div className="card card2">
      //           <div className="my-auto mx-md-5 px-md-5 right">
      //             {/* <h3 className="text-white">Welcome to wizard gram</h3> <small className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small> */}
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input
          type="submit"
          value="Submit"
          searchVal={this.state.searchVal}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Login;
