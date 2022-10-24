import React, { useContext } from 'react'
import Nav from '../../components/nav/Nav'
import { UserContext } from '../../context/UserContext';


function Account() {
  const { user } = useContext(UserContext);
  const profile = user.profile;
  console.log('profile', profile);
  
  console.log('ACCOUNT user', user);
  return (
    <div>
        <Nav />
        <h2>Account</h2>
         <p>{user.username}</p>
         <p>{user.email}</p>
         {/* <p>{user.profile.firstname}</p> */}
        {/* <p>{user.profile.lastname}</p> */}
        {/* <p>{user.profile.betHistory} = [ ]</p> */}
        {/* <p>{user.profile.bank}</p> */}
        {/* <img src={user.profile.bank} alt='me' /> */}
    </div>
  )
}

export default Account