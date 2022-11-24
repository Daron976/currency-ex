/*eslint-disable*/
import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import countryReducer from '../redux/country/country';
import currencyReducer from '../redux/currency/curency';
import baseCurrencyReducer from '../redux/conversion/baseCurrency';

export const renderState = (
  ui,
  {
    preloadedState = {},
    store = configureStore({ reducer: { 
      countryReducer,
      currencyReducer,
      baseCurrencyReducer,
     }, preloadedState }),
    ...renderOptions
  } = {},
) => {
  const Wrapper = ({ children }) => <Provider store={store}>{ children }</Provider>;

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
