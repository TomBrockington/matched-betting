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
  const { playerBank, stage } = useContext(GameContext);
  console.log('stage.stageOneOn', stage.stageOneOn);

  
  return (
    <>
      <BankingBar />;
      <StageOne />
      {stage.stageTwoOn && <StageTwo />}
      {stage.stageThreeOn && <StageThree />}
      {stage.stageFourOn && <StageFour />}
      {stage.stageFiveOn && <StageFive />}
      {stage.stageSixOn && <StageSix />}
      {stage.stageSevenOn && <RandomResults />}
      {stage.stageEightOn && <StageEight />}
    </>
  );
}

export default Game;
