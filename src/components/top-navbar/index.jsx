import React from 'react';

const TopNavbar = () => {

  return (
    <nav className='topNavbar primary-bg-gradiente'>
      <button type='button' className='topNavbar__hamburguer' onClick='vierMenu()'>
        <i className='material-icons'>menu</i>
      </button>
{/*       <a className='topNavbar__brand'>
        <img src='assets/images/brand/LogoBlue.svg' alt='Logo' />
        <h1 className='topNavbar__brand-name'>Kairos</h1>
      </a> */}
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
