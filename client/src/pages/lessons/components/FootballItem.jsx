import React from 'react';

const placeBet = (odds) => {
  console.log('bet placing', odds);
};

function FootballItem({ event, index }) {
  const betTypes = event.betTypes;
  const teamOneOdds = event.teamOneOdds;
  const teams = event.competitors;
  return (
    <li key={index}>
      <div> {event.title}</div>
      <div className='betData__container'>
        {teams.map((team, index) => {
          return (
            <>
              <h4>{team}</h4>
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
                  return (
                    <li key={index} className='bet__list__item'>
                      <div className='odds__container'>{odds}</div>
                      <div className='betnow__button__container'>
                        <button onClick={() => placeBet(odds)}>Bet</button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </>
          );
        })}
      </div>
    </li>
  );
}

export default FootballItem;
