import { React, useState } from "react";
import PropTypes from "prop-types";
import "../App.css";

const TodoItem = (props) => {
  const [titleState, setTitleState] = useState("");
  // const todo = props.todoProps;
  const addTodo = props.addTodoFun;
  const changeTitle = (e) => {
    setTitleState(e.target.value);
  };
  const addSingleTodo = (e) => {
    e.preventDefault();
    if (titleState !== "") {
      addTodo(titleState);
      setTitleState("");
    }
  };
  return (
    <form onSubmit={addSingleTodo}>
      <div className="form-group">
        <input
          type="text"
          name="title"
          id="nameTodo"
          value={titleState}
          onChange={changeTitle}
          placeholder="Name todo"
          autoComplete="off"
        />
        <input type="submit" value="Add Todo" />
      </div>
    </form>
  );
};

// PropTypes
TodoItem.propTypes = {
  todoProps: PropTypes.object.isRequired,
  addTodoFun: PropTypes.func.isRequired,
};

export default TodoItem;
