import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

const Navbar = ({ todos }) => {
  const lengthTodo = todos.length;
  return (
    <div className="navbar">
      <h1>My react todo app</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Total todos: {lengthTodo}</li>
      </ul>
    </div>
  );
};

Navbar.protoType = {
  todos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});

export default connect(mapStateToProps, { mapStateToProps })(Navbar);
