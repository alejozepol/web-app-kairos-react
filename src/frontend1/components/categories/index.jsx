import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imgCategory from '../../assets/images/brand/iconDefauld.png';

const Categories = ({ item, hanldCategories }) => {
  const [itemActive, setItemActive] = useState(false);

  const viewSubcategory = () => {
    itemActive ? setItemActive(false) : setItemActive(true);
  };
  const selectItem = () => {
    hanldCategories();
    setItemActive(false);
  };
  return (
    <>
      <div role='button' tabIndex='0' className='category' onClick={() => viewSubcategory()}>
        <div className='category__image'>
          {
            item.urlImage ? (
              <img src={item.urlImage} alt={item.title} className='category__icon' />
            ) : (
              <img src={imgCategory} alt={item.title} className='category__icon' />
            )
          }
        </div>
        <div className='category__title'>
          <h3 className='category__title-item'>{item.title}</h3>
        </div>
        <div className='category__direction'>
          {
            itemActive ? (
              <i className='material-icons space_2_left_mg'> keyboard_arrow_down</i>
            ) : (
              <i className='material-icons space_2_left_mg'>keyboard_arrow_up</i>
            )
          }
        </div>
      </div>
      {
        itemActive && (
          <div className='subcategory'>
            <ul className='subcategory-items'>
              {
                item.subcategories.map((i) => <li key={i.id}><Link onClick={() => selectItem()} to={`/subcategory/${i.id}/${i.title}`}>{i.title}</Link></li>)
              }
            </ul>
          </div>
        )
      }
    </>
  );
};

export default Categories;
