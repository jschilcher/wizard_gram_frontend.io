import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <div>
      {user && <h4>Welcome {user.username}</h4>}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        {!user && (
          <React.Fragment>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </React.Fragment>
        )}
        {user && (
          <React.Fragment>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </React.Fragment>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
