import React from 'react';
import Calculator from '../../components/calculator/Calculator';
import Nav from '../../components/nav/Nav';
import './style.css';

function CalculatorPage() {
  return (
    <>
      <Nav />
      <header>
        <h2>Calulator</h2>
      </header>

      <Calculator />
    </>
  );
}

export default CalculatorPage;
