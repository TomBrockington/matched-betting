import React from 'react';

function PostForm({ postCategory }) {
  return (
    <section className='forum__post__container'>
      <h3>Create a new post</h3>

      <form className='post__form'>
        
        <div className='post__title__container'>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' />
        </div>

        <div className='post__content__container'>
          <label htmlFor='content'>Content</label>
          <textarea type='text' name='content' className='input__textarea' />
        </div>

        <div className='post__final__container'>

          <div className='post__category__container'>
            <label htmlFor='category'>Category</label>
            <p>{postCategory.title}</p>
          </div>

          <div className='post__submit__container'>
            <button className='post__submit__btn' type='submit'>Submit</button>
          </div>

        </div>
      </form>
    </section>
  );
}

export default PostForm;
