// import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const Region = () => {
  const { region } = useParams();

  const fetched = useSelector((state) => state.countryReducer);

  const fetchedCurrencies = useSelector((state) => state.currencyReducer);

  console.log(fetched[0].currencies);
  console.log(fetchedCurrencies);

  const data = fetched.filter((item) => item.region === region);

  if (data.length === 0) {
    return (
      <section className="country-page">
        <section className="countries">
          <h2>Loading...</h2>
        </section>
      </section>
    );
  }
  return (
    <section className="country-page">
      <section className="countries">
        <h2>Currencies</h2>
        <ul className="countries-container">
          {
              data.map((item) => (
                <Link key={item.name.common} to={`${item.name.common}`}>
                  <li id={item.name.common} className="country">
                    <div className="country-img-container">
                      <img src={item.flags.svg} alt={item.name.common} />
                      <img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/null/external-exchange-avitation-and-airport-xnimrodx-lineal-gradient-xnimrodx.png" alt="money exchange" />
                    </div>
                    <p className="text">{item.name.official}</p>
                    <p className="sub-text">
                      &#40;
                      {item.name.common}
                      &#41;
                    </p>
                  </li>
                </Link>
              ))
            }
        </ul>
      </section>
    </section>
  );
};

// }
export default Region;
