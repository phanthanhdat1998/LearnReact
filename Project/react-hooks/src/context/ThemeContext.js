import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const listTheme = {
    islightTheme: true,
    light: {
      background: "rgb(219, 219, 219)",
      color: "#000",
    },
    dark: {
      background: "rgb(39,39,39)",
      color: "#fff",
    },
  };
  //State
  const [theme, setTheme] = useState(listTheme);

  //Context data
  const themeContextData = {
    theme,
  };
  //Return provider

  return (
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
