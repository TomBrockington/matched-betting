import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
function Post() {
    const [postDisplayed, setPostDisplayed] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const { post } = location.state;
    console.log('post', post);

    useEffect(() => {
        setPostDisplayed(post)
    }, [])

    console.log('postDisplayed', postDisplayed);

  return (
    <main>
        View a single post here
        <h2>{postDisplayed.title}</h2>
        <h2>{postDisplayed.content}</h2>
        <h2>{postDisplayed.createdAt}</h2>
        <p>{postDisplayed.ownerName}</p>
        
    </main>
  )
}

export default Post