import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { createTodo } from "../store/actions/todoActions";
import PropTypes from "prop-types";

const FormTodo = ({ createTodo }) => {
  const [title, setTitle] = useState("");
  const onTitleChange = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (title !== "") {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false,
      };
      // console.log(newTodo);
      createTodo(newTodo);
    }
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Add Title"
          name="title"
          value={title}
          onChange={onTitleChange}
        />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
};

FormTodo.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  createTodo,
};
export default connect(mapStateToProps, mapDispatchToProps)(FormTodo);
