import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMeasures, createProdut, getProdut } from '../../redux/actions';
import { getApi, postApi } from '../../hooks/requestApi';

const FormProducts = (props) => {
  const {
    match,
    categories,
    createProdut,
    getMeasures,
    getProdut,
    product,
    measures,
    user,
    history,
  } = props;

  const { id } = match.params;
  const [isNew, setIsNew] = useState(true);
  const [form, setValues] = useState({
    active: false,
    categoryId: '1',
    description: 'd',
    measureId: '1',
    quantity: '0',
    subcategoryId: '1',
    title: 'a',
    urlImage: 'a',
  });
  const p = getApi(`products/${id}`);
  useEffect(() => {
    if (id !== 'new') {
      setIsNew(false);
      getProdut(p);
    }
  }, [p]);

  const [subcategories, setSubcategories] = useState(
    categories.find((item) => item.id == Number(1)).subcategories,
  );
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
      const s = categories.find((item) => (
        item.id == Number(event.target.value)).subcategories);
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
        {isNew ?
          (
            <>
              <div className='ProductDetail__form-status'>
                <p className='ProductDetail__form-status-title'>
                  <b>Status</b>
                </p>
                <div className='ProductDetail__form-status-a'>
                  <label htmlFor='status-a'>
                    Active
                    <input
                      id='status-a'
                      type='radio'
                      name='active'
                      onChange={handleInput}
                      required
                    />
                  </label>
                </div>
                <div className='ProductDetail__form-status-i'>
                  <label htmlFor='status-i'>
                    Inactive
                    <input
                      id='status-i'
                      type='radio'
                      name='active'
                      onChange={handleInput}
                    />
                  </label>
                </div>
              </div>

              <div className='ProductDetail__form-title'>
                <label htmlFor='title'>
                  <b>Title</b>
                  <input
                    name='title'
                    id='title'
                    type='text'
                    placeholder='title'
                    onChange={handleInput}
                    required
                  />
                </label>
              </div>

              <div className='ProductDetail__form-description'>
                <label htmlFor='description'>
                  <b>
                    Description
                  </b>
                  <textarea
                    name='description'
                    id='description'
                    type='text'
                    placeholder='description'
                    onChange={handleInput}
                    required
                  />

                </label>
              </div>

              <div className='ProductDetail__form-quantity'>
                <label htmlFor='quantity'>
                  <b>
                    Quantity
                  </b>
                  <input
                    max='99999'
                    name='quantity'
                    type='number'
                    placeholder='quantity'
                    onChange={handleInput}
                    required
                  />
                </label>
              </div>

              <div className='ProductDetail__form-measure'>
                <label htmlFor='measureId'>
                  <b>Measure</b>
                  <select
                    name='measureId'
                    onChange={handleInput}
                    required
                  >
                    {
                      measures.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.measure}
                        </option>
                      ))
                    }
                  </select>
                </label>
              </div>

              <div className='ProductDetail__form-category'>
                <label htmlFor='categoryId'>
                  <b>Category</b>
                  <select
                    name='categoryId'
                    onChange={handleInput}
                    required
                  >
                    {
                      categories.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.title}
                        </option>
                      ))
                    }
                  </select>
                </label>
              </div>

              <div className='ProductDetail__form-subcategory'>
                <label htmlFor='subcategoryId'>
                  <b>
                    Subcategory
                  </b>
                  <select
                    name='subcategoryId'
                    onChange={handleInput}
                    required
                  >
                    {
                      subcategories.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.title}
                        </option>
                      ))
                    }
                  </select>
                </label>
              </div>
              <label htmlFor='urlImage' className='ProductDetail__form-img'>
                <img src='{product.urlImage}' alt='{product.title}' />
                <img src='{product.urlImage}' alt='{product.title}' />
                <input
                  id='urlImage'
                  type='file'
                  placeholder='Image'
                  accept='image/*'
                  onChange={handleInput}
                />
              </label>
            </>
          ) : (
            <>
              <div className='ProductDetail__form-status'>
                <p className='ProductDetail__form-status-title'>
                  <b>Status</b>
                </p>
                <div className='ProductDetail__form-status-a'>
                  <label htmlFor='status-a'>
                    Active
                    <input
                      id='status-a'
                      type='radio'
                      name='active'
                      onChange={handleInput}
                      required
                    />
                  </label>
                </div>
                <div className='ProductDetail__form-status-i'>
                  <label htmlFor='status-i'>
                    Inactive
                    <input
                      id='status-i'
                      type='radio'
                      name='active'
                      onChange={handleInput}
                    />
                  </label>
                </div>
              </div>

              <div className='ProductDetail__form-title'>
                <label htmlFor='title'>
                  <b>Title</b>
                  <input
                    name='title'
                    id='title'
                    type='text'
                    placeholder='title'
                    onChange={handleInput}
                    required
                  />
                </label>
              </div>

              <div className='ProductDetail__form-description'>
                <label htmlFor='description'>
                  <b>
                    Description
                  </b>
                  <textarea
                    name='description'
                    id='description'
                    type='text'
                    placeholder='description'
                    onChange={handleInput}
                    required
                  />

                </label>
              </div>

              <div className='ProductDetail__form-quantity'>
                <label htmlFor='quantity'>
                  <b>
                    Quantity
                  </b>
                  <input
                    max='99999'
                    name='quantity'
                    type='number'
                    placeholder='quantity'
                    onChange={handleInput}
                    required
                  />
                </label>
              </div>

              <div className='ProductDetail__form-measure'>
                <label htmlFor='measureId'>
                  <b>Measure</b>
                  <select
                    name='measureId'
                    onChange={handleInput}
                    required
                  >
                    {
                      measures.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.measure}
                        </option>
                      ))
                    }
                  </select>
                </label>
              </div>

              <div className='ProductDetail__form-category'>
                <label htmlFor='categoryId'>
                  <b>Category</b>
                  <select
                    name='categoryId'
                    onChange={handleInput}
                    required
                  >
                    {
                      categories.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.title}
                        </option>
                      ))
                    }
                  </select>
                </label>
              </div>

              <div className='ProductDetail__form-subcategory'>
                <label htmlFor='subcategoryId'>
                  <b>
                    Subcategory
                  </b>
                  <select
                    name='subcategoryId'
                    onChange={handleInput}
                    required
                  >
                    {
                      subcategories.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.title}
                        </option>
                      ))
                    }
                  </select>
                </label>
              </div>
              <label htmlFor='urlImage' className='ProductDetail__form-img'>
                <img src='{product.urlImage}' alt='{product.title}' />
                <img src='{product.urlImage}' alt='{product.title}' />
                <input
                  id='urlImage'
                  type='file'
                  placeholder='Image'
                  accept='image/*'
                  onChange={handleInput}
                />
              </label>
            </>
          )}
        <button type='submit' className='content__button ProductDetail__form-btn'>
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
    product: state.product,
  };
};

const mapDispatchToProps = {
  getMeasures,
  createProdut,
  getProdut,
};

export default connect(mapStatecToProps, mapDispatchToProps)(FormProducts);
