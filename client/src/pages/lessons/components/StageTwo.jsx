import React from 'react'

function StageTwo({ handleBookieChange, submitBookieDeposit, bankToggle, setBankToggle }) {
  return (
    <article className='stage__container'>
      <div className='stage__title__container'>
      <h3>Stage Two: </h3>
        <h4>Join the bookie</h4>
      </div>

      <div className='stage__info__container'>
        <p>So you have found a free bet offer. BookieBetz are offering bet £10 and get a £10 free bet. Sign up being sure to check the rules, terms, countries, and withdrawal limits/minimums. Check any boxes required. Lets deposit £10 and move on the next step for now. </p>
      </div>

      <section className='stage__example__container'>
        <input type="number" name='betDateDeposit' onChange={handleBookieChange} />
        <button onClick={submitBookieDeposit}>DEPOSIT</button>
      </section>
    </article>
  )
}

export default StageTwo