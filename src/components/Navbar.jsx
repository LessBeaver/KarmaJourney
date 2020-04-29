import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="flex-row">
        <li>
          <Link to="/">
            <p>Menu</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
