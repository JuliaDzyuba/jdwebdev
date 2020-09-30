import React, { useEffect } from 'react';
import './App.scss';
import { Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/PageContent/MainPage';
import Skills from './components/PageContent/Skills';
import About from './components/PageContent/About';
import Works from './components/PageContent/Works';
import Contacts from './components/PageContent/Contacts';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Header />
      
      <Route exact path="/">
        <MainPage/>
      </Route>
      <Route exact path="/about">
        <About/>
      </Route>
      <Route exact path="/skills">
        <Skills/>
      </Route>
      <Route exact path="/works">
        <Works/>
      </Route>
      <Route exact path="/contacts">
        <Contacts/>
      </Route>


      
    </div>
  );
}

export default App;
