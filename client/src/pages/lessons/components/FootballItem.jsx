import React from 'react';

function FootballItem({ event, index }) {
  const betTypes = event.betTypes;
  const teamOneOdds = event.teamOneOdds;
  return (
    <li key={index}>
      <div> {event.title}</div>
      <div className='betData__container'>
        <ul>
          {betTypes.map((betType, index) => {
            return (
              <li className='betType' key={index}>
                {betType}
              </li>
            );
          })}
        </ul>
        <ul>
          {teamOneOdds.map((odds, index) => {
            return <li key={index}>{odds}</li>;
          })}
        </ul>
      </div>
    </li>
  );
}

export default FootballItem;
