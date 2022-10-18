import React from 'react';
import { Link } from 'react-router-dom';

function UserForm() {
  return (
    <>
      <form className='register__form'>
        <div className='email__container'>
          <label htmlFor='email'>Email:</label>
          <input type='text' name='email' required />
        </div>

        <div className='password__container'>
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' required />
        </div>

        <div className='password__container'>
          <label htmlFor='confirm-password'>Confirm Password:</label>
          <input type='password' name='confirm-password' required />
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
