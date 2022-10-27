import React, { useContext, useState } from 'react';
import './style.css';

import { GameContext } from '../../../../context/GameContext';

function BetFair() {
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
    generatedFootballEvents,
    setGeneratedFootballEvents,
    generatedRacingEvents,
    setGeneratedRacingEvents,
  } = useContext(GameContext);

  const findFootball = () => {
    console.log('footballSelected');
    setSportSelected(true);
    setFootballSelected(true);
  };

  const findRacing = () => {
    console.log('footballSelected');
    setSportSelected(true);
    setRacingSelected(true);
  };

  const goBackFunction = () => {
    setSportSelected(false);
    setRacingSelected(false);
    setFootballSelected(false);
  };
  return (
    <section id='exchange__container'>
      <div className='exchange__header'>
        <h2>BetFair</h2>
        <span>In Account £{betFairBank}</span>
      </div>

      {!sportSelected && (
        <div className='bookie__sports__selection'>
          <h3 onClick={findFootball}>FootBall</h3>
          <h3 onClick={findRacing}>Horse Racing</h3>
        </div>
      )}

      {footballSelected && (
        <div>
          <h3>FootBall</h3>
          <button onClick={goBackFunction}>Go Back</button>
        </div>
      )}

      {racingSelected && (
        <div>
          <h3>Horse Racing</h3>
          <button onClick={goBackFunction}>Go Back</button>
        </div>
      )}
    </section>
  );
}
export default BetFair;
