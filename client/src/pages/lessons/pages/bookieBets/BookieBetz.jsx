import React, { useContext } from 'react';
import './style.css';

import { GameContext } from '../../../../context/GameContext';
import { useState } from 'react';

function BookieBetz() {
  const [sportSelected, setSportSelected] = useState(false);
  const [footballSelected, setFootballSelected] = useState(false);
  const [racingSelected, setRacingSelected] = useState(false);

  const {
    stage,
    betFairBank,
    setBetFairBank,
    bookieBetzBank,
    setBookieBetzBank,
    bookieDepositData,
    setBookieDepositData,
    exchangeDepositData,
    setExchangeDepositData,
    playerBank,
    setPlayerBank,
    bankToggle,
    setBankToggle,
  } = useContext(GameContext);

  const findFootball = () => {
    console.log('footballSelected');
  }
  const findRacing = () => {
    console.log('footballSelected');
  }
  return (
    <section id='bookie__container'>
      <div className='bookie__header'>
        <h2>BookieBetz</h2>
        <span>In Account £{bookieBetzBank}</span>
      </div>

      {!sportSelected && (
        <div className='bookie__sports__selection'>
          <h3 onClick={findFootball}>FootBall</h3>
          <h3 onClick={findRacing}>Horse Racing</h3>
        </div>
      )}
    </section>
  );
}

export default BookieBetz;
