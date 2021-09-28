import React from 'react';
import './About.scss';

function About() {
  return (
    <div className="page about">
      <div className="anim__bg"></div>
      <h1 aria-label=" About me" className="page__title title"> 
        About me
      </h1>
      <div className="left">
        <p className="text">
          Mission-driven frontend developer with a passion for thoughtful UI design, collaboration, and teaching.
        </p>
        <p className="text">
          Well-organized person, problem solver, independent employee with high attention to detail.
        </p>
        <p className="text">
          I enjoy learning new technologies and using them in development. My goal: expanding the technology stack to the level of a Fullstack developer
        </p>
        <p className="text">
          A family person, therefore remote employment is preferred.
        </p>
      </div>
      <p className="phrases">
      I think everything starts with an idea. No matter how crazy it is, you should always try to bring it to life. <br/>Ann Makosinski
      </p>
    </div>
    
  );
}

export default About;

