import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const TodoList = [
    { id: 1, title: "viec 1" },
    { id: 2, title: "viec 2" },
    { id: 3, title: "viec 3" },
    { id: 4, title: "viec 4" },
    { id: 5, title: "viec 5" },
  ];
  const [todos, setTodo] = useState(TodoList);
  const handleClick = (todoprop) => {
    // const newTodos = todos.filter((todo) => {
    //   return todo.id !== todoprop.id;
    // });
    const index = todos.findIndex((x) => x.id === todoprop.id);
    if (index < 0) return;
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodo(newTodos);
    // console.log(todoprop);
  };
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <TodoItem todosProp={todo} key={todo.id} onTodoClick={handleClick} />
        );
      })}
    </ul>
  );
};

export default TodoList;
