/*eslint-disable*/
import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import countryReducer from '../redux/country/country';
import currencyReducer from '../redux/currency/curency';
import baseCurrencyReducer from '../redux/conversion/baseCurrency';

// const state = [
//   {
//     name: {
//     common: "Mauritania",
//     official: "Islamic Republic of Mauritania",
//     },
//     independent: true,
//     status: "officially-assigned",
//     unMember: true,
//     currencies: {
//     MRU: {
//     name: "Mauritanian ouguiya",
//     symbol: "UM"
//     }
//     },
//     capital: [
//     "Nouakchott"
//     ],
//     region: "Africa",
//     subregion: "Western Africa",
//     flag: "🇲🇷",
//     maps: {
//     googleMaps: "https://goo.gl/maps/im2MmQ5jFjzxWBks5",
//     openStreetMaps: "https://www.openstreetmap.org/relation/192763"
//     },
//     population: 4649660,
//     gini: {
//     2014: 32.6
//     },
//     fifa: "MTN",
//     car: {
//     signs: [
//     "RIM"
//     ],
//     side: "right"
//     },
//     timezones: [
//     "UTC"
//     ],
//     continents: [
//     "Africa"
//     ],
//     flags: {
//     png: "https://flagcdn.com/w320/mr.png",
//     svg: "https://flagcdn.com/mr.svg"
//     },
//     coatOfArms: {
//     png: "https://mainfacts.com/media/images/coats_of_arms/mr.png",
//     svg: "https://mainfacts.com/media/images/coats_of_arms/mr.svg"
//     },
//     startOfWeek: "monday",
//     capitalInfo: {
//     latlng: [
//     18.07,
//     -15.97
//     ]
//     }
//     }
// ]

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
