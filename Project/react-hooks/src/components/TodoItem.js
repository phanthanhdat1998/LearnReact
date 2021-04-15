import React from 'react'
import PropTypes from "prop-types";


const TodoItem = ({ todoProps,deleteTodoItem }) => <li className="todo-item" onClick={()=>{deleteTodoItem(todoProps.id)}}>{todoProps.title}</li>

// PropTypes
TodoItem.propTypes = {
    todoProps: PropTypes.object.isRequired,
    deleteTodoItem:PropTypes.func.isRequired
  };
  

export default TodoItem
