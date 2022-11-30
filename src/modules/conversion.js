import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBaseCurrency } from '../redux/conversion/baseCurrency';
import Header from './header';

const Conversion = () => {
  // states to manipulate imput changes

  const [inputState, setInputState] = useState('Nothing selected');
  const [inputValue, setInputValue] = useState(0);
  const [reverseValue, setReverseValue] = useState(0);
  const [optionValue, setOptionValue] = useState('');
  const [displayState, setDisplayState] = useState(false);

  const dispatch = useDispatch();

  const { country } = useParams();

  // data from API

  const fetchedCountries = useSelector((state) => state.countryReducer);
  const fetchCurrencies = useSelector((state) => state.currencyReducer);
  const baseData = useSelector((state) => state.baseCurrencyReducer);

  const data = fetchedCountries.filter((item) => item.name.common === country);

  let currencyCode;
  let final;
  let valueObj;
  let valueArr;

  // UI functions

  const resultName = (e) => {
    setInputState(e.target.textContent);
    setDisplayState(false);
    setOptionValue(e.target.value);
  };

  const displaySelect = () => {
    setDisplayState(true);
    dispatch(fetchBaseCurrency(currencyCode));
  };

  const conversion = (e) => {
    setInputValue(e.target.value * valueArr[optionValue]);
  };

  const reverseConversion = (e) => {
    setReverseValue(e.target.value / valueArr[optionValue]);
  };

  // setting input placeholder text

  if (data.length !== 0) {
    const initalCode = Object.keys(data[0].currencies);
    currencyCode = initalCode[0].toLowerCase();
    const curencyName = Object.values(data[0].currencies);
    final = `${curencyName[0].name} ` + `(${currencyCode})`; //eslint-disable-line
  }

  // converting baseData to array to to easily access conversion rate object from API

  useEffect(() => {
    if (baseData) {
      valueObj = (Object.values(baseData))[1]; //eslint-disable-line
    }
    if (valueObj) {
      valueArr = Object.values(valueObj); //eslint-disable-line
    }
  });

  if (fetchCurrencies.length === 0) {
    return (
      <section className="conversion">
        <div className="conversion-header">
          <h1>LOADING...</h1>
        </div>
      </section>
    );
  }

  return (
    <div>
      <Header />
      <section className="conversion">
        <div className="conversion-header">
          <h1>Currency exchange</h1>
          <p>
            &#40;
            {country}
            {' '}
            {' '}
            {' '}
            currency&#41;
          </p>
        </div>
        <section className="country-info">
          <div className="country-info-container">
            <article>
              <div>
                <h2>{data[0].name.official}</h2>
                <ul className="country-info-list">
                  <li className="info-list-item">{data[0].region}</li>
                  <li className="info-list-item">{data[0].subregion}</li>
                  <li className="info-list-item">
                    Population
                    {' '}
                    :
                    {' '}
                    {data[0].population}
                  </li>
                  <li className="info-list-item">{final}</li>
                  <li className="info-list-item">{data[0].timezones[0]}</li>
                </ul>
              </div>
              <img src={data[0].flags.svg} alt={data[0].name.common} />
            </article>
            <form action="" className="conversion-form">
              <h3>Conversion</h3>
              <label htmlFor="value">
                <input
                  type="text"
                  name="value"
                  id="value"
                  placeholder={reverseValue === 0 ? final : reverseValue}
                  onChange={conversion}
                  onBlur={(e) => {
                    e.target.value = '';
                    setInputValue(0);
                  }}
                />
              </label>
              <button
                style={{
                  display: displayState ? 'none' : 'block',
                }}
                type="button"
                name="displaySelect"
                onClick={displaySelect}
                className="btn-display"
              >
                Select another currency
              </button>
              <ul //eslint-disable-line
                style={{
                  display: displayState ? 'block' : 'none',
                }}
                name="currency-item"
                id="currency-select"
                onClick={resultName}
                className="currency-li"
              >
                {
                  fetchCurrencies.map((item, index) => (
                    <li //eslint-disable-line
                      key={item[0]}
                      value={index}
                      onClick={resultName} //eslint-disable-line
                    >
                      {item[1]}
                    </li>
                  ))
                }
              </ul>
              <label htmlFor="result">
                <input
                  type="text"
                  name="result"
                  id="result"
                  placeholder={inputValue === 0 ? inputState : inputValue}
                  onChange={reverseConversion}
                  onBlur={(e) => {
                    e.target.value = '';
                    setReverseValue(0);
                  }}
                />
              </label>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Conversion;
