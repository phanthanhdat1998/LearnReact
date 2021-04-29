import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(createLogger())
);

export default store;
