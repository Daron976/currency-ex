import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBaseCurrency } from '../redux/conversion/baseCurrency';

const Conversion = () => {
  const [inputState, setInputState] = useState('Nothing selected');

  const [inputValue, setInputValue] = useState(0);

  const [reverseValue, setReverseValue] = useState(0);

  const [optionValue, setOptionValue] = useState('');

  const [displayState, setDisplayState] = useState(false);

  const dispatch = useDispatch();

  const { country } = useParams();

  const fetchedCountries = useSelector((state) => state.countryReducer);

  const fetchCurrencies = useSelector((state) => state.currencyReducer);

  const baseData = useSelector((state) => state.baseCurrencyReducer);

  const data = fetchedCountries.filter((item) => item.name.common === country);

  let currencyCode;

  let final;

  let valueObj;

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
    setInputValue(e.target.value * valueObj[optionValue]);
  };

  const reverseConversion = (e) => {
    setReverseValue(e.target.value / valueObj[optionValue]);
  };

  if (data.length !== 0) {
    const initalCode = Object.keys(data[0].currencies);
    currencyCode = initalCode[0].toLowerCase();
    const curencyName = Object.values(data[0].currencies);
    final = `${curencyName[0].name} ` + `(${currencyCode})`; //eslint-disable-line
  }

  useEffect(() => {
    if (baseData) {
      valueObj = (Object.values(baseData))[1]; //eslint-disable-line
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
        <h2>{data[0].name.official}</h2>
        <ul className="country-info-list">
          <li className="info-list-item">{data[0].region}</li>
          <li className="info-list-item">{data[0].subregion}</li>
          <li className="info-list-item">{final}</li>
          <li className="info-list-item">{data[0].timezones[0]}</li>
        </ul>
        <img src={data[0].flags.svg} alt={data[0].name.common} />
      </section>
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
        <select
          style={{
            display: displayState ? 'block' : 'none',
          }}
          size="10"
          name="currency-item"
          id="currency-select"
          onClick={resultName}
        >
          {
              fetchCurrencies.map((item) => (
                <option key={item[0]} value={item[0]}>{item[1]}</option>
              ))
            }
        </select>
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
    </section>
  );
};

export default Conversion;
