/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Conversion = () => {
  const [inputState, setInputState] = useState('Nothing selected');

  const [displayState, setDisplayState] = useState(false);

  let chosenCurrency;
  
  let final;

  const { country } = useParams();

  const fetchedCountries = useSelector((state) => state.countryReducer);

  const fetchCurrencies = useSelector((state) => state.currencyReducer);

  const data = fetchedCountries.filter((item) => item.name.common === country);

  const resultName = (e) => {
    setInputState(e.target.value);
    setDisplayState(false);
  }

  const displaySelect = (e) => {
    setDisplayState(true);
  }

  const currencyObj = Object.values(fetchCurrencies);

  console.log(currencyObj)

  if (data.length !== 0) {
    chosenCurrency = Object.keys(data[0].currencies);
    final = chosenCurrency[0].toLowerCase();
  }

  return (
    <section className="conversion">
      <div className='conversion-header'>
        <h1>Conversion</h1>
        <p>&#40;{country} {' '} currency&#41;</p>
      </div>
      
      <form action="" className="conversion-form">
        <label htmlFor="value">
          <input type="text" name="value" id="value" placeholder={final} />
        </label>
        <button
          style={{
            display: displayState ? 'none' : 'block'
          }}
          type='button'
          name='displaySelect'
          onClick={displaySelect}
          className='btn-display'
        >
          Select another currency
        </button>
          <select
            style={{
              display: displayState ? 'block' : 'none'
            }}
            size='10'
            name="currency-item"
            id="currency-select"
            onClick={resultName}
          >
            {
              currencyObj.map((item) => (
                <option value={item}>{item}</option>
              ))
            }
          </select>
        <label htmlFor="result">
          <input type="text" name="result" id="result" placeholder={inputState} />
        </label>
      </form>
    </section>
  );
};

export default Conversion;
