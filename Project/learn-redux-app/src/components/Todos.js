import React from "react";
import { connect } from "react-redux";
import { markComplete } from "../store/actions/todoActions";
import PropTypes from "prop-types";
import FormTodo from "./FormTodo";

const Todos = ({ todos, markComplete }) => {
  return (
    <div className="todo-list">
      <FormTodo />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.title}
            <input
              type="checkbox"
              onChange={markComplete.bind(this, todo.id)}
            />
            <button type="button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});

const mapDispatchToProps = {
  markComplete,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
