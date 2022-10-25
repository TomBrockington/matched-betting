import React, { useState } from 'react';
import { useEffect } from 'react';
import { betSampleData, betSampleResultsData } from '../../utils/BetData';
import {
  calculateQualifyingBetStake,
  calculateFreeSnrBetStake,
  calculateFreeSrBetStake,
  calculateRefundBetStake,
  bookieQualifyingResultData,
  exchangeQualifyingResultData,
  bookieSnrResultData,
  exchangeSnrResultData,
} from './BetCalculations';
import './style.css';

function Calculator() {
  const [betType, setBetType] = useState('Qualifying Bet');
  const [betData, setBetData] = useState(betSampleData);
  const [layStake, setLayStake] = useState(0.0);
  const [liability, setLiablilty] = useState(0.0);
  const [bookieResults, setBookieResults] = useState(betSampleResultsData);
  const [exchangeResults, setExchangeResults] = useState(betSampleResultsData);

  useEffect(() => {
    if (betType === 'Qualifying Bet') {
      console.log('QUALIFFFFFFY');
      const layStakeResult = calculateQualifyingBetStake(betData);
      const bookieBetResultsData = bookieQualifyingResultData(
        betData,
        layStake,
        liability
      );
      const exchangeBetResultsData = exchangeQualifyingResultData(
        betData,
        layStake,
        liability
      );

      setLayStake(layStakeResult.layBetData.toFixed(2));
      setLiablilty(layStakeResult.liabilityRequired.toFixed(2));
      setBookieResults(bookieBetResultsData);
      setExchangeResults(exchangeBetResultsData);
    }

    if (betType === 'Free Bet') {
      console.log('FREEEEE BET');
      const layStakeResult = calculateFreeSnrBetStake(betData);
      const bookieBetResultsData = bookieSnrResultData(
        betData,
        layStake,
        liability
      );
      const exchangeBetResultsData = exchangeSnrResultData(
        betData,
        layStake,
        liability
      );

      console.log('bookieBetResultsData', bookieBetResultsData);
      console.log('exchangeSnrResultData', exchangeBetResultsData);
      setLayStake(layStakeResult.toFixed(2));
    }

    console.log('bookieResultsXX', bookieResults);
    console.log('exchangeResultsXX', exchangeResults);

    if (betType === 'Free Bet SR') {
      const layStakeResult = calculateFreeSrBetStake(betData);
      setLayStake(layStakeResult.toFixed(2));
    }

    if (betType === 'Refund Bet') {
      const layStakeResult = calculateRefundBetStake(betData);
      setLayStake(layStakeResult.toFixed(2));
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
            <label htmlFor='backBetStake'>
              Back Bet Stake:
              <input
                type='number'
                id='backBetStake'
                name='backBetStake'
                onChange={handleBetData}
              />
            </label>
            <label htmlFor='backBetOdds'>
              Back Bet odds:
              <input
                type='number'
                id='backBetOdds'
                name='backBetOdds'
                onChange={handleBetData}
              />
            </label>
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
            <span>Your liability will be {liability}</span>
          </div>
        </section>

        {/* results 
          [
            [ ] [ B ] [ E ] [ P ]
            [BW] [B+] [L-] [£P]
            [EW] [B-] [L+] [£P]
          ]
        */}

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
              <td>{' '}{bookieResults.bookieResults.toFixed(2)}</td>
              <td>{' '}{bookieResults.exchangeResults.toFixed(2)}</td>
              <td>{' '}£{' '}{bookieResults.totalProfit.toFixed(2)}</td>
            </tr>
            <tr className='table__row'>
              <td>Exchange Wins</td>
              <td>{' '}{exchangeResults.bookieResults.toFixed(2)}</td>
              <td>{' '}{exchangeResults.exchangeResults.toFixed(2)}</td>
              <td>{' '}£{' '}{exchangeResults.totalProfit.toFixed(2)}</td>
            </tr>
          </table>
        </section>
      </article>
    </>
  );
}

export default Calculator;
