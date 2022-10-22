import React, { useContext } from 'react';
import Nav from '../../components/nav/Nav';
import './style.css';
import { UserContext } from '../../context/UserContext';

function Home() {
  const { user, setUser } = useContext(UserContext);

  const setCurrentUser = () => {
    console.log('setting user');
    setUser({
      id: '3',
      email: 'admin@email.com',
      username: 'Mr. Default',
      role: 'ADMIN',
      posts: [],
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbkBlbWFpbC5jb20iLCJpYXQiOjE2NjY0MTMzNzAsImV4cCI6MTY3MDAxMzM3MH0.SeDyUWXNdqGdVCnbgfEckjsV8xfmvNa5xQ_BvIUWHhU'
    });
  };

  return (
    <div className='home__container'>
      <Nav />
      Home
      <button onClick={setCurrentUser}>Set User</button>
    </div>
  );
}

export default Home;
