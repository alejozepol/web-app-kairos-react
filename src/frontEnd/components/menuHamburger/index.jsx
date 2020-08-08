import React from 'react';
import Categories from '../categories';

const MenuHamburger = (props) => {
  const { categories, hanldCategories } = props;
  return (
    <section className='MenuHamburger bg-white'>
      <div className='MenuHamburger__content'>
        {
          categories.map((item) => <Categories item={item} hanldCategories={hanldCategories} />)
        }
      </div>
    </section>
  );
};

export default MenuHamburger;
