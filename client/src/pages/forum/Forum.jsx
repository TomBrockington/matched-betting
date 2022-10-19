import React, { useContext, useEffect, useState } from 'react';
import Nav from '../../components/nav/Nav';
import { UserContext } from '../../context/UserContext';
import './style.css';
import { categoryInfomation } from '../../utils/Categories'
import Posts from '../../components/posts/Posts';

const startingCategory = categoryInfomation[0]

function Forum() {
  const user = useContext(UserContext);
  console.log('user', user);

  const [postCategory, setPostCategory] = useState(startingCategory)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    console.log('using an effect');
    fetch(`http://localhost:4000/posts?category=${postCategory.query}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        setPosts(data.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [postCategory])


  const toggleCategory = (event) => {
    const categories  = categoryInfomation
    const newCategory = categories.filter(cat => cat.id === event.target.id)
    const categoryState = newCategory[0]

    setPostCategory(categoryState);
  }

  return (
    <div className='forum__container'>
      <Nav />
      <div className='forum__content_container'>
        <header className='forum__header__container'>
            <h2>Forum</h2>
        <span>Secondary header </span>
        </header>
        {/* TODO: make these float with the page as you scroll, add back to top button */}
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
            <h3>Posts: {postCategory.title}</h3>
            <span>{postCategory.subtitle}</span>
            <Posts posts={posts} />
          </main>
        </div>

      </div>
    </div>
  );
}

export default Forum;
