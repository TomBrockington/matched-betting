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
      {links ? links.map((link, index) => {
        return (
          <LinkItem key={index} link={link} />
        )
      }) : <p>No links are availible to display</p>}
    </div> 
  )
}

export default LinkContainer;
