import React, { useContext } from 'react';
import Nav from '../../components/nav/Nav';
import { UserContext } from '../../context/UserContext';
import './style.css';

function Account() {
  const { user } = useContext(UserContext);
  const profile = user.profile;
  console.log('profile', profile);

  console.log('ACCOUNT user', user);
  return (
    <>
      <Nav />
      <main className='account__container'>
        <div className='account__header__container'>
          <h2>Account</h2>
        </div>
        <article className='account__profile__container'>
          <div className='profile__image__container'>
            <img src={user.profile.profileImgUrl} alt={user.username} />
          </div>

          <div className='profile__data__container'>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.profile.firstname}</p>
            <p>{user.profile.lastname}</p>
            <p>{user.profile.betHistory} = [ ]</p>
            <p>£ {user.profile.bank}</p>
          </div>
        </article>
      </main>
    </>
  );
}

export default Account;
