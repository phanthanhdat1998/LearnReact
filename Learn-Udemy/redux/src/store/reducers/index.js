import { combineReducers } from "redux";
import currencyReducer from "./currencyReducer";

const rootReducer = combineReducers({
  myTodos: currencyReducer,
});

export default rootReducer;
