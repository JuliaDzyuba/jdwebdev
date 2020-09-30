import React, { useState } from 'react';
import './App.css';

function App() {
  const [anim, setAnim] = useState(false);
  
  const rubberBandAnim = () =>{
    setAnim(true);
  }
  const cancelAnim = () =>{
    setAnim(false);
  }
  return (
    <div className="App">
      <span onMouseOver={rubberBandAnim} 
            onMouseOut={cancelAnim} 
            className={anim ? "blast animated rubberBand" : "blast"} 
      >H</span>
      <span onMouseOver={rubberBandAnim}
            onMouseOut={cancelAnim} 
            className={anim ? "blast animated rubberBand" : "blast"}
      >i</span>
    </div>
  );
}

export default App;
