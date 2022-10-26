import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

export const GameContext = React.createContext();

const GameContextProvider = ({ children }) => {
  const [playerBank, setPlayerBank] = useState(1000);
  const [bankToggle, setBankToggle] = useState(false);
  const [betFairBank, setBetFairBank] = useState(0);
  const [bookieBetzBank, setBookieBetzBank] = useState(0);
  const [depositData, setDepositData] = useState({
    bookieDepositData: 0,
    exchangeDepositData: 0,
  });
  const [betHistory, setBetHistory] = useState([]);
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

  useEffect(() => {
    setPlayerBank(
      (prev) => (prev - depositData.bookieDepositData)
    );
  }, [bankToggle]);

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
        depositData,
        setDepositData,
        bankToggle,
        setBankToggle,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
