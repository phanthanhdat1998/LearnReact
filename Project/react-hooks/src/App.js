import React from "react";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import ThemeContextProvider from "./context/ThemeContext";

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Todo />
      </ThemeContextProvider>
    </div>
  );
};

export default App;
