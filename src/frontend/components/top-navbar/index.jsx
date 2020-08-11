import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search';
import logo from '../../assets/images/brand/LogoBlue.png';
import iconCart from '../../assets/images/brand/cartBlue.svg';
import avatar from '../../assets/images/avatar.png';

const TopNavbar = ({ onClick, count = 0, user }) => {

  const isCart = count > 0;
  const isLogin = Object.keys(user).length !== 0 || false;

  return (
    <nav className='topNavbar bg-white'>
      <button type='button' className='topNavbar__hamburguer' onClick={() => onClick()}>
        <i className='material-icons primary'>menu</i>
      </button>
      <Link to='/' className='topNavbar__brand'>
        <img src={logo} alt='Logo' />
        <h1 className='topNavbar__brand-name'>Kairos</h1>
      </Link>
      <div className='topNavbar__search'>
        <Search />
      </div>
      <div className='topNavbar__cart'>
        <div className='cart'>
          <img className='cart__logo' src={iconCart} alt='Icon Cart' />
          {
            isCart && (<i className='bg-contrast animation'>{count}</i>)
          }
        </div>
      </div>
      {
        isLogin ? (
          <Link to='/deskboard' className='topNavbar__login topNavbar__menu-btn avatar bg-light'>
            { user.urlImage ? (
              <img src={user.urlImage} alt={user.firstName} />
            ) : (
              <img src={avatar} alt={user.firstName} />
            )}
          </Link>
        ) : (
          <Link to='/login' className='topNavbar__login'>
            <button type='button' className='btn btn__primary'>
              <i className='material-icons'>
                person
              </i>
              Login
            </button>
          </Link>
        )
      }
    </nav>
  );
};

export default TopNavbar;
