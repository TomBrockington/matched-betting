import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import '../style.css';

import UserForm from './UserForm';


function Register() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  let navigate = useNavigate();

  const handleChange = (event) => {
    console.log(event.target.value);
    const { value, name } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); 
   
    if (userData.password !== userData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const { email, password } = userData;

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

    const userResData = await res.json();

    navigate('/login', {
      replace: true,
    });

  }

  return (
    <>
    <Nav />
    <main className='register__container'>
        <section className='form__container'>
            <h2>Register Now</h2>
            <UserForm handleChange={handleChange} handleSubmit={handleSubmit} />
        </section>
    </main>
    </>
  )
}

export default Register