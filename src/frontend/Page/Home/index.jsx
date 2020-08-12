import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProductsCategories, addCart } from '../../redux/actions';
import GardenCardProducts from '../../container/gardenCardProducts';
import { getApi } from '../../hooks/requestApi';

const Home = ({ productsOfCategories, getProductsCategories, categories, addCart }) => {
  const [coundIdCategory, setCoundIdCategory] = useState(1);
  const [isIntersecting, setIntersecting] = useState(false);

  const observe = useRef(null);

  const handleAddToCart = (product) => () => {
    addCart(product);
  };

  const loadData = async (isIntersecting) => {
    const resProducts = getApi(`products/?categoryId=${categories[coundIdCategory].id}`);
    const resCategories = {
      categoryId: categories[coundIdCategory].id,
      title: categories[coundIdCategory].title,
      products: resProducts,
    };
    if (categories.length > coundIdCategory) {
      if (categories.length > coundIdCategory) {
        useEffect(() => {
          if (resProducts.length > 0) {
            setCoundIdCategory(coundIdCategory + 1);
            getProductsCategories(resCategories);
          }

        }, [isIntersecting, resProducts]);
      }
    }
  };

  const useOnScreen = (ref, rootMargin = '0px') => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entry) => {
          setIntersecting(entry[0].isIntersecting);
        },
        {
          threshold: [0.2],
          rootMargin,
        },
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        observer.unobserve(ref.current);
      };
    }, []);

    loadData(isIntersecting);

    return isIntersecting;
  };

  useOnScreen(observe, '-60px');

  return (
    <section className='Home'>
      {
        productsOfCategories
          .map((item) => (
            <GardenCardProducts
              key={item.categoryId}
              more={true}
              categoryId={item.categoryId}
              title={item.title}
              products={item.products.slice(0, 3)}
              handleAddToCart={handleAddToCart}
            />
          ))
      }
      {
        (categories.length - 2) > coundIdCategory && (
          <div
            ref={observe}
            style={{
              height: '100px',
            }}
          />
        )
      }
    </section>
  );
};

const mapStatecToProps = (state) => {
  return {
    ...state,
    productsOfCategories: state.productsOfCategories || [],
    categories: state.categories || [],
  };
};

const mapDispatchToProps = {
  getProductsCategories,
  addCart,
};

export default connect(mapStatecToProps, mapDispatchToProps)(Home);

