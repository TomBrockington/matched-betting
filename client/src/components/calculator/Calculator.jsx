import React, { useState } from 'react';
import { useEffect } from 'react';
import { betSampleData } from '../../utils/BetData';
import {
  calculateQualifyingBetStake,
  calculateFreeSnrBetStake,
  calculateFreeSrBetStake,
  calculateRefundBetStake,
} from './BetCalculations';
import './style.css';

function Calculator() {
  const [betType, setBetType] = useState('Qualifying Bet');
  const [betData, setBetData] = useState(betSampleData);
  const [layStake, setLayStake] = useState(0);

  console.log('betType', betType);
  console.log('betData', betData);

  useEffect(() => {
    if (betType === 'Qualifying Bet') {
      const result = calculateQualifyingBetStake(betData);
      setLayStake(result);
    }

    if (betType === 'Free Bet') {
      const result = calculateFreeSnrBetStake(betData);
      setLayStake(result);
    }

    if (betType === 'Free Bet SR') {
      const result = calculateFreeSrBetStake(betData);
      setLayStake(result);
    }

    if (betType === 'Refund Bet') {
      const result = calculateRefundBetStake(betData);
      setLayStake(result);
    }
  }, [betType, betData]);

  const handleBetOptionChange = (event) => {
    const { name, value } = event.target;
    setBetType(value);
  };

  const handleBetData = (event) => {
    const { name, value } = event.target;

    setBetData({
      ...betData,
      [name]: value,
    });
  };

  return (
    <>
      <article className='calculator__main__container'>
        <section className='bet__type__container'>
          <h3>Select Bet Type</h3>
          <form className='calculator__form'>
            <label htmlFor='qualifyingBet'>
              Qualifying Bet
              <input
                type='radio'
                name='betType'
                value='Qualifying Bet'
                id='qualifyingBet'
                checked={betType === 'qualifyingBet'}
                onChange={handleBetOptionChange}
              />
            </label>
            <label htmlFor='freeBet'>
              Free Bet (SNR)
              <input
                type='radio'
                name='betType'
                value='Free Bet'
                id='freeBet'
                checked={betType === 'freeBet'}
                onChange={handleBetOptionChange}
              />
            </label>
            <label htmlFor='freeBetSR'>
              Free Bet (SR)
              <input
                type='radio'
                name='betType'
                value='Free Bet SR'
                id='freeBetSR'
                checked={betType === 'freeBetSR'}
                onChange={handleBetOptionChange}
              />
            </label>
            <label htmlFor='refundBet'>
              Refund Bet
              <input
                type='radio'
                name='betType'
                value='Refund Bet'
                id='refundBet'
                checked={betType === 'refundBet'}
                onChange={handleBetOptionChange}
              />
            </label>
          </form>
          <p>
            Selected Bet Type: <strong>{betType}</strong>
          </p>
        </section>

        {/* Work done here */}
        <section className='calculator__inputs'>
          <div className='backbet__container'>
            <label htmlFor='backbetstake'>Back Bet Stake:</label>
            <input
              type='number'
              id='backbetstake'
              name='backbetstake'
              onChange={handleBetData}
            />

            <label htmlFor='backBetOdds'>Back Bet odds:</label>
            <input
              type='number'
              id='backBetOdds'
              name='backBetOdds'
              onChange={handleBetData}
            />

            <label htmlFor='bookiecommision'>
              Bookie commision:
              <input
                type='number'
                id='bookiecommision'
                name='bookiecommision'
                placeholder='0'
                onChange={handleBetData}
              />
              %
            </label>
          </div>

          <div className='laybet__container'>
            <label htmlFor='layBetOdds'>Lay Bet odds:</label>
            <input
              type='number'
              id='layBetOdds'
              name='layBetOdds'
              onChange={handleBetData}
            />

            <label htmlFor='exchangecommision'>
              Exchange commision:
              <input
                type='number'
                id='exchangecommision'
                name='exchangecommision'
                placeholder='5'
                onChange={handleBetData}
              />
              %
            </label>
          </div>

          <div className='laystake__container'>
            <h3>Set your lay stake to £{layStake}</h3>
          </div>
        </section>

        {/* results */}

        <section className='results__container'>
          <table className='results__table'>
            <tr className='table__row'>
              <th className='ignore'></th>
              <th>Bookie</th>
              <th>Exchange</th>
              <th>Total Profit</th>
            </tr>
            <tr className='table__row'>
              <td>Bookie Wins</td>
              <td>+ Bet</td>
              <td>- Lay</td>
              <td>Profit</td>
            </tr>
            <tr className='table__row'>
              <td>Exchange Wins</td>
              <td>- Bet</td>
              <td>+ Lay</td>
              <td>Profit</td>
            </tr>
          </table>

          <div>If bookie wins</div>
          <div>If exchange wins</div>
          <div>Total Profit</div>
        </section>

        {/* Alternate Outcomes */}

        <section>
          <div>Win</div>
          <div>Lose</div>
          <div>Draw counts as loss</div>
        </section>
      </article>
    </>
  );
}

export default Calculator;
