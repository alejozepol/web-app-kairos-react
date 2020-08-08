import React, { useState } from 'react';
import { connect } from 'react-redux';
import TopNavbar from '../../components/top-navbar';
import MenuHamburger from '../../components/menuHamburger';

const Header = ({ categories }) => {
  const [viewCategories, setViewCategories] = useState(false);

  const hanldCategories = () => {
    viewCategories ? setViewCategories(false) : setViewCategories(true);
  };

  return (
    <>
      <div className='Layout__header'>
        <TopNavbar onClick={hanldCategories} />
      </div>
      {
        viewCategories && (
          <div className='Layout__sideBottom'>
            <MenuHamburger categories={categories} hanldCategories={hanldCategories} />
          </div>
        )
      }
    </>
  );
};

const mapStatecToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStatecToProps, null)(Header);
