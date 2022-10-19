import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css';

import UserForm from './UserForm';


function Register() {
  const [user, setUser] = useState('');
  let navigate = useNavigate();

  
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