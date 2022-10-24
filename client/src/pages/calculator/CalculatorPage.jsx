import React from 'react';
import Calculator from '../../components/calculator/Calculator';
import Nav from '../../components/nav/Nav';
import './style.css';

function CalculatorPage() {
  return (
    <>
      <Nav />

      <header className='header__container'>
        <h2>Calulator</h2>
      </header>

      <main className='main__calculator__container'>
        <Calculator />

        <section className='calculations__container'>
            <h3>Calculations explained</h3>

          <article className='calculation__type'>
            <div className='calculation__type__title'><h3>Qualifying Bet Lay Stake</h3></div>
            <div className='calculation__type__formula'>Lay Stake = BackBet Odds / (LayBet Odds - commision) * Backbet Stake </div>
          </article>

          <article className='calculation__type'>
            <div className='calculation__type__title'><h3>Free Bet SNR Lay Stake(StakeNotReturned)</h3></div>
            <div className='calculation__type__formula'>Lay Stake = (BackBet Odds - 1) / (LayBet Odds - commision) * Backbet Stake </div>
          </article>

          <article className='calculation__type'>
            <div className='calculation__type__title'><h3>Free Bet SR Lay Stake (StakeReturned)</h3></div>
            <div className='calculation__type__formula'>Lay Stake = BackBet Odds  / (LayBet Odds - commision) * Backbet Stake </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default CalculatorPage;
