import React from 'react'
import LinkContainer from '../../components/links/LinkContainer'
import Nav from '../../components/nav/Nav'
import './style.css'
// TODO: add links to database
function Links() {
  return (
    <>
        <Nav />
        <main>
          <section className='links__container'>
            <header className='links__header'>
            Links are cool
            </header>
            <LinkContainer />
          </section>
        </main>

    </>
  )
}

export default Links