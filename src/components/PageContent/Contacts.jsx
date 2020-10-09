import React from 'react';
import './Contacts.scss';

function Contacts() {
  return (
    <div className="page">
      <div className="anim__bg"></div>
      <h1 aria-label="Contacts" className="page__title title"> 
        Contacts
      </h1>
      <div className="left">
        <p className="text">
          I am interested in freelance opportunities – especially ambitious or large projects. <br/> However, if you have other request or question, don’t hesitate to contact me.
        </p>
        <div className="links contact__links">
      <ul className="links__menu">
        {/* <li className="insta"><a title="Instagram" href="https://instagram.com" aria-label="View my instagram"><span></span>https://instagram.com</a></li>
        <li className="linkedin"><a title="Linkedin" href="https://linkedin.com" aria-label="View my linkedin"><span></span>https://linkedin.com</a></li> */}
        <li><a title="e-mail" href="mailto:juliadzyuba.web@gmail.com" aria-label="My e-mail"><span className="material-icons">alternate_email</span>juliadzyuba.web@gmail.com</a></li>
        <li className="telegram"><a title="Telegram" href="https://t.me/juliadzyuba" aria-label="My telegram"><span></span>https://t.me/juliadzyuba</a></li>
        <li><a title="Facebook" href="https://facebook.com" aria-label="View my facebook"><span className="material-icons">facebook</span>https://facebook.com</a></li>
        <li className="github"><a title="GitHub" href="https://github.com/JuliaDzyuba" aria-label="View my github"><span></span>https://github.com/JuliaDzyuba</a></li>
        <li><a title="Portfolio" href="https://juliadzyuba.github.io/jdwebdev" aria-label="portfolio"><span className="material-icons">public</span>https://juliadzyuba.github.io</a></li>
      </ul>
    </div>

      </div>
    </div>
    
  );
}

export default Contacts;
