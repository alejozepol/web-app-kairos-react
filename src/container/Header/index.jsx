import React, { useState } from 'react';
import TopNavbar from '../../components/top-navbar';
import MenuHamburger from '../../components/menuHamburger';

const Header = (props) => {
  const [categories, setCategories] = useState(false);

  const viewCategories = () => {
    categories ? setCategories(false) : setCategories(true);
  };
  return (
    <>
      <div className='Layout__header'>
        <TopNavbar onClick={viewCategories} />
      </div>
      {
        categories && (
          <div className='Layout__sideBottom'>
            <MenuHamburger />
          </div>
        )
      }
    </>
  );
};

export default Header;
