import axios from "axios";

export const getPhoto = () => async (dispatch) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos", {
      params: { _limit: 8 },
    });
    console.log(res.data);
    dispatch({ type: "GET_PHOTO", payload: res.data });
  } catch (error) {
    console.error(error);
  }
};
