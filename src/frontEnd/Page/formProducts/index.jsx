/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMeasures, createProdut } from '../../redux/actions';
import { getApi, postApi } from '../../hooks/requestApi';

const FormProducts = ({ match, categories, createProdut, getMeasures, measures, user, history }) => {
  // eslint-disable-next-line no-unused-vars
  const { id, action } = match.params;
  const [form, setValues] = useState({
    categoryId: 1,
    subcategoryId: 2,
    measureId: 2,
  });
  const [subcategories, setSubcategories] = useState(categories.find((item) => item.id == Number(1)).subcategories);

  const m = getApi('measures');
  useEffect(() => {
    getMeasures(m);
  }, [m]);

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
    if (event.target.name === 'categoryId') {
      const s = categories.find((item) => item.id == Number(event.target.value)).subcategories;
      setSubcategories(s);
    }
  };

  const handlSubmit = (event) => {
    event.preventDefault();
    if (form.active == 'on') {
      form.active = true;
    } else {
      form.active = false;
    }
    form.urlImage = 'https://images.ctfassets.net/ppt0nrovh5yl/4o2KvTtyCEhZi5WeDBjW7w/baff4852fa6fd71c7d26122ff850610d/Activia_Bebible_Natural.jpg?w=768&q=80';
    postApi('products/', form, user.token)
      .then((res) => createProdut(res))
      .then(() => history.push('/deskboard'))
      .catch((e) => setError(true));
  };

  return (
    <section className='ProductDetail'>
      <h2 className='ProductDetail__title'>Detail Product</h2>
      <form className='ProductDetail__form' onSubmit={handlSubmit}>
        <div className='ProductDetail__form-status'>
          <label className='ProductDetail__form-status-title'>
            <b>Status</b>
          </label>
          <div className='ProductDetail__form-status-a'>
            <input required id='status-a' type='radio' name='active' onChange={handleInput} />
            <label htmlFor='status-a'>
              Active
            </label>
          </div>
          <div className='ProductDetail__form-status-i'>
            <input id='status-i' type='radio' name='active' onChange={handleInput} />
            <label htmlFor='status-i'>
              Inactive
            </label>
          </div>
        </div>

        <div className='ProductDetail__form-title'>
          <label htmlFor='title'>
            <b>Title</b>
          </label>
          <input required name='title' id='title' type='text' placeholder='title' onChange={handleInput} />
        </div>

        <div className='ProductDetail__form-description'>
          <label>
            <b>
              Description
            </b>
          </label>
          <textarea required name='description' id='description' type='text' placeholder='description' onChange={handleInput} />
        </div>

        <div className='ProductDetail__form-quantity'>
          <label>
            <b>
              Quantity
            </b>
          </label>
          <input required max='99999' name='quantity' type='number' placeholder='quantity' onChange={handleInput} />
        </div>

        <div className='ProductDetail__form-measure'>
          <label>
            <b>Measure</b>
          </label>
          <select required name='measureId' onChange={handleInput}>
            {
              measures.map((item) => <option key={item.id} value={item.id}>{item.measure}</option>)
            }
          </select>
        </div>
        <div className='ProductDetail__form-category'>
          <label>
            <b>Category</b>
          </label>
          <select required name='categoryId' onChange={handleInput}>
            {
              categories.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)
            }
          </select>
        </div>

        <div className='ProductDetail__form-subcategory'>
          <label>
            <b>
              Subcategory
            </b>
          </label>
          <select required name='subcategoryId' onChange={handleInput}>
            {
              subcategories.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)
            }
          </select>
        </div>
        <label htmlFor='urlImage' className='ProductDetail__form-img'>
          <img src='' alt='{{ productsForm.controls.title.value }}' />
          <img src='croppedImage' alt='{{ productsForm.controls.title.value }}' />
          <input
            id='urlImage'
            type='file'
            placeholder='Image'
            accept='image/*'
            onChange={handleInput}
          />
        </label>
        <button to='deskboard/new/edit' type='submit' className='content__button ProductDetail__form-btn'>
          <i className='material-icons'>
            add
          </i>
          Agregar
        </button>
      </form>
    </section>
  );
};

const mapStatecToProps = (state) => {
  return {
    categories: state.categories,
    measures: state.measures,
    user: state.user,
  };
};

const mapDispatchToProps = {
  getMeasures,
  createProdut,
};

export default connect(mapStatecToProps, mapDispatchToProps)(FormProducts);
