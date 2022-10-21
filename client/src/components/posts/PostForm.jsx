import React, { useContext } from 'react';
import { useState } from 'react';

import { UserContext } from '../../context/UserContext';



function PostForm({ postCategory }) {
  const { user, setUser } = useContext(UserContext);
console.log('user', user);
  const [newPostArticle, setNewPostArticle] = useState({
    title: '',
    content: '',
    category: postCategory.query,
    ownerName: user.username
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setNewPostArticle({
      ...newPostArticle,
      [name]: value
    })

  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log('submitting');
// TODO: needs use effect to get user token, my fake user doesnt have one
    const { title, content, category, ownerName } = newPostArticle

    const res = await fetch('http://localhost:4000/post', {
      method: 'POST',
      headers: {
        'authorization': 'Bearer',
      },
      body: JSON.stringify(newPostArticle),
    });

    const newPostData = await res.json();
    console.log('newPostData', newPostData);

  }

  return (
    <section className='forum__post__container'>
      <h3 id='form__header'>Create a new post</h3>

      <form className='post__form' onSubmit={handleSubmit}>
        <div className='post__title__container'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title__textbox'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className='post__content__container'>
          <label htmlFor='content'>Content</label>
          <textarea 
            type='text' 
            name='content' 
            id='input__textarea' 
            onChange={(e) => handleChange(e)}
            />
        </div>

        <div className='post__final__container'>
          <div className='post__category__container'>
            <label htmlFor='category'>Category</label>
            <p>{postCategory.title}</p>
          </div>

          <div className='post__submit__container'>
            <button id='post__submit__btn' type='submit'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default PostForm;
