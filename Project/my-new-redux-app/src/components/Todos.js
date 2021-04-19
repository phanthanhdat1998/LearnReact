import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTodos,
  todosSelector,
  markComplete,
  deleteTodo,
} from "../store/reducers/todosSlice";
import TodoForm from "./TodoForm";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);
  const toggleTodoCompleted = (id) => {
    // console.log("id", id);
    dispatch(markComplete(id));
  };
  const ondeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  useEffect(() => {
    //send request to jsonplaceholder
    dispatch(getTodos());
  }, [dispatch]);
  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.title}

            <input
              type="checkbox"
              checked={todo.completed}
              onChange={toggleTodoCompleted.bind(this, todo.id)}
            />
            <button onClick={ondeleteTodo.bind(this, todo.id)} type="button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
