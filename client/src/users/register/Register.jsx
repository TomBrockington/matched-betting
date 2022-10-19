import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../style.css';

import UserForm from './UserForm';


function Register() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  let navigate = useNavigate();

  const handleChange = (event) => {
    console.log(event.target.value);
    const { value, name } = event.target;

    setUser({
      ...user,
      [name]: value,
    });
    console.log('user', user)
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); 
   
    if (user.password !== user.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const { email, password } = user;
    const res = await fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email, 
        password 
      }),
    });

    const value = await res.json();

    navigate('/login', {
      replace: true,
    });

  }

  return (
    <main className='register__container'>
        <section className='form__container'>
            <h2>Register Now</h2>
            <UserForm handleChange={handleChange} handleSubmit={handleSubmit} />
        </section>
    </main>
  )
}

export default Register