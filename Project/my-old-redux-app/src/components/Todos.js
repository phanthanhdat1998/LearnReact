import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import TodoForm from "./TodoForm";

const Todos = ({ todos }) => {
  const listTodo = [];
  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <input type="checkbox" />
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Todos.protoType = {
  todos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});

export default connect(mapStateToProps, { mapStateToProps })(Todos);
