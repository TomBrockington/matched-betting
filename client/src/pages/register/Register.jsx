import React from 'react'
import './style.css';
import UserForm from './UserForm';


function Register() {
  return (
    <main className='register__container'>
        <section className='form__container'>
            <h2>Register Now</h2>
            <UserForm />
        </section>
    </main>
  )
}

export default Register