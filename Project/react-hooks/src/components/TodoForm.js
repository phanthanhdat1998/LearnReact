import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../contexts/TodoContext";
import { ADD_TODO } from "../reducers/types";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const { dispatch } = useContext(TodoContext);

  //For this component only
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: {
        todo: {
          id: uuidv4(),
          title,
        },
      },
    });
    setTitle("");
  };
  return (
    <form className="form-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        onChange={onTitleChange}
        value={title}
        placeholder="Enter name todo ..."
        required
        autoComplete="false"
      />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

export default TodoForm;
