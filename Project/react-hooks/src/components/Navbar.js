import React, { useContext } from "react";
import ThemeContextProvider from "../context/ThemeContext";

const Navbar = () => {
  const testContext = useContext(ThemeContextProvider);
  console.log(testContext);
  return (
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Navbar;
