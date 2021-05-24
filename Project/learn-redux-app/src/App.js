import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
