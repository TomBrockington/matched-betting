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
</main>
    </>
  );
}

export default CalculatorPage;
