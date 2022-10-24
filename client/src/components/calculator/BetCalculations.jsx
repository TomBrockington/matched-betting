export const calculateQualifyingBetStake = (betData) => {
  console.log('QUALIFYING BET');
  let x = betData.backBetOdds;
  let y = betData.layBetOdds - betData.exchangecommision / 100;
  let z = betData.backbetstake;
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
  let z = betData.backbetstake;
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
  let z = betData.backbetstake;
  console.log('X', x);
  console.log('y', y);
  console.log('z', z);
  let layBetData = (x / y) * z;
  return layBetData;
};
export const calculateRefundBetStake = (betData) => {
    console.log('REFUND');
};
