import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodoFun }) => {
  const [title, setTitle] = useState("");
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!addTodoFun) return;
    if (title !== "") {
      addTodoFun(title);
      setTitle("");
    }
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={onChangeTitle}
        value={title}
        name="title"
        id=""
      />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

TodoForm.propTypes = {
  addTodoFun: PropTypes.func,
};

TodoForm.defaultProps = {
  addTodoFun: null,
};

export default TodoForm;
