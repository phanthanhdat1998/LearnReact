console.log(window.Redux);
const { createStore } = window.Redux;

//SETUP REDUX STORE
// state
// reducer
// store
const initialState = JSON.parse(localStorage.getItem("hobbyList")) || [];
const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HOBBY":
      const newList = [...state];
      newList.push(action.payload);
      return newList;
    default:
      return state;
  }
};
const store = createStore(hobbyReducer);

//------------

//RENDER REDUX HOBBY LIST
const renderHobbyList = (hobbyList) => {
  if (!Array(hobbyList) || hobbyList.length === 0) return;

  const ulElement = document.querySelector("#hobbylistId");
  if (!ulElement) return;

  //Reset previous content of ul
  ulElement.innerHTML = "";

  for (const hobby of hobbyList) {
    const liElement = document.createElement("li");
    liElement.textContent = hobby;

    ulElement.appendChild(liElement);
  }
};

//RENDER INITIAL HOBBY LIST

const initialHobbyList = store.getState();
renderHobbyList(initialHobbyList);

//Handle form submit

const hobbyFormElement = document.querySelector("#hobbyFormId");

if (hobbyFormElement) {
  const handleFormSubmit = (e) => {
    //preventDefault browser form reloading
    e.preventDefault();
    const hobbyTextElememt = hobbyFormElement.querySelector("#nameId");
    if (!hobbyTextElememt) return;
    store.dispatch({
      type: "ADD_HOBBY",
      payload: hobbyTextElememt.value,
    });

    //Reset form
    hobbyFormElement.reset();
  };
  hobbyFormElement.addEventListener("submit", handleFormSubmit);
}

store.subscribe(() => {
  console.log("STATE UPDATE:", store.getState());
  const newHobbyList = store.getState();
  renderHobbyList(newHobbyList);
  localStorage.setItem("hobbyList", JSON.stringify(newHobbyList));
});
