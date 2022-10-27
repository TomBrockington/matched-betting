import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

export const GameContext = React.createContext();

const GameContextProvider = ({ children }) => {
  const [playerBank, setPlayerBank] = useState(1000);
  const [bankToggle, setBankToggle] = useState(false);
  const [betFairBank, setBetFairBank] = useState(0.0);
  const [bookieBetzBank, setBookieBetzBank] = useState(0.0);
  const [bookieDepositData, setBookieDepositData] = useState(0);
  const [exchangeDepositData, setExchangeDepositData] = useState(0);
  const [generatedFootballEvents, setGeneratedFootballEvents] = useState([]);
  const [generatedRacingEvents, setGeneratedRacingEvents] = useState([]);
  const [betHistory, setBetHistory] = useState([]);
  const [currentBookieBet, setCurrentBookieBet] = useState({});
  const [currentExchangeBet, setCurrentExchangeBet] = useState({});
  const [totalInPlayBank, setTotalInPlayBank] = useState(0.0);
  const [stage, setStage] = useState({
    stageOneOn: true,
    stageTwoOn: true,
    stageThreeOn: true,
    stageFourOn: true,
    stageFiveOn: true,
    stageSixOn: true,
    stageSevenOn: true,
    stageEightOn: true,
  });

  return (
    <GameContext.Provider
      value={{
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
        bankToggle,
        setBankToggle,
        bookieDepositData,
        setBookieDepositData,
        exchangeDepositData,
        setExchangeDepositData,
        totalInPlayBank,
        setTotalInPlayBank,
        currentBookieBet,
        setCurrentBookieBet,
        currentExchangeBet,
        setCurrentExchangeBet,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
