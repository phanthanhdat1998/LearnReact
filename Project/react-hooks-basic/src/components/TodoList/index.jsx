import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import queryString from "query-string";
import PostList from "./PostList";
import Pagination from "./Pagination";
import PostFiltersForm from "./PostFiltersForm";

const TodoList = () => {
  const TodoList = [
    { id: uuidv4(), title: "viec 1" },
    { id: uuidv4(), title: "viec 2" },
    { id: uuidv4(), title: "viec 3" },
  ];
  const [todos, setTodo] = useState(TodoList);
  const [postList, setpostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 50,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });
  useEffect(() => {
    const getPostList = async () => {
      try {
        const paramString = queryString.stringify(filters);
        const res = await axios.get(
          `http://js-post-api.herokuapp.com/api/posts?${paramString}`
        );
        // console.log(res.data.pagination);
        setpostList(res.data.data);
        setPagination(res.data.pagination);
      } catch (error) {
        if (error.response) {
          if (error.response === 404) {
          }
          console.log("client received an error response (5xx, 4xx)");
          // client received an error response (5xx, 4xx)
        } else if (error.request) {
          console.log(
            "client never received a response, or request never left"
          );
          // client never received a response, or request never left
        } else {
          console.log(" anything else");
          // anything else
        }
      }
    };
    getPostList();
  }, [filters]);
  const handlePageChange = (newPage) => {
    console.log("newPage", newPage);
    setFilters({ ...filters, _page: newPage });
  };
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
  const addTodo = (title) => {
    const newTodos = [
      ...todos,
      {
        id: uuidv4(),
        title,
      },
    ];
    setTodo(newTodos);
  };
  const handleFiltersChange = (newFilters) => {
    console.log("newFilters", newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  };

  return (
    <ul className="todo-list">
      <h2>React hooks - Post list</h2>
      {/* <TodoForm addTodoFun={addTodo} />
      {todos.map((todo) => {
        return (
          <TodoItem todosProp={todo} key={todo.id} onTodoClick={handleClick} />
        );
      })} */}
      <PostFiltersForm onSubmitSearch={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </ul>
  );
};

export default TodoList;
