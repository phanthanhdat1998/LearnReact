import React,{useState} from 'react'
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
const TodoForm = ({addTodoFunc}) => {
  const [title,setTitle] = useState("");
  const onTitleChange =(e)=>{
    setTitle(e.target.value);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    addTodoFunc({id:uuidv4(),title,complete:false},);
    setTitle("");
  }
  return (
    <form className="form-todo" onSubmit={handleSubmit}>
      <input type="text" name="title" onChange={onTitleChange} value={title} placeholder="Enter name todo ..." required autoComplete="false"/>
      <input type="submit" value="Add Todo" />
    </form>
  );
};
// PropTypes
TodoForm.propTypes = {
    addTodoFunc: PropTypes.func.isRequired,
  }

export default TodoForm;
