import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";
import { TOGGLE_AUTH } from "../reducers/types";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { isAuthenticated, dispatch } = useContext(AuthContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;

  return (
    <div className="navbar" style={style}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          {isAuthenticated ? <span>You are logged in!</span> : ""}
          <button
            type="button"
            onClick={() => {
              dispatch({ type: TOGGLE_AUTH });
            }}
          >
            {!isAuthenticated ? "Login" : "Logout"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
