import React from 'react';
import './App.scss';
import Home from './componts/pages/home';
import EnemyContextProvider from './componts/context/enemy';
import HeroContextProvider from './componts/context/hero';

function App() {
  return (
    <div className="App">
      <EnemyContextProvider>
        <HeroContextProvider>
        <Home />
        </HeroContextProvider>
      </EnemyContextProvider>
    </div>
  );
}

export default App;
