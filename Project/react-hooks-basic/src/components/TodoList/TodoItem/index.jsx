import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todosProp, onTodoClick }) => {
  return (
    <li className="todo-item" onClick={() => onTodoClick(todosProp)}>
      {todosProp.title}
    </li>
  );
};

TodoItem.propTypes = {
  todosProp: PropTypes.any,
  onTodoClick: PropTypes.func,
};

TodoItem.defaultProps = {
  todosProp: [],
  onTodoClick: null,
};

export default TodoItem;
