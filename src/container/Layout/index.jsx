import React from 'react';
import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <section className='Layout'>
      <>
        <Header />
      </>
      <main className='Layout__content'>
        {children}
      </main>
    </section>
  );
};

export default Layout;
