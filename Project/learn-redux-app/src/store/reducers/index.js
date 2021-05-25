import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import photoReducer from "./photoReducer";

const rootReducer = combineReducers({
  myTodos: todoReducer,
  photos: photoReducer,
});

export default rootReducer;
