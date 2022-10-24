import React from 'react';
import './style.css';

function Calculator() {
  return (
    <>
      <article className='calculator__main__container'>
        <section className='bet__type__container'>
          <h3>Select Bet Type</h3>
          <form>
            <input
              type='radio'
              id='qualifying'
              name='qualifying'
              value='qualifying'
            />
            <label htmlFor='qualifying'>Qualifying Bet</label>

            <input type='radio' id='freebet' name='freebet' value='freebet' />
            <label htmlFor='freebet'>Free Bet</label>

            <input
              type='radio'
              id='refundbet'
              name='refundbet'
              value='refundbet'
            />
            <label htmlFor='refundbet'>Refund</label>
          </form>
        </section>

        {/* Work done here */}
        <section className='calculator__inputs'>
          <div className='backbet__container'>
            <label htmlFor='backbetstake'>Back Bet Stake:</label>
            <input
              type='text'
              id='backbetstake'
              name='backbetstake'
              value='backbetstake'
            />

            <label htmlFor='backbetodds'>Back Bet odds:</label>
            <input
              type='number'
              id='backbetodds'
              name='backbetodds'
              value='backbetodds'
            />

            <label htmlFor='bookiecommision'>
              Bookie commision:
              <input
                type='number'
                id='bookiecommision'
                name='bookiecommision'
                value='bookiecommision'
                placeholder='0'
              />
              %
            </label>
          </div>

          <div className='laybet__container'>
          <label htmlFor='laybetodds'>Lay Bet odds:</label>
            <input
              type='number'
              id='laybetodds'
              name='laybetodds'
              value='laybetodds'
            />

            <label htmlFor='exchangecommision'>
              Bookie commision:
              <input
                type='number'
                id='exchangecommision'
                name='exchangecommision'
                value='exchangecommision'
                placeholder='5'
              />
              %
            </label>
          </div>

          <div className='laystake__container'>
              <h3>Set your lay stake to £{14.75}</h3>
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
