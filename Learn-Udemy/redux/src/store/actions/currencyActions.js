import { CURRENCY_CHANGED } from "./types";

export const currencyChanged = (currency) => ({
  type: CURRENCY_CHANGED,
  currency,
});
