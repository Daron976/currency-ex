/*eslint-disable*/
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Region from './modules/region';
import Header from './modules/header';
import Homepage from './modules/homepage';
import { fetchCountires } from './redux/country/country';
import Conversion from './modules/conversion';
import { fetchCurrencies } from './redux/currency/curency';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountires());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/:region' element={<Region />}/>
        <Route path='/:region/:country' element={<Conversion />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
