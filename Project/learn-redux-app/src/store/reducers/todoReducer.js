import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [
    { id: uuidv4(), title: "Viec 1", completed: false },
    { id: uuidv4(), title: "Viec 2", completed: false },
    { id: uuidv4(), title: "Viec 3", completed: false },
    { id: uuidv4(), title: "Viec 4", completed: false },
    { id: uuidv4(), title: "Viec 5", completed: false },
  ],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "MARK_COMPLETE":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload) todo.completed = !todo.completed;
          return todo;
        }),
      };
    case "CREATE_TODO":
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    default:
      return state;
  }
};

export default todoReducer;
