// export const markComplete = () => {
//   const markCompleteAction = (dispatch) => {
//  dispatch({
//     type: "MARK_COMPLETE",
//     payload: "my_payload",
//   });
//   return markCompleteAction;
// };

export const markComplete = (id) => (dispatch) => {
  dispatch({
    type: "MARK_COMPLETE",
    payload: id,
  });
};
export const createTodo = (newTodo) => (dispatch) => {
  console.log(newTodo);
  dispatch({
    type: "CREATE_TODO",
    payload: newTodo,
  });
};
