import React from 'react';
import { connect } from 'react-redux';
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

export default connect(null, null)(Layout);
