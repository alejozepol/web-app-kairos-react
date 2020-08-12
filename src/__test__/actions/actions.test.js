import { addCart, getCategories, getProduts, createProdut, getProdut, getProductsCategories, getProductsCategory } from '../../frontend/redux/actions';
import CategoryMock from '../../__mocks__/categoryMock';
import ProductMock from '../../__mocks__/productMock';
import productsOfCategoryMock from '../../__mocks__/productsOfCategoryMock';

describe('====> Actions ====> ', () => {

  test('action ==> addCart', () => {
    const payload = ProductMock;
    const expected = {
      type: 'ADD_CART',
      payload,
    };
    expect(addCart(payload)).toEqual(expected);
  });

  test('action ==> getCategories', () => {
    const payload = [CategoryMock];
    const expected = {
      type: 'GET_CATEGORIES',
      payload,
    };
    expect(getCategories(payload)).toEqual(expected);
  });

  test('action ==> getProducts', () => {
    const payload = [ProductMock];
    const expected = {
      type: 'GET_PRODUCTS',
      payload,
    };
    expect(getProduts(payload)).toEqual(expected);
  });

  test('action ==> getProduct', () => {
    const payload = [ProductMock];
    const expected = {
      type: 'GET_PRODUCT',
      payload,
    };
    expect(getProdut(payload)).toEqual(expected);
  });

  test('action ==> createProduct', () => {
    const payload = ProductMock;
    const expected = {
      type: 'CREATE_PRODUCT',
      payload,
    };
    expect(createProdut(payload)).toEqual(expected);
  });

  test('action ==> getProductsCategories', () => {
    const payload = [productsOfCategoryMock];
    const expected = {
      type: 'GET_PRODUCTS_CATEGORIES',
      payload,
    };
    expect(getProductsCategories(payload)).toEqual(expected);
  });

  test('action ==> getProductsCategory', () => {
    const payload = productsOfCategoryMock;
    const expected = {
      type: 'GET_PRODUCTS_CATEGORY',
      payload,
    };
    expect(getProductsCategory(payload)).toEqual(expected);
  });

});
