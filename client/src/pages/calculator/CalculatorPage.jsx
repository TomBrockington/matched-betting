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
            <div className='calculation__type__title'>Qualifying bet lay stake</div>
            <div className='calculation__type__formula'>Lay Stake = BackBet Odds / (LayBet Odds - commision) * Backbet Stake </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default CalculatorPage;
