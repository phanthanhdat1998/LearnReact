import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Navigation = () => {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-link">
        <li>
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          <Link to="/products">Products</Link>{" "}
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
