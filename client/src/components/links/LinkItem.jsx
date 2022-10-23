import React from 'react';

function LinkItem({ link }) {
  const { company, betType, minBet, url, endDate, desc } = link;
  console.log('company', company);

  return (
    <article>
      <h3>company {company}</h3>
      <p>betType {betType}</p>
      <p>minBet {minBet}</p>
      <p>url {url}</p>
      <p>endDate {endDate}</p>
      <p>description {desc}</p>
    </article>
  );
}

export default LinkItem;
