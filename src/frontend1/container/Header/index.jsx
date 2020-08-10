import React from 'react';
import { connect } from 'react-redux';
import TopNavbar from '../../components/top-navbar';
import MenuHamburger from '../../components/menuHamburger';

const Header = ({ categories, onClick, viewCategories, cart, user }) => {

  return (
    <>
      <div className='Layout__header'>
        <TopNavbar onClick={onClick} count={cart.length || 0} user={user} />
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
    cart: state.cart || [],
    user: state.user || {},
  };
};

export default connect(mapStatecToProps, null)(Header);
