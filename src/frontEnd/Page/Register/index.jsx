import React from 'react';
import { Link } from 'react-router-dom';
import imgRegister from '../../assets/images/register.png';

const Register = () => {
  return (
    <section className='register space_3_left space_3_right'>
      <div className='register__image'>
        <img src={imgRegister} alt='Imagen register' />
      </div>
      <form className='register__form'>
        <h2 className='register__form-title'>Register</h2>
        <div className='register__form-name'>
          <input
            type='text'
            placeholder='Name'
          />
        </div>
        <div className='register__form-lastName'>
          <input
            type='text'
            placeholder='Lastname'
          />
        </div>
        <div className='register__form-email'>
          <input
            type='email'
            placeholder='example@domain.com'
          />
        </div>

        <div className='register__form-password'>
          <input
            className='register__form-password'
            type='password'
            placeholder='Password'
          />
        </div>

        <div className='register__form-password2'>
          <input
            type='password'
            placeholder='Confirm password'
          />
        </div>
        <div className='register__form-button'>
          <button type='submit' className='btn btn__primary'>
            <i className='material-icons'>
              person
            </i>
            Send
          </button>
          <p>
            Already have an account?
            {' '}
            <Link to='/login' className='contrast'>Sigup here</Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Register;
