import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  markComplete,
  deleteTodo,
  getTodo,
} from "../store/actions/todoActions";
import PropTypes from "prop-types";
import FormTodo from "./FormTodo";

const Todos = ({ todos, getTodo, markComplete, deleteTodo }) => {
  useEffect(() => {
    getTodo();
  }, []);

  const handleDelete = (id) => deleteTodo(id);

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
            <button type="button" onClick={handleDelete.bind(this, todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  getTodo: PropTypes.func.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});

const mapDispatchToProps = {
  getTodo,
  markComplete,
  deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
