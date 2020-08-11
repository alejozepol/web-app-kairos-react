import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProductsCategories } from '../../redux/actions';
import GardenCardProducts from '../../container/gardenCardProducts';
import { getApi } from '../../hooks/requestApi';

const Home = ({ productsOfCategories, getProductsCategories, categories }) => {
  const [coundIdCategory, setCoundIdCategory] = useState([1, 2]);
  const [resAPI, setResAPI] = useState(null)

  const observe = useRef(null);

  const useOnScreen = (ref, rootMargin = '0px') => {
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin,
        },
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
    }, []);

    /*     getProductsCategories(getApi(`products/?categoryId=${categories[coundIdCategory[0]].id}`));
    getProductsCategories(getApi(`products/?categoryId=${categories[coundIdCategory[1]].id}`)); */
    /*     if (categories.length > coundIdCategory[1]) {
      setCoundIdCategory([coundIdCategory[0] + 1, coundIdCategory[1] + 1]);
      console.log(coundIdCategory);
    } */
    if (categories[coundIdCategory[0]]) {
      const res = getApi(`products/?categoryId=${categories[coundIdCategory[0]].id}`)
      console.log(res)
    }
    return isIntersecting;
  };

  const onScreen = useOnScreen(observe);
  console.log(observe);

  return (
    <section className='Home'>
      {
        productsOfCategories
          .map((item) => (
            <GardenCardProducts
              more={true}
              key={item.categoryId}
              categoryId={item.categoryId}
              title={item.title}
              products={item.products.slice(0, 3)}
            />
          ))
      }
      <div
        ref={observe}
        style={{
          backgroundColor: onScreen ? 'transparent' : 'transparent',
        }}
      />
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
};

export default connect(mapStatecToProps, mapDispatchToProps)(Home);

