import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

export const GameContext = React.createContext();

const GameContextProvider = ({ children }) => {
  const [playerBank, setPlayerBank] = useState(1000);
  const [betFairBank, setBetFairBank] = useState(0);
  const [bookieBetzBank, setBookieBetzBank] = useState(0);
  const [betHistory, setBetHistory] = useState([]);
  const [stage, setStage] = useState({
    stageOneOn: false,
    stageTwoOn: false,
    stageThreeOn: false,
    stageFourOn: false,
    stageFiveOn: false,
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
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
