import axios from "axios";
// export const markComplete = () => {
//   const markCompleteAction = (dispatch) => {
//  dispatch({
//     type: "MARK_COMPLETE",
//     payload: "my_payload",
//   });
//   return markCompleteAction;
// };

export const getTodo = () => async (dispatch) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos", {
      params: { _limit: 7 },
    });
    console.log(res.data);
    dispatch({ type: "GET_TODO", payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const markComplete = (id) => (dispatch) => {
  dispatch({
    type: "MARK_COMPLETE",
    payload: id,
  });
};
export const createTodo = (newTodo) => async (dispatch) => {
  try {
    await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
    dispatch({
      type: "CREATE_TODO",
      payload: newTodo,
    });
  } catch (error) {
    console.error(error);
  }
};
export const deleteTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  } catch (error) {
    console.error(error);
  }
};
