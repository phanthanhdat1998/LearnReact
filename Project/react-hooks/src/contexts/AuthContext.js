import React, { useState, useReducer, useEffect, createContext } from "react";
import { AuthReducer } from "../reducers/AuthReducer";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  //state
  // const [isAuthenticated, setAuthenticated] = useState(true);
  const [isAuthenticated, dispatch] = useReducer(AuthReducer, true);

  // const toggleAuth = () => {
  // setAuthenticated(!isAuthenticated);
  // };

  //use effect
  // useEffect(() => {
  //   alert(
  //     isAuthenticated
  //       ? "Login Successfully"
  //       : "You are logged out. Please login to see todos"
  //   );
  // }, [isAuthenticated]);

  //context data
  const authContextData = {
    isAuthenticated,
    // toggleAuth,
    dispatch,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
