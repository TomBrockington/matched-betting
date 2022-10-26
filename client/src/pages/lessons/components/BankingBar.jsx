import React, { useContext } from 'react';
import { GameContext } from '../../../context/GameContext';

function BankingBar({ bank }) {
  const {
    playerBank,
    setPlayerBank,
    betFairBank,
    setBetFairBank,
    bookieBetzBank,
    setBookieBetzBank,
    betHistory,
    setBetHistory,
    stage,
    setStage,
    depositData,
    setDepositData,
  } = useContext(GameContext);

  console.log('playerBank', playerBank);

  return (
    <section className='banking__container'>
      <section className='player__bank__container'>
        <h3>Player Bank £{playerBank}</h3>
      </section>
      <section className='bookieBetz__bank__container'>
        <h3>BookieBetz Bank £{bookieBetzBank}</h3>
      </section>

      <section className='betFair__bank__container'>
        <h3>BetFair (ex) Bank £{betFairBank}</h3>
      </section>
    </section>
  );
}

export default BankingBar;