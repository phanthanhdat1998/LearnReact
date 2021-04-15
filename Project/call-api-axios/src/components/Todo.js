import { React, useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "../components/TodoItem";
import AddTodo from "../components/AddTodo";
import "../App.css";

const Home = () => {
  const arrayJob = [];
  const [todoState, setTodoState] = useState(arrayJob);
  //   const baseURL;
  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos/",
          {
            params: {
              _limit: 7,
            },
          }
        );
        setTodoState(res.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    getTodos();
  }, []);

  const markComplete = (id) => {
    const newTodos = todoState.map((todo) => {
      if (todo.id === id) todo.complete = !todo.complete;
      return todo;
    });
    setTodoState(newTodos);
  };

  const deleteTodo = async (id) => {
    try {
      await axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
      const newTodos = todoState.filter((todo) => todo.id !== id);
      setTodoState(newTodos);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addTodo = async (title) => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos/",
        {
          title,
          complete: false,
        }
      );
      const newTodos = [...todoState, res.data];
      setTodoState(newTodos);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="Todo">
      <h1>App Todo</h1>
      <AddTodo addTodoFun={addTodo} />
      <h3 className="todoList">Todo List</h3>
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
