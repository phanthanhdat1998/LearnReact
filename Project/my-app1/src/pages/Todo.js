import { React, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../App.css";
import TodoItem from "../components/TodoItem";
import AddTodo from "../components/AddTodo";

const Home = () => {
  const arrayJob = [
    {
      id: uuidv4(),
      title: "Choi game",
      complete: false,
    },
    {
      id: uuidv4(),
      title: "Lap trinh",
      complete: false,
    },
    {
      id: uuidv4(),
      title: "Di ngu",
      complete: false,
    },
    {
      id: uuidv4(),
      title: "Xem phim",
      complete: false,
    },
    {
      id: uuidv4(),
      title: "Nau an",
      complete: false,
    },
    {
      id: uuidv4(),
      title: "Da banh",
      complete: false,
    },
  ];
  const [todoState, setTodoState] = useState(arrayJob);

  const markComplete = (id) => {
    const newTodos = todoState.map((todo) => {
      if (todo.id === id) todo.complete = !todo.complete;
      return todo;
    });
    setTodoState(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todoState.filter((todo) => {
      return todo.id !== id;
    });
    setTodoState(newTodos);
  };

  const addTodo = (title) => {
    const newTodos = [
      ...todoState,
      { title: title, id: uuidv4(), complete: false },
    ];
    setTodoState(newTodos);
  };
  return (
    <div className="App-home">
      <AddTodo addTodoFun={addTodo} />
      <h2 className="todoList">Todo List</h2>
      <ul>
        {todoState.map((todo) => {
          return (
            <TodoItem
              todoProps={todo}
              key={todo.id}
              markCompleteFun={markComplete}
              deleteTodoFun={deleteTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
