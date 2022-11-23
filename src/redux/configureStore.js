import { combineReducers, configureStore } from '@reduxjs/toolkit';
import countryReducer from './country/country';
import currencyReducer from './currency/curency';

const root = combineReducers({
  currencyReducer,
  countryReducer,
});

const store = configureStore({ reducer: root });

export default store;
