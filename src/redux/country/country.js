/*eslint-disable*/

// API data

const APIURL = 'https://restcountries.com/v3.1/all';

const FULLFILED = 'currency-ex/country/FULLFILED';

const fullfiled = (obj) => ({
  type: FULLFILED,
  payload: { obj },
});

export const fetchCountires = () => async (dispatch) => fetch(APIURL)
  .then((res) => res.json())
  .then((data) => {
    data.sort((a, b) => {
      const cur = a.name.official.toUpperCase();
      const next = b.name.official.toUpperCase();
      if (cur < next) {
        return -1;
      }
      if (cur > next) {
        return 1;
      }
      return 0;
    });
    dispatch(fullfiled(data));
  });

const countryReducer = (state = [], action) => {
  switch (action.type) {
    case FULLFILED:
      return [...state, ...action.payload.obj];
    default:
      return state;
  }
};


export default countryReducer;
