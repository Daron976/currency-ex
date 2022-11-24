import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Header from './header';

const Region = () => {
  const [filterState, setFilterState] = useState('');

  const { region } = useParams();

  const fetched = useSelector((state) => state.countryReducer);

  const data = fetched.filter((item) => item.region === region);

  const filterList = (e) => {
    setFilterState(e.target.value);
  };

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
    <div>
      <Header />
      <section className="country-page">
        <section className="countries">
          <h2>Countries</h2>
          <div className="search-bar">
            <input
              type="input"
              name="search"
              id="seacrh"
              placeholder="Search for you country"
              onChange={filterList}
            />
          </div>
          <ul className="countries-container">
            {
              data
                .filter((item) => { //eslint-disable-line
                  if (filterState === '') {
                    return data;
                  }
                  if (
                    (item.name.official.toLowerCase().includes(filterState.toLowerCase()))
                      || (item.name.common.toLowerCase().includes(filterState.toLowerCase()))) {
                    return data;
                  }
                })
                .map((item) => (
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
    </div>
  );
};

// }
export default Region;
