/*eslint-disable*/

import { configureStore } from "@reduxjs/toolkit";

// API data

// const APIURL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${baseCurrency}.json`;

const FULLFILED = 'currency-ex/conversion/FULLFILED';

export const fullfiled = (obj) => ({
  type: FULLFILED,
  payload: { obj },
});

export const fetchBaseCurrency = (baseCurrency) => async (dispatch) => fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${baseCurrency}.json`)
  .then((res) => res.json())
  .then((data) => {
    dispatch(fullfiled(data));
    // console.log(data);
  });

const baseCurrencyReducer = (state = [], action) => {
  switch (action.type) {
    case FULLFILED:
      return action.payload.obj;
    default:
      return state;
  }
};

export default baseCurrencyReducer;
