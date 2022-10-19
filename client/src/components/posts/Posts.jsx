import React from 'react'
import PostItem from './PostItem'
import './style.css'

function Posts({ posts }) {
  console.log('posts', posts);
  return (
    <section className='posts__container'>
      <ul>
         {posts.map((post, index) => {
             return (
              <PostItem post={post} key={index}/>
             )
         })}
      </ul>
    </section>
  )
}

export default Posts