import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';

const Layout = ({ children }) => {
  const [viewCategories, setViewCategories] = useState(false);

  const hanldCategories = () => {
    viewCategories ? setViewCategories(false) : setViewCategories(true);
  };

  return (
    <section className='Layout'>
      <>
        <Header onClick={hanldCategories} viewCategories={viewCategories} />
      </>
      <main className='Layout__content'>

        {
          viewCategories && (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div onClick={() => hanldCategories()} className='opacity' />
          )
        }
        {children}
      </main>
    </section>
  );
};

export default connect(null, null)(Layout);
