import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <nav>
            <ul>
                <Link to="/api/collections">
                    <li>Home</li>
                </Link>
                <Link to="/api/collections/user">
                    <li>User</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar;