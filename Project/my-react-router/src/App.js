import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import About from "./components/About";
import Error from "./components/Error";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/about" component={About} />
        <Route path="*" component={Error} />
        {/* <Route path="" component={Error} />
      <Route component={Error} /> */}
      </Switch>
    </Router>
  );
};

export default App;
