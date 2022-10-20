import React, { useContext } from 'react';
import Nav from '../../components/nav/Nav';
import './style.css';
import { UserContext } from '../../context/UserContext';

function Home() {
  const { user, setUser } = useContext(UserContext);

  console.log('user', user);
  console.log('setuser', setUser);

  const setCurrentUser = () => {
    console.log('setting user');
    setUser({
      id: '70',
      email: 'tim@gmail.com',
      username: 'tim',
      posts: [],
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
