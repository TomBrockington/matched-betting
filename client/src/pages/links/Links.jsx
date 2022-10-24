import React from 'react';
import LinkContainer from '../../components/links/LinkContainer';
import Nav from '../../components/nav/Nav';
import './style.css';
// TODO: add links to database
function Links() {
  return (
    <>
      <Nav />
      <div className='links__container'>
        <header className='links__header'>
          <h2>Links</h2>
          <span>
            Here we have some long standing sign up offers from a wealth of
            bookies. Some links will be for temporary offers.
          </span>
          <span>Feel free to find and add links to help our members</span>
        </header>
        <main className='link__ul__container'>
          <button className='link__cta'>Add Link</button>
          <LinkContainer />
        </main>
      </div>
    </>
  );
}

export default Links;
