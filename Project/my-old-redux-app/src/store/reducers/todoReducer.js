const initialState = {
  todos: [
    { id: 1, title: "Viec lam 1", complete: false },
    { id: 2, title: "Viec lam 2", complete: false },
    { id: 3, title: "Viec lam 3", complete: false },
    { id: 4, title: "Viec lam 4", complete: false },
    { id: 5, title: "Viec lam 5", complete: false },
  ],
};

const todoReducer = (state = initialState, action) => {
  return state;
};

export default todoReducer;
