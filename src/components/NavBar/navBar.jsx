import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const NavBar = ({ user }) => {
  return (
    <div>
      {user && <h4>Welcome {user.username}</h4>}
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.PROFILE}>Profile</Link>
        </li>
        {!user && (
          <React.Fragment>
            <li>
              <Link to={ROUTES.REGISTER}>Register</Link>
            </li>
            <li>
              <Link to={ROUTES.LOGIN}>Login</Link>
            </li>
          </React.Fragment>
        )}
        {user && (
          <React.Fragment>
            <li>
              <Link to={ROUTES.LOGIN}>Logout</Link>
            </li>
          </React.Fragment>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
