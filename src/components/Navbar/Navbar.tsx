import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar" data-test="navbar">
            <li className="navlink">WHY US</li>
            <li className="navlink">PROJECTS</li>
            <li className="navlink">ABOUT US</li>
        </div>
    );
}
export default Navbar;
