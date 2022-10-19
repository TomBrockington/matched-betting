import React, { useContext } from 'react'
import Nav from '../../components/nav/Nav';
import { UserContext } from '../../context/UserContext' 


function Forum() {
    const user = useContext(UserContext);

    console.log('user', user);
  return (
    <div className='forum__container'> 
        <Nav />
        <h2>Forum</h2>
        <header className='forum__header__container'>Forum Header</header>
        <aside className="forum_catagory__container"></aside>
        <main className='forum__posts__container'>Posts</main>
    </div>
  )
}

export default Forum