import React, { useState } from 'react';
import Nav from '../../components/nav/Nav';
import './style.css';

function Lessons() {
  const [bank, setBank] = useState(1000)
  return (
    <>
      <Nav />
      <header className='lessons__header__container'>
        <h2>Learn How To Play</h2>
        <span>With our exclusive interactive game</span>
      </header>
      <section className='howtoplay__container'>
        <h3>How to play?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe molestiae dolorem impedit ad inventore dicta eum omnis quisquam, incidunt delectus eos cum molestias doloremque assumenda? Labore voluptas autem tenetur commodi quos recusandae fuga dolor doloribus temporibus, corporis quis enim non, facere obcaecati? Aliquam iusto repudiandae nostrum fugit aliquid. Harum?</p>
        </section>

      <main className='lessons__game__container'>
        content
        <section className='game__bank__container'>
           <h3>Bank £{bank}</h3>
        </section>
      </main>
    </>
  );
}

export default Lessons;
