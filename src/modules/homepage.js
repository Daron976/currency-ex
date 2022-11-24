import { Link } from 'react-router-dom';

const Homepage = () => (
  <section className="home-page">
    <img src="https://img.icons8.com/external-icons-smashing-stocks/68/000000/external-Currencies-stock-market-icons-smashing-stocks.png" alt="App logo" />
    <div>
      <h1>Welcome to Currex</h1>
    </div>
    <Link to="continents">
      <button type="button" name="proceed" id="proceed">Proceed</button>
    </Link>
  </section>
);

export default Homepage;
