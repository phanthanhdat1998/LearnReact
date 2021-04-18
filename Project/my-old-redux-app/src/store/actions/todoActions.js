import axios from "axios";
import { GET_TODOS, MARK_COMPLETE, ADD_TODO, DELETE_TODO } from "./types";
// export const markComplete = () => {
//   const markCompleteAction = (dispatch) => {
//     dispatch({
//       type: "MARK_COMPLETE",
//       payload: "my payload",
//     });
//   };
//   return markCompleteAction;
// };

export const getTodos = () => async (dispatch) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/", {
      params: {
        _limit: 7,
      },
    });
    console.log(res.data);
    dispatch({
      type: GET_TODOS,
      payload: res.data,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const markComplete = (id) => (dispatch) => {
  dispatch({
    type: MARK_COMPLETE,
    payload: id,
  });
};
export const createTodo = (newTodo) => async (dispatch) => {
  try {
    await axios.post("https://jsonplaceholder.typicode.com/todos/", newTodo);

    dispatch({
      type: ADD_TODO,
      payload: newTodo,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  } catch (error) {
    console.error(error.message);
  }
};
