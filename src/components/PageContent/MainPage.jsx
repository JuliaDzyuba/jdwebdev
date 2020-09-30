import React from 'react';
import './MainPage.scss';
import Heading from '../Heading/Heading';




function MainPage() {
  return (
    <>
    <div className="inner">
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
    </div>
    <div className="page">
      
      <Heading />
      {/* <p className="phrases">
        Do something. If it doesn't work, do something else. <br/> No idea is too crazy. Jim Hightower
      </p> */}
    </div>
    </>
    
  );
}

export default MainPage;










