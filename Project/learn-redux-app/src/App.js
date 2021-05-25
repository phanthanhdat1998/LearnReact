import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import Photos from "./components/Photos";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Photos />
    </Provider>
  );
}

export default App;
