import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';

const Continents = () => {
  const [scroll, setScroll] = useState(false);

  window.onscroll = () => {
    setScroll(true);
    if (window.scrollY === 0) {
      setScroll(false);
    }
  };

  return (
    <div>
      <Header />
      <section className="continents-page">
        <div className="intro">
          <div className="intro-content">
            <div className="intro-details">
              <h1 className="intro-text">
                Currex
              </h1>
              <p className="intro-subtext">
                Foreign Exchange
                <br />
                Latest currency figures
              </p>
            </div>
            <div
              className="scroll"
              style={{
                display: scroll ? 'none' : 'block',
              }}
            >
              Scroll Down
              <br />
              <i className="fa-sharp fa-solid fa-chevron-down fa-3x" />
            </div>
          </div>
        </div>
        <section className="categories">
          <h2>Regions</h2>
          <div className="categories-container">
            <div className="wrapper1">
              <Link key="Africa" to="Africa" className="regions">
                <div id="Africa" className="category">
                  <img src="https://img.icons8.com/3d-fluency/94/null/globe-africa.png" alt="Africa" />
                  <p>Africa</p>
                </div>
              </Link>
              <Link key="Europe" to="Europe" className="regions">
                <div id="Europe" className="category">
                  <img src="https://img.icons8.com/3d-fluency/94/null/europe.png" alt="Europe" />
                  <p>Europe</p>
                </div>
              </Link>
              <Link key="Americas" to="Americas" className="regions">
                <div id="Americas" className="category">
                  <img src="https://img.icons8.com/3d-fluency/94/null/america.png" alt="Americas" />
                  <p>Americas</p>
                </div>
              </Link>
            </div>
            <div className="wrapper2">
              <Link key="Asia" to="Asia" className="regions">
                <div id="Asia" className="category">
                  <img src="https://img.icons8.com/3d-fluency/94/null/asia.png" alt="Asia" />
                  <p>Asia</p>
                </div>
              </Link>
              <Link key="Oceania" to="Oceania" className="regions">
                <div id="Oceania" className="category">
                  <img src="https://img.icons8.com/3d-fluency/94/null/asia.png" alt="Oceania" />
                  <p>Oceania</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Continents;
