import React from 'react';
import './Skills.scss';

function Skills() {
  return (
    <div className="page skills">
      <section id="pyramid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
      <h1 aria-label=" About me" className="page__title title"> 
        Skills
      </h1>
      <div className="left">
        <h2>Main stack</h2>
        <div className="skills__wrapper">
          <div className="skills__img"><img title="HTML5" src="img/html5.png" alt="logo html5"/></div>
          <div className="skills__img"><img title="CSS3" src="img/css3.png" alt="logo css3"/></div>
          <div className="skills__img"><img title="JavaScript" src="img/javascript1.png" alt="logo javascript"/></div>
          <div className="skills__img"><img title="React" src="img/react.png" alt="logo react"/></div>
          <div className="skills__img"><img title="Typescript" src="img/ts-logo-512.png" alt="logo typescript"/></div>
          <div className="skills__img"><img title="Sass/Scss" src="img/sass.png" alt="logo sass"/></div>
          <div className="skills__img"><img title="Bootstrap" src="img/bootstrap.png" alt="logo bootstrap"/></div>
          <br/>
          <div className="skills__img"><img title="NodeJS" src="img/node_js.png" alt="logo node.js"/></div>
          <div className="skills__img"><img title="ExpressJS" src="img/express_logo.svg" alt="logo express.js"/></div>
          <div className="skills__img"><img title="SocketIO" src="img/socketio.svg" alt="logo socket.io"/></div>
          <br/>
          <div className="skills__img"><img title="MongoDB" src="img/mongoDB-logo.png" alt="logo mongoDB"/></div>
          <div className="skills__img"><img title="PostgreSQL" src="img/postgresql-logo.png" alt="logo postgresql"/></div>
        </div>
        <h2>Build tools and other</h2>
        <div className="skills__wrapper">
          <div className="skills__img"><img title="Gulp" src="img/gulp.png" alt="logo gulp"/></div>
          <div className="skills__img"><img title="Webpack" src="img/webpack.png" alt="logo webpack"/></div>
          <div className="skills__img"><img title="Git" src="img/git.png" alt="logo git"/></div>
          <div className="skills__img"><img title="npm" src="img/npm.png" alt="logo npm"/></div>
          <div className="skills__img"><img title="Github" src="img/githubW.png" alt="logo github"/></div>
          
        </div>
        <h2>Graphics editors</h2>
        <div className="skills__wrapper">
          <div className="skills__img"><img title="Photoshop" src="img/photoshop.png" alt="logo photoshop"/></div>
          <div className="skills__img"><img title="Figma" src="img/figma.png" alt="logo figma"/></div>
          <div className="skills__img"><img title="Avocode" src="img/avocode.png" alt="logo avocode"/></div>
        </div>        
        
      </div>
      <p className="phrases">
        The only true wisdom is in knowing you know nothing. <br/>  Socrates
      </p>
      
    </div>
    
  );
}

export default Skills;

