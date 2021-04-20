import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

// Reducer thunk
export const getTodos = createAsyncThunk("todos/todosFetched", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos/", {
    params: {
      _limit: 5,
    },
  });
  return res.data;
});
export const addTodo = createAsyncThunk("todos/todoAdded", async (title) => {
  const newTodo = {
    id: nanoid(),
    title,
    completed: false,
  };
  await axios.post("https://jsonplaceholder.typicode.com/todos/", newTodo);
  return newTodo;
});
export const deleteTodo = createAsyncThunk("todos/todoDeleted", async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return id;
});
const todosSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [],
  },
  reducers: {
    // todosFetched(state, action) {
    //   state.allTodos = action.payload;
    // },
    // addTodo: {
    //   reducer(state, action) {
    //     state.allTodos.unshift(action.payload);
    //   },
    //   prepare(title) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         title,
    //         completed: false,
    //       },
    //     };
    //   },
    // },
    markComplete(state, action) {
      const todoId = action.payload;
      state.allTodos = state.allTodos.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      });
    },
    // deleteTodo(state, action) {
    //   const todoId = action.payload;
    //   state.allTodos = state.allTodos.filter((todo) => todo.id !== todoId);
    // },
  },
  extraReducers: {
    // Get all todos
    [getTodos.pending]: (state, action) => {
      console.log("Fetching todos from backend ...");
    },
    [getTodos.fulfilled]: (state, action) => {
      console.log("Done");
      state.allTodos = action.payload;
    },
    [getTodos.rejected]: (state, action) => {
      console.log("Failed to get todos !!!");
    },
    // Add todo
    [addTodo.fulfilled]: (state, action) => {
      console.log("Done");
      state.allTodos.unshift(action.payload);
    },
    //Delete todo
    [deleteTodo.fulfilled]: (state, action) => {
      console.log("Done");
      const todoId = action.payload;
      state.allTodos = state.allTodos.filter((todo) => todo.id !== todoId);
    },
  },
});
/*
Async action creator, action and reducer dispatch

//Cach 1
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


//Cach 2
export const getTodos = () => async (dispatch) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/", {
      params: {
        _limit: 7,
      },
    });
    dispatch(todosFetched(res.data));
  } catch (error) {
    console.error(error);
  }
};
*/
// Reducers
const todosReducer = todosSlice.reducer;

// Selector
export const todosSelector = (state) => state.todos.allTodos;

// Action export
export const {
  // todosFetched,
  // addTodo,
  markComplete,
  // deleteTodo,
} = todosSlice.actions;

export default todosReducer;
