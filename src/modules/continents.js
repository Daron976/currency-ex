import { Link } from 'react-router-dom';
import Header from './header';

const Continents = () => {
  const region = [
    'Africa', 'Europe', 'Americas', 'Asia', 'Oceania',
  ];

  return (
    <div>
      <Header />
      <section className="continents-page">
        <div className="intro">
          <div className="intro-content">
            <h1 className="intro-text">
              Currex
            </h1>
            <p className="intro-subtext">
              latest currency figures
            </p>
          </div>
        </div>
        <section className="categories">
          <h2>Regions</h2>
          <div className="categories-container">
            {
              region.map((item) => (
                <Link key={item} to={`${item}`} className="regions">
                  <div id={item} className="category">
                    <img src="https://img.icons8.com/3d-fluency/94/null/europe.png" alt={item} />
                    <p>{item}</p>
                  </div>
                </Link>
              ))
            }
          </div>
        </section>
      </section>
    </div>
  );
};

export default Continents;
