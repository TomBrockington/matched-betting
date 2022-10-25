import React, { useState } from 'react';
import Nav from '../../components/nav/Nav';
import Game from './components/Game';
import HowToPlay from './components/HowToPlay';
import './style.css';

function Lessons() {
  const [bank, setBank] = useState(1000);
  const [betHistory, setBetHistory] = useState([]);
  const [stage, setStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);


  const togglePlaying = () => {
    setIsPlaying(!isPlaying);
    if (stage === 0) {
      setStage(1)
    }
  }
  return (
    <>
      <Nav />
      
      <header className='lessons__header__container'>
        <h2>Learn How To Play</h2>
        <span>With our exclusive interactive game</span>
      </header>

      <HowToPlay />

      <main className='lessons__game__container'>
        {isPlaying ? (
          <Game bank={bank} />
        ) : 
          <button onClick={togglePlaying}>Start Game</button>
        }
      </main>
    </>
  );
}

export default Lessons;
