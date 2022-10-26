import React, { useContext, useState } from 'react';
import BankingBar from './BankingBar';
import StageOne from './StageOne';
import StageTwo from './StageTwo';
import StageThree from './StageThree';
import StageFour from './StageFour';
import './style.css'
import { GameContext } from '../../../context/GameContext';
import StageFive from './StageFive';
import StageSix from './StageSix';
import RandomResults from './RandomResults';
import StageEight from './StageEight';

function Game() {

  const { playerBank } = useContext(GameContext);
  console.log('playerBank', playerBank);

  
  return (
    <>
      <BankingBar />;
      <StageOne />
      <StageTwo />
      <StageThree /> 
      <StageFour />
      <StageFive />
      <StageSix />
      <RandomResults />
      <StageEight />
    </>
  );
}

export default Game;
