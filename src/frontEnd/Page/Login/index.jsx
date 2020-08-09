import React from 'react';
import { Link } from 'react-router-dom';
import imgLogin from '../../assets/images/login.png';

const Login = () => {
  return (
    <section className='login space_3_left space_3_right'>
      <div className='login__image'>
        <img src={imgLogin} alt='imagen Login' />
      </div>
      <div className='login__content'>
        <form className='login__form'>
          <h2>Login</h2>
          <input
            className='space_bottom_mg'
            type='email'
            placeholder='example@domain.com'
          />
          <input
            className='space_bottom_mg'
            type='password'
            placeholder='Password'
          />
          <div className='login__form-btn'>
            <button type='submit' className='btn btn__primary'>
              <i className='material-icons'>
                person
              </i>
              Send
            </button>
          </div>
          <p>
            You are not registered?
            {' '}
            <Link to='/register' className='login__contrast contrast-dark'>Register here</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
