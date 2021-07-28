import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <nav>
            <ul>
                <Link to="/profile">
                    <li>Profile</li>
                </Link>
                <Link to="/login">
                    <li>Login</li>
                </Link>
                <Link to="/register">
                    <li>Register</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar;
