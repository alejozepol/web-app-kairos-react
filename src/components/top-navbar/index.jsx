import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/brand/LogoBlue.png';

const TopNavbar = ({ onClick }) => {
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
        <h1>Buscardor</h1>
      </div>
      <div className='topNavbar__car'>
        <h1>Carro</h1>
      </div>
      {/*       <a className='topNavbar__login topNavbar__menu-btn avatar bg-light'>
        <h1>login</h1>
      </a> */}
    </nav>
  );
};

export default TopNavbar;
