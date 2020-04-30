import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
          <Link className="navlink" to="/">
            <h3>Karma Journey</h3>
          </Link>
    </nav>
  );
}

export default Navbar;
