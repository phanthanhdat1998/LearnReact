import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { createTodo } from "../store/actions/todoActions";

const TodoForm = ({ createTodo }) => {
  const [title, setTitle] = useState("");
  const onTitleChange = (e) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false,
      };
      createTodo(newTodo);
      // console.log(newTodo);
      setTitle("");
    }
  };
  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onTitleChange}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

TodoForm.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { createTodo })(TodoForm);
