import React from 'react';

function PostForm({ postCategory }) {
  return (
    <section className='forum__post__container'>
      <h3>Create a new post</h3>

      <form className='post__form'>
        <label htmlFor='title'>Title</label>
        <input type='text' name='title' />

        <label htmlFor='contetn'>Content</label>
        <textarea type='text' name='content' className='input__textarea' />

        <label htmlFor='category'>Category</label>
        <p>{postCategory.title}</p>
      </form>
    </section>
  );
}

export default PostForm;
