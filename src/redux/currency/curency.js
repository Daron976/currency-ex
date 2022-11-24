/*eslint-disable*/

// API data

const APIURL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json';

const FULLFILED = 'currency-ex/currency/FULLFILED';

export const fullfiled = (obj) => ({
  type: FULLFILED,
  payload: { obj },
});

export const fetchCurrencies = () => async (dispatch) => fetch(APIURL)
  .then((res) => res.json())
  .then((data) => {
    dispatch(fullfiled(Object.entries(data)));
  });

const currencyReducer = (state = [], action) => {
  switch (action.type) {
    case FULLFILED:
      return action.payload.obj;
    default:
      return state;
  }
};

export default currencyReducer;
