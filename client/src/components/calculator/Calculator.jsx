import React from 'react'

function Calculator() {
  return (
    <>
    <main className='calculator__main__container'>
        <section className='bet__type__container'>
            <h3>Select Bet Type</h3>
            {/* TODO: convert to form components */}
          <form>
            <input
              type='radio'
              id='qualifying'
              name='qualifying'
              value='qualifying'
            />
            <label htmlFor='qualifying'>Qualifying Bet</label>

            <input 
              type='radio' 
              id='freebet' 
              name='freebet' 
              value='freebet' />
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
          <div>Back bet</div>
          <div>Lay bet</div>
          <div>Lay Stake</div>
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
      </main>
    </>
  )
}

export default Calculator