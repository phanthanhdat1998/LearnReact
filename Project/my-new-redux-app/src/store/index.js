import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/todosSlice";

// Store
const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

// Export
export default store;
