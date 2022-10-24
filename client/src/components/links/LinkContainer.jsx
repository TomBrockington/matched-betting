import React, { useEffect, useState } from 'react';
import LinkItem from './LinkItem';

function LinkContainer() {
  const [links, setLinks] = useState('');

  useEffect(() => {
    fetch(`http://localhost:4000/links`)
      .then((res) => res.json())
      .then((data) => {
        setLinks(data.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  return (
    <div>
      <ul>
      {links ? links.map((link, index) => {
        console.log('index', index);
        return (
          <li key={index}>
            <LinkItem link={link} />
          </li>
        )
      }) : <p>No links are availible to display</p>}
      </ul>
    </div> 
  )
}

export default LinkContainer;