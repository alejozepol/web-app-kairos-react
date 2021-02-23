export const getCategories = (payload) => ({
  type: 'GET_CATEGORIES',
  payload,
});

export const getProduts = (payload) => ({
  type: 'GET_PRODUCTS',
  payload,
});

export const createProdut = (payload) => ({
  type: 'CREATE_PRODUCT',
  payload,
});

export const getProdut = (payload) => ({
  type: 'GET_PRODUCT',
  payload,
});

export const getProductsCategories = (payload) => ({
  type: 'GET_PRODUCTS_CATEGORIES',
  payload,
});

export const getProductsCategory = (payload) => ({
  type: 'GET_PRODUCTS_CATEGORY',
  payload,
});

export const getProductsSubcategory = (payload) => ({
  type: 'GET_PRODUCTS_SUBCATEGORY',
  payload,
});

export const setSubcategories = (payload) => ({
  type: 'SET_SUBCATEGORIES',
  payload,
});

export const addCart = (payload) => ({
  type: 'ADD_CART',
  payload,
});

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const getMeasures = (payload) => ({
  type: 'GET_MEASURES',
  payload,
});
