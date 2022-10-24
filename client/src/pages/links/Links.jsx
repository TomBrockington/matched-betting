import React, { useState } from 'react';
import LinkContainer from '../../components/links/LinkContainer';
import Nav from '../../components/nav/Nav';
import './style.css';
// TODO: add links to database
function Links() {
  const [isCreatingLink, setIsCreatingLink] = useState(false);

  const toggleAdd = () => {
    setIsCreatingLink(!isCreatingLink);
  };

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
          <button onClick={toggleAdd} className='link__cta'>
            Add Link
          </button>
          {isCreatingLink && (
            <div className='link__list__item add__list__item'>
              <div className='list__item__header'>
                <h3>Company: <input type='text' /></h3>
                <span>End Date: <input type='date' /></span>
              </div>

              <div className='list__item__main'>
                <p>BetType: <input type='text' /> </p>
                <p>Qualifying Bet: £ <input type='number' /></p>
                <p>Minimum Bet: £<input type='number' /></p>
                <p>Potential Profit: £ <input type='number' /></p>
                <p>Link: <input type='text' /></p>
              </div>

              <div>
                <p>Description:<input type='text' /></p>
                <button>Submit</button>
              </div>
            </div>
          )}
          <LinkContainer />
        </main>
      </div>
    </>
  );
}

export default Links;
