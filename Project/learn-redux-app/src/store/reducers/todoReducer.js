import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_TODO":
      return {
        ...state,
        todos: payload,
      };

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

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
