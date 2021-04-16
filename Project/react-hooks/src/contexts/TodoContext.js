import React, { createContext, useReducer, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import { TodoReducer } from "../reducers/TodoReducer";
import { GET_TODOS, SAVE_TODOS } from "../reducers/types";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  // const listTodo = [
  //   { id: uuidv4(), title: "Viec lam 1", complete: false },
  //   { id: uuidv4(), title: "Viec lam 2", complete: false },
  //   { id: uuidv4(), title: "Viec lam 3", complete: false },
  //   { id: uuidv4(), title: "Viec lam 4", complete: false },
  //   { id: uuidv4(), title: "Viec lam 5", complete: false },
  // ];
  // const listTodo = [];
  // const [todos, setTodos] = useState(listTodo);

  const [todos, dispatch] = useReducer(TodoReducer, []);

  // use effect
  useEffect(() => {
    dispatch({
      type: GET_TODOS,
      payload: null,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: SAVE_TODOS,
      payload: { todos },
    });
  }, [todos]);

  // const addTodo = (todo) => {
  //   setTodos([...todos, todo]);
  // };
  // const deleteTodoItem = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  const todoContextData = {
    todos,
    dispatch,
  };

  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
