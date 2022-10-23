import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import '../style.css';
import UserForm from './UserForm';
import { UserContext } from '../../context/UserContext';


function Login() {
  const { setUser } = useContext(UserContext);

  const [userData, setUserData] = useState('');
  let navigate = useNavigate();

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('handleSubmit');

    const res = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    // returning data from local:4000 as res.json is a token that can be used as your auth badge
    const login = await res.json();
    console.log('login', login);
    console.log('login', login.user);

    // // saving the token to local storage
    localStorage.setItem(process.env.REACT_APP_USER_TOKEN, login.data);

    if (login.error) {
      return alert('Incorrect infomation entered');
    }
    setUser(
      login.user
    )
    
    navigate('/', {
      replace: true,
    });
  };

  return (
    <>
    {/* TODO: add in nav and adjust css */}
      <main className='register__container'>
        <section className='form__container'>
          <h2>Login</h2>
          <UserForm handleChange={handleChange} handleSubmit={handleSubmit} />
        </section>
      </main>
    </>
  );
}

export default Login;
