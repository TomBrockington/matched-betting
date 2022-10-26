import React, { useContext, useState } from 'react';
import BankingBar from './BankingBar';
import StageOne from './StageOne';
import StageTwo from './StageTwo';
import StageThree from './StageThree';
import StageFour from './StageFour';
import './style.css';
import { GameContext } from '../../../context/GameContext';
import StageFive from './StageFive';
import StageSix from './StageSix';
import RandomResults from './RandomResults';
import StageEight from './StageEight';
import e from 'cors';

function Game() {
  const {
    stage,
    betFairBank,
    setBetFairBank,
    bookieBetzBank,
    setBookieBetzBank,
    depositData,
    setDepositData,
    playerBank,
    setPlayerBank,
    bankToggle,
    setBankToggle,
  } = useContext(GameContext);
  console.log('stage.stageOneOn', stage.stageOneOn);

  const handleBookieChange = (event) => {
    console.log('handleChange', event);
    const { name, value } = event.target;
    console.log('name', name, value);
    setDepositData({
      ...depositData,
      [name]: value,
    });
    setBankToggle(!bankToggle);
  };
  console.log('depositData', depositData);

  const submitBookieDeposit = (event) => {
    event.preventDefault();
    setPlayerBank((bank) => bank - depositData.bookieDepositData);
  };
  console.log('playerBank', playerBank);
  return (
    <>
      <BankingBar />;
      <StageOne />
      {stage.stageTwoOn && (
        <StageTwo
          handleBookieChange={handleBookieChange}
          submitBookieDeposit={submitBookieDeposit}
        />
      )}
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
