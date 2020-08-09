import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import imgLogin from '../../assets/images/login.png';
import { loginRequest } from '../../redux/actions';
import { postApi } from '../../hooks/requestApi';

const Login = ({ loginRequest, history }) => {
  const [form, setValues] = useState({
    email: '',
  });
  const [error, setError] = useState(false);

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(form);
  };

  const handlSubmit = (event) => {
    event.preventDefault();
    const userCredentials = `${form.email}:${form.password}`;
    postApi('auth/sign-in', form, null, userCredentials)
      .then(({ user, token }) => {
        // eslint-disable-next-line no-param-reassign
        user.token = token;
        return user;
      })
      .then((res) => loginRequest(res))
      .then(() => history.push('/deskboard'))
      .catch((e) => setError(true));
  };

  return (
    <section className='login space_3_left space_3_right'>
      <div className='login__image'>
        <img src={imgLogin} alt='imagen Login' />
      </div>
      <div className='login__content'>
        <form className='login__form' onSubmit={handlSubmit}>
          <h2>Login</h2>
          <input
            name='email'
            className='space_bottom_mg'
            type='email'
            placeholder='example@domain.com'
            onChange={handleInput}
            required
          />
          <input
            name='password'
            className='space_bottom_mg'
            type='password'
            placeholder='Password'
            onChange={handleInput}
            required
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
        {
          error && (<p className='warning'>Usuario o Contraseña invalida</p>)
        }
      </div>
    </section>
  );
};
const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
