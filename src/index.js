import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Game } from './Game/Game.js';
import { Header } from './Header';
import { WelcomeScreen } from './WelcomeScreen';
import { Footer } from './Footer';



import './css/style.css';

export const App = () => {
  const [appState, setAppState] = useState('welcome'); // play or welcome

  const startPlay = () => {
    setAppState('play');
  };

  // Renders either Welcome Screen or Game
  return (
    <React.Fragment>
      <Header />
      {appState === 'play' ? <Game /> : <WelcomeScreen startPlay={startPlay} />}
      {appState === 'play' ? <div /> : <Footer />}
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
