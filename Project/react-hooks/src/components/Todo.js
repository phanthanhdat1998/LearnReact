import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";
import { AuthContext } from "../contexts/AuthContext";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const Todo = () => {
  const { theme } = useContext(ThemeContext);
  const { isAuthenticated } = useContext(AuthContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;

  const { todos } = useContext(TodoContext);

  return (
    <div className="todo-list" style={style}>
      <TodoForm />
      {isAuthenticated ? (
        <ul>
          {todos.map((todo) => (
            <TodoItem todoProps={todo} key={todo.id} />
          ))}
        </ul>
      ) : (
        <p className="not-auth">Not authorised</p>
      )}
    </div>
  );
};

export default Todo;
