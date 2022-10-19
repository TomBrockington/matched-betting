import React, { useContext } from 'react'
import Nav from '../../components/nav/Nav'
import './style.css'
import { UserContext } from '../../context/UserContext' 


function Home() {
  const user = useContext(UserContext);

  console.log('user', user);
  
  return (
    <div className='home__container'>
      <Nav />
      Home
    </div>
  )
}

export default Home