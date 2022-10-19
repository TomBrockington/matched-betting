import React from 'react';
import { Link } from 'react-router-dom';

function UserForm({ handleChange, handleSubmit }) {
  return (
    <>
      <form className='register__form' onSubmit={handleSubmit}>
        <div className='email__container'>
          <label htmlFor='email'>Email:</label>
          <input 
            type='email' 
            name='email' 
            id='email'
            onChange={handleChange}
            required />
        </div>

        <div className='password__container'>
          <label htmlFor='password'>Password:</label>
          <input 
            type='password' 
            name='password' 
            id='password'
            onChange={handleChange}
            required />
        </div>

        <div className='password__container'>
          <label htmlFor='confirmPassword'>Confirm Password:</label>
          <input 
            type='password' 
            name='confirmPassword' 
            id='confirmPassword'
            onChange={handleChange}
            required />
        </div>

        <div className='submit__container'>
          <input type='submit' className='btn' value='Submit!' />
        </div>

        <div className='login__link'>
          <Link to='/login'>or Login Here</Link>
        </div>
      </form>
    </>
  );
}

export default UserForm;
