import React, { useContext } from 'react';
import Nav from '../../components/nav/Nav';
import { UserContext } from '../../context/UserContext';
import './style.css';

function Forum() {
  const user = useContext(UserContext);
  console.log('user', user);

  return (
    <div className='forum__container'>
      <Nav />
      <div className='forum__content_container'>
        <header className='forum__header__container'>
            <h2>Forum</h2>
        <span>Secondary header </span>
        </header>

        <div className='forum-content-container'>
          <aside className='forum_catagory__container'>Forum categories</aside>
          <main className='forum__posts__container'>Posts</main>
        </div>

      </div>
    </div>
  );
}

export default Forum;
