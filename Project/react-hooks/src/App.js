import React from "react";
import ThemeContextProvider from "./contexts/ThemeContext";
import TodoContextProvider from "./contexts/TodoContext";
import AuthContextProvider from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ThemeToggle />
        <AuthContextProvider>
          <Navbar />
          <TodoContextProvider>
            <Todo />
          </TodoContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
};

export default App;
