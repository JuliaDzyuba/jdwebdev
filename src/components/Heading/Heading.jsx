import React from 'react';
import './Heading.scss';

function Heading() {

  const rubberBandAnim = (e) =>{
    const target = e.target;
    
    target.classList.add('animated');
    target.classList.add('rubberBand');
  }
  const cancelAnim = (e) =>{
    const target = e.target;
    target.classList.remove('animated');
    target.classList.remove('rubberBand');
  }
  
  
  


  return (
    <>
      <h1 aria-label=" Hi, I’m Julia, frontend developer" className="blast-root"> 
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">H</span>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">i</span>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">,</span>
        <br/> 
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">I</span>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">’</span>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">m</span>
        <span  className="blast" aria-hidden="true">&nbsp;</span>
        {/* <img src="jj.png" alt="Web Developer Name" className="animation-logo"/> */}
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast blast_accent" aria-hidden="true">J</span>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast blast_accent" aria-hidden="true">u</span>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast blast_accent" aria-hidden="true">l</span>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast blast_accent" aria-hidden="true">i</span>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast blast_accent" aria-hidden="true">a</span>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">,</span>
        <br/>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">f</span>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">r</span>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">o</span> 
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">n</span> 
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">t</span> 
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">e</span> 
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">n</span> 
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">d</span>
        <span className="blast" aria-hidden="true">&nbsp;</span>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">d</span>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">e</span>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">v</span>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">e</span>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">l</span>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">o</span>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">p</span>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">e</span>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">r</span>
        <span onMouseOver={rubberBandAnim} onMouseOut={cancelAnim} className="blast" aria-hidden="true">.</span>
        <span className="descr">Amazing things can made with HTML/CSS/JavaScript/ReactJS</span>
      </h1>
      {/* <p className="descr">Amazing things can made with HTML/CSS/JavaScript/ReactJS</p> */}
    </>
  );
}

export default Heading;