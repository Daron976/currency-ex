/*eslint-disable*/
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const prevPage = useNavigate();

  return (
    <header className="header">
      <i
        onClick={() => prevPage(-1)}
        className="fa-solid fa-backward-step"
      />
      <img src="https://img.icons8.com/external-icons-smashing-stocks/68/000000/external-Currencies-stock-market-icons-smashing-stocks.png" alt="App logo" />
      <Link to="/continents">
        <span
          className="material-symbols-outlined"
        >
          home
        </span>
      </Link>
    </header>
  );
};

export default Header;
