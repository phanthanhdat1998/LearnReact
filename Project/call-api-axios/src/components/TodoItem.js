import { React } from "react";
import PropTypes from "prop-types";
import "../App.css";

const TodoItem = (props) => {
  const todo = props.todoProps;
  const markComplete = props.markCompleteFun;
  const deleteTodo = props.deleteTodoFun;
  const todoItemStyle = {
    textDecoration: todo.complete ? "line-through" : "none",
  };
  return (
    <li style={todoItemStyle}>
      <input
        className="checkbox-todo"
        onChange={() => markComplete(todo.id)}
        type="checkbox"
        checked={todo.complete}
      />
      {todo.title}
      <input
        className="delete-todo"
        type="button"
        name=""
        id=""
        value="Delete"
        onClick={() => deleteTodo(todo.id)}
      />
    </li>
  );
};

// PropTypes
TodoItem.propTypes = {
  todoProps: PropTypes.object.isRequired,
  markCompleteFun: PropTypes.func.isRequired,
  deleteTodoFun: PropTypes.func.isRequired,
};

export default TodoItem;
