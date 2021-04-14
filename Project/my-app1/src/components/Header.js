import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import "../App.css";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Header = () => {
  return (
    <header className="header">
      <Router>
        <div>
          <Navbar bg="light" expand="md">
            <Navbar.Brand href="/">App Todo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="/" className="active">
                  Home
                </Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </header>
  );
};

export default Header;
