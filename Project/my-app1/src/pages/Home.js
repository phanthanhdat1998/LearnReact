import { useState } from "react";
import "../App.css";
import TodoItem from "../components/TodoItem";

const Home = () => {
  const arrayJob = [
    {
      title: "Choi game",
      complete: false,
    },
    {
      title: "Lap trinh",
      complete: true,
    },
    {
      title: "Di ngu",
      complete: false,
    },
    {
      title: "Xem phim",
      complete: false,
    },
    {
      title: "Nau an",
      complete: false,
    },
    {
      title: "Da banh",
      complete: false,
    },
  ];
  const [todoState, setTodoState] = useState(arrayJob);

  // const listTodo = [];

  // for (let todo of todoState) {
  //   listTodo.push(<li>{todo}</li>);
  // }
  // arrayJob.forEach((arrayJob) => {
  //   listTodo.push(<li>{arrayJob}</li>);
  // });
  // for (let i = 0; i < arrayJob.length; i++) {
  //   listTodo.push(<li>{arrayJob[i]}</li>);
  // }
  // const listTodo = arrayJob.map((job, key) => <li key={key}>{job}</li>);
  return (
    <div className="App-home">
      <h2 className="todoList">Todo List</h2>
      <ul>
        {
          todoState.map((todo, key) => {
            return <TodoItem todoProps={todo} key={key} />;
          })
          // todoState.map((todo) => {
          //   return <TodoItem todoProps={todo} />;
          // })
        }
      </ul>
    </div>
  );
};

export default Home;
