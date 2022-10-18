import React from 'react';
import './style.css';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='nav__container'>
      <div className='nav__logo__container'>
        <Link to='/'>
          <img src={Logo} alt='Matched Betting' />
        </Link>
      </div>

      <div className='nav__links__container'>
        <Link to='/calculator'>Calculator</Link>
        <Link to='/lessons'>Lessons</Link>
        <Link to='/forum'>Forum</Link>
        <Link to='/faq'>FAQ</Link>
        <Link to='/links'>Links</Link>
      </div>

{/* EVENTUALLY MAKE THESE CONDITION SO ONLY ONE IS SHOWN */}
      <div className='nav__user__features'>
        <div className="login__container">
          <Link to='/login'>Login</Link>
        </div>

        <div className="register__container">
          <Link to='/register'>Register</Link>
        </div>

        {/* ADD LOGOUT */}
      </div>
       
    </nav>
  );
}

export default Nav;
