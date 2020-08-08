import React from 'react';
import { Link } from 'react-router-dom';
import CardProducts from '../../components/cardProducts';

const GardenCardProducts = ({ title, products = [{ id: 1 }] }) => {
  return (
    <section className='GardenCardProducts'>
      <h2 className='GardenCardProducts-title primary-dark'>
        {title}
      </h2>
      <div className='GardenCardProducts-items'>
        {
          products.map((product) => <CardProducts key={product.id} product={product} />)
        }
        <Link to='/' className='GardenCardProducts-more primary-dark'>
          <span>SHOW</span>
          <span className='GardenCardProducts-more-text'>
            MORE
            <span className='material-icons'>
              add_circle
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
};
export default GardenCardProducts;
