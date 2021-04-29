import { CURRENCY_CHANGED } from "../actions/types";
const initialState = {
  currencys: "gbp",
};

const currencyReducer = (state = initialState, action) => {
  if (state === undefined) {
    return initialState;
  }
  switch (action.type) {
    case CURRENCY_CHANGED:
      return {
        ...state,
        currencys: action.currencys,
      };

    default:
      return state;
  }
};

export default currencyReducer;
