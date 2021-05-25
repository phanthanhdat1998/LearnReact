const initialState = {
  photos: [],
};

const photoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_PHOTO":
      return { ...state, photos: payload };

    default:
      return state;
  }
};
export default photoReducer;
