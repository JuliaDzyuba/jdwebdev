import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const Header = () => {
  const [burger, updateBurger] = useState(false);
  const burgerRef = useRef();

  const handleBurgerClick = () => {
    updateBurger(!burger);
  }

  
  const checkOutside = (e) => {
    if( !e.path.includes(burgerRef.current)){
      updateBurger(false);
    }
  }
  useEffect( ()=>{
    document.body.addEventListener( 'click', checkOutside);
  })
 

  return(
    <header className="header">
    <NavLink exact to="/" aria-label="Link to Home page" title="My logo" className="logo">
      <img src="JDlogo.png" alt="JDwebdev" />
    </NavLink>
    <nav className={burger ? 'active' : ''}>
      <ul className="menu">
        <li ><NavLink exact to="/" aria-label="Home" title="Home"><span className="material-icons">home</span></NavLink></li>
        <li ><NavLink exact to="/about" aria-label="About" title="About"><span className="material-icons">person</span></NavLink></li>
        <li ><NavLink exact to="/skills" aria-label="Skills" title="Skills"><span className="material-icons">settings</span></NavLink></li>
        <li ><NavLink exact to="/works" aria-label="Works" title="Works"><span className="material-icons">visibility</span></NavLink></li>
        <li ><NavLink exact to="/contacts" aria-label="Contacts" title="Contacts"><span className="material-icons">mail</span></NavLink></li>
      </ul>
    </nav>
    <div className="links header__links">
      <ul className="links__menu">
        {/* <li className="insta"><a title="Instagram" href="https://instagram.com" aria-label="View my instagram"><span></span></a></li>
        <li className="linkedin"><a title="Linkedin" href="https://linkedin.com" aria-label="View my linkedin"><span></span></a></li> */}
        <li><a title="e-mail" href="mailto:juliadzyuba.web@gmail.com" aria-label="My e-mail"><span className="material-icons">alternate_email</span></a></li>
        <li><a title="Facebook" href="https://facebook.com" aria-label="View my facebook"><span className="material-icons">facebook</span></a></li>
        <li className="github"><a title="GitHub" href="https://github.com/JuliaDzyuba" aria-label="View my github"><span></span></a></li>
        <li><a title="Portfolio" href="https://juliadzyuba.github.io/jdwebdev" aria-label="portfolio"><span className="material-icons">public</span></a></li>
      </ul>
    </div>
    <div ref={burgerRef} className={burger ? 'burger active' : 'burger'} onClick={handleBurgerClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
  );
};

export default Header;

// <span className="material-icons">rss_feed</span>