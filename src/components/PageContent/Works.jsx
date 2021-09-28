import React from 'react';
import './Works.scss';

function Works() {
  return (
    <div className="page">
      <div className="anim__bg"></div>
      <h1 aria-label=" About me" className="page__title title"> 
        Works
      </h1>
      <div className="works__wrapper">
        <div className="work">
          <img src="img/work1.JPG" alt="site Kavaservice"/>
          <div className="work__overlay">
            <h3 className="work__name">KavaService</h3>
            <p className="work__descr">Landing Page</p>
            <a href="https://kavaservice.dp.ua/" className="work__link">View</a>

          </div>
        </div>
        <div className="work">
          <img src="img/Jabber.png" alt="Jabber podcasts"/>
          <div className="work__overlay">
            <h3 className="work__name">Jabber</h3>
            <p className="work__descr">SPA (PERN)</p>
            <a href="https://github.com/JuliaDzyuba" className="work__link">View</a>

          </div>
        </div>
        <div className="work">
          <img src="img/work2.JPG" alt="newsportal TopNews"/>
          <div className="work__overlay">
            <h3 className="work__name">Newsportal TopNews</h3>
            <p className="work__descr">SPA (pet-project ReactJS)</p>
            <a href="https://juliadzyuba.github.io/newsportal/#/newsportal/economic" className="work__link">View</a>

          </div>
        </div>
        <div className="work">
          <img src="img/work3.JPG" alt="Earth"/>
          <div className="work__overlay">
            <h3 className="work__name">Earth</h3>
            <p className="work__descr">Save the Earth presentation (school project, LP)</p>
            <a href="https://juliadzyuba.github.io/earth/earth/" className="work__link">View</a>

          </div>
        </div>
        <div className="work">
          <img src="img/work5.JPG" alt="portfolio JDWebDev"/>
          <div className="work__overlay">
            <h3 className="work__name">Portfolio</h3>
            <p className="work__descr">SPA (ReactJS)</p>
            <a href="https://juliadzyuba.github.io/jdwebdev" className="work__link">View</a>

          </div>
        </div>
        <div className="work">
          <img src="img/work4.JPG" alt="Pulse"/>
          <div className="work__overlay">
            <h3 className="work__name">Pulsometers Promo-page</h3>
            <p className="work__descr">Landing Page</p>
            <a href="https://juliadzyuba.github.io/Pulse/" className="work__link">View</a>

          </div>
        </div>
        <div className="work">
          <img src="img/work6.JPG" alt="shop home goods"/>
          <div className="work__overlay">
            <h3 className="work__name">HomeGoods shop</h3>
            <p className="work__descr">(pet-project pure JS)</p>
            <a href="https://juliadzyuba.github.io/shop_pureJS/" className="work__link">View</a>

          </div>
        </div>
        
      </div>
    </div>
    
  );
}

export default Works;
