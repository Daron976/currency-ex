import { combineReducers, configureStore } from '@reduxjs/toolkit';
import countryReducer from './country/country';
import currencyReducer from './currency/curency';
import baseCurrencyReducer from './conversion/baseCurrency';

const root = combineReducers({
  currencyReducer,
  countryReducer,
  baseCurrencyReducer,
});

const store = configureStore({ reducer: root });

export default store;
