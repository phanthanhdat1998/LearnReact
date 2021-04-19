import { createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [],
  },
  reducers: {
    todosFetched(state, action) {
      state.allTodos = action.payload;
    },
    addTodo: {
      reducer(state, action) {
        state.allTodos.unshift(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          },
        };
      },
    },
    markComplete(state, action) {
      const todoId = action.payload;
      state.allTodos = state.allTodos.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      });
    },
    deleteTodo(state, action) {
      const todoId = action.payload;
      state.allTodos = state.allTodos.filter((todo) => todo.id !== todoId);
    },
  },
});

//Async action creator, action and reducer dispatch
export const getTodos = () => {
  const getTodosAsync = async (dispatch) => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/",
        {
          params: {
            _limit: 7,
          },
        }
      );
      dispatch(todosFetched(res.data));
    } catch (error) {
      console.error(error);
    }
  };
  return getTodosAsync;
};

// Reducers
const todosReducer = todosSlice.reducer;

// Selector
export const todosSelector = (state) => state.todos.allTodos;

// Action export
export const {
  todosFetched,
  addTodo,
  markComplete,
  deleteTodo,
} = todosSlice.actions;

export default todosReducer;
