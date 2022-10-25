export const calculateQualifyingBetStake = (betData) => {
  console.log('QUALIFYING BET');
  let x = betData.backBetOdds;
  let y = betData.layBetOdds - betData.exchangecommision / 100;
  let z = betData.backBetStake;
  console.log('X', x);
  console.log('y', y);
  console.log('z', z);
  let layBetData = (x / y) * z;
  return layBetData;
};

export const calculateFreeSnrBetStake = (betData) => {
  console.log('FREE BET');
  let x = betData.backBetOdds - 1;
  let y = betData.layBetOdds - betData.exchangecommision / 100;
  let z = betData.backBetStake;
  console.log('X', x);
  console.log('y', y);
  console.log('z', z);
  let layBetData = (x / y) * z;
  return layBetData;
};

export const calculateFreeSrBetStake = (betData) => {
  console.log('FREE BET SR');
  let x = betData.backBetOdds;
  let y = betData.layBetOdds - betData.exchangecommision / 100;
  let z = betData.backBetStake;
  console.log('X', x);
  console.log('y', y);
  console.log('z', z);
  let layBetData = (x / y) * z;
  return layBetData;
};

export const calculateRefundBetStake = (betData) => {
    console.log('REFUND');
};

export const bookieResultData = (betData, layStake) => {
  console.log('bookieResult', betData);
  // Winnings
  let totalReturn = (betData.backBetOdds * betData.backBetStake);
  let totalWon = totalReturn - betData.backBetStake
  // Losses
  let totalLosses = Number(layStake)
  // Profit
  let x = (betData.backBetOdds - 1)
  console.log('x', x);
  let y = betData.backBetStake 
  let z = (betData.layBetOdds - 1) * layStake
  console.log('z', z);
  let totalProfit = x * y - z
  return {totalWon, totalLosses, totalProfit}
}

export const exchangeResultData = (betData, layStake) => {
  console.log('exchangeResult', betData);
   // Winnings
   let totalReturn = Number(layStake);
   let totalWon = (totalReturn * (1 - (betData.exchangecommision / 100))) - betData.backBetStake
   console.log('totalWon', totalWon);
   // Losses
   let totalLosses = layStake * (betData.layBetOdds - 1)
   // Profit
   let x = (betData.backBetOdds - 1)
   console.log('x', x);
   let y = betData.backBetStake 
   let z = (betData.layBetOdds - 1) * layStake
   console.log('z', z);
   let totalProfit = x * y - z
   return {totalWon, totalLosses, totalProfit}
}

