import React from 'react';

function LinkItem({ link }) {
  // TODO: add new things to schema
  const { company, betType, minBet, url, endDate, desc } = link;

  return (
    <article className='link__list__item'>
      <div className='list__item__header'>
        <h3>Company: {company}</h3>
        <span>End Date: {endDate}</span>
      </div>

      <div className='list__item__main'>
        <p>BetType: {betType}</p>
        <p>Qualifying Bet: </p>
        <p>Minimum Bet: {minBet}</p>
        <p>Potential Profit: </p>
        <p>Link: {url}</p>
      </div>

      <div>
        <p>Description: {desc}</p>
      </div>
    </article>
  );
}

export default LinkItem;
