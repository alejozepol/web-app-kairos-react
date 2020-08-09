import React from 'react';
import { connect } from 'react-redux';
import TopNavbar from '../../components/top-navbar';
import MenuHamburger from '../../components/menuHamburger';

const Header = ({ categories, onClick, viewCategories }) => {

  return (
    <>
      <div className='Layout__header'>
        <TopNavbar onClick={onClick} />
      </div>
      {
        viewCategories && (
          <div className='Layout__sideBottom'>
            <MenuHamburger categories={categories} hanldCategories={onClick} />
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
