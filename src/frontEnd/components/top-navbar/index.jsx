import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search';
import logo from '../../assets/images/brand/LogoBlue.png';
import iconCart from '../../assets/images/brand/cartBlue.svg';

const TopNavbar = ({ onClick, count = 0 }) => {
  const isCart = count > 0;

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
      <Link to='login' className='topNavbar__login topNavbar__menu-btn avatar bg-light'>
        <h1>login</h1>
      </Link>
    </nav>
  );
};

export default TopNavbar;
