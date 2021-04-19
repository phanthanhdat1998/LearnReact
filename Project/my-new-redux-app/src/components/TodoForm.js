import React, { useState } from "react";
import { addTodo } from "../store/reducers/todosSlice";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== "") {
      dispatch(addTodo(title));
      setTitle("");
    }
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={changeTitle} />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
};

export default TodoForm;
