import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { DELETE_TODO } from "../reducers/types";

const TodoItem = ({ todoProps }) => {
  const { dispatch } = useContext(TodoContext);
  return (
    <li
      className="todo-item"
      onClick={() => {
        dispatch({
          type: DELETE_TODO,
          payload: { id: todoProps.id },
        });
      }}
    >
      {todoProps.title}
    </li>
  );
};

export default TodoItem;
