import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imgRegister from '../../assets/images/register.png';
import { postApi } from '../../hooks/requestApi';

const Register = ({ history }) => {
  const [form, setValues] = useState({
    email: '',
  });
  const [error, setError] = useState({
    state: false,
    message: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  // eslint-disable-next-line consistent-return
  const handlSubmit = (event) => {
    event.preventDefault();
    if (error.state) {
      return setError({
        state: true,
        message: 'Las contraseñas deben ser iguales',
      });
    }
    delete form.password2;
    form.rol = 'ADMIN';
    postApi('auth/sign-up', form)
      .then(() => history.push('/login'))
      .catch((e) => setError({
        state: true,
        message: e,
      }));
  };
  return (
    <section className='register space_3_left space_3_right'>
      <div className='register__image'>
        <img src={imgRegister} alt='Imagen register' />
      </div>
      <form className='register__form' onSubmit={handlSubmit}>
        <h2 className='register__form-title'>Register</h2>
        <div className='register__form-name'>
          <input
            name='firstName'
            type='text'
            placeholder='Name'
            onChange={handleInput}
            required
          />
        </div>
        <div className='register__form-lastName'>
          <input
            name='lastName'
            type='text'
            placeholder='Lastname'
            onChange={handleInput}
            required
          />
        </div>
        <div className='register__form-email'>
          <input
            name='email'
            type='email'
            placeholder='example@domain.com'
            onChange={handleInput}
            required
          />
        </div>

        <div className='register__form-password'>
          <input
            name='password'
            className='register__form-password'
            type='password'
            placeholder='Password'
            onChange={handleInput}
            required
          />
        </div>

        <div className='register__form-password2'>
          <input
            name='password2'
            type='password'
            placeholder='Confirm password'
            onChange={handleInput}
            required
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
          {
            error.state && (<p className='warning'>{error.message}</p>)
          }
        </div>
      </form>

    </section>
  );
};

export default Register;
