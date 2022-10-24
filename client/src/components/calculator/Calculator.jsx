import React, { useState } from 'react';
import { useEffect } from 'react';
import { betSampleData } from '../../utils/BetData';
import './style.css';

function Calculator() {
  const [betType, setBetType] = useState('Qualifying Bet');
  const [betData, setBetData] = useState(betSampleData);
  const [layStake, setLayStake] = useState(0);

  console.log('betType', betType);
  console.log('betData', betData);

  useEffect(() => {
    console.log('USING EFFECT');
    let layBetData = 0

    if (betType === 'Qualifying Bet') {
      console.log('QUALIFYING BET');
      let x = betData.backBetOdds
      let y = (betData.layBetOdds - (betData.exchangecommision / 100))
      let z = betData.backbetstake
      console.log('X', x)
      console.log('y', y);
      console.log('z', z );
      layBetData = x / y * z
      setLayStake(layBetData)
    }
    if (betType === 'Free Bet') {
      console.log('FREE BET');
      let x = (betData.backBetOdds - 1)
      let y = (betData.layBetOdds - (betData.exchangecommision / 100))
      let z = betData.backbetstake
      console.log('X', x)
      console.log('y', y);
      console.log('z', z );
      layBetData = x / y * z
      setLayStake(layBetData)
    }

    if (betType === 'Refund Bet') {
      console.log('REFUND BET');
      // let x = (betData.backBetOdds - 1)
      // let y = (betData.layBetOdds - (betData.exchangecommision / 100))
      // let z = betData.backbetstake
      // console.log('X', x)
      // console.log('y', y);
      // console.log('z', z );
      // layBetData = x / y * z
      // setLayStake(layBetData)
    }
    console.log('LAYDATA', layBetData);
  }, [betType, betData])
 
  const handleBetOptionChange = (event) => {
    const { name, value } = event.target;
    console.log('name', name, value);
    setBetType(value);
  };

  const handleBetData = (event) => {
    const { name, value } = event.target;
    console.log('name', name);
    console.log('value', value);

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
          <form>
            <input
              type='radio'
              name='betType'
              value='Qualifying Bet'
              id='qualifyingBet'
              checked={betType === 'qualifyingBet'}
              onChange={handleBetOptionChange}
            />
            <label htmlFor='qualifyingBet'>Qualifying Bet</label>

            <input
              type='radio'
              name='betType'
              value='Free Bet'
              id='freeBet'
              checked={betType === 'freeBet'}
              onChange={handleBetOptionChange}
            />
            <label htmlFor='freeBet'>Free Bet (SNR)</label>

            <input
              type='radio'
              name='betType'
              value='Refund Bet'
              id='refundBet'
              checked={betType === 'refundBet'}
              onChange={handleBetOptionChange}
            />
            <label htmlFor='refundBet'>Refund Bet</label>
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
