import React from 'react';
import TopNavbar from '../../components/top-navbar';
import MenuHamburger from '../../components/menuHamburger';

const Header = (props) => {
  return (
    <>
      <div className='Layout__header'>
        <TopNavbar />
      </div>
      <div className='Layout__sideBottom'>
        <MenuHamburger />
      </div>
    </>
  );
};

export default Header;
