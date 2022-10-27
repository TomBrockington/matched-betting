import React, { useContext, useState } from 'react'
import './style.css'

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
  } = useContext(GameContext);
  const findFootball = () => {
    console.log('footballSelected');
  }
  const findRacing = () => {
    console.log('footballSelected');
  }
  return (
    <section id='exchange__container'>
      <div className='exchange__header'>
        <h2>BetFair</h2>
        <span>In Account £{betFairBank}</span>
      </div>

      <div className='exchange__sports__selection'>
        <h3 onClick={findFootball}>FootBall</h3>
        <h3 onClick={findRacing}>Horse Racing</h3>
      </div>
    </section>
  )
}
export default BetFair