import React from 'react'

function PostItem({ post }) {
  return (
    <li>
      <article className="post__item">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p>{post.createdAt}</p>
        <p>{post.userId}</p>
        <p>{post.ownerName}</p>
      </article>
    </li>
  )
}

export default PostItem