import React, { useContext } from 'react'
import Nav from '../../components/nav/Nav'
import { UserContext } from '../../context/UserContext';


function Account() {
  const { user } = useContext(UserContext);
  
  console.log('ACCOUNT user', user);
  return (
    <div>
        <Nav />
        <h2>Account</h2>
    </div>
  )
}

export default Account