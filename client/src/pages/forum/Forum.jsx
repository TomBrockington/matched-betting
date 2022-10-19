import React, { useContext, useState } from 'react';
import Nav from '../../components/nav/Nav';
import { UserContext } from '../../context/UserContext';
import './style.css';

function Forum() {
  const user = useContext(UserContext);

  const [postCategory, setPostCategory] = useState('general')
  console.log('user', user);

  const toggleCategory = (event) => {
    console.log('togle', event.target.id);
    console.log('postCategory', postCategory);

    setPostCategory(event.target.id);
  }

  return (
    <div className='forum__container'>
      <Nav />
      <div className='forum__content_container'>
        <header className='forum__header__container'>
            <h2>Forum</h2>
        <span>Secondary header </span>
        </header>

        <div className='forum__content__container'>
          <aside className='forum__catagory__container'>
            <h3>Forum categories</h3>
            <div className="categories__container">
                <span name='general' id='general' onClick={(event) => toggleCategory(event)}>General</span>
                <span name='events' id='events' onClick={(event) => toggleCategory(event)}>Events</span>
                <span name='newbies' id='newbies' onClick={(event) => toggleCategory(event)}>Newbies</span>
            </div>
          </aside>
          <main className='forum__posts__container'>
            <h3>Posts: {postCategory}</h3>
            <span>Feel free to post and discuss anything here</span>
          </main>
        </div>

      </div>
    </div>
  );
}

export default Forum;
