export const getCategories = (payload) => ({
  type: 'GET_CATEGORIES',
  payload,
});

export const getProduts = (payload) => ({
  type: 'GET_PRODUCTS',
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

export const addCart = (payload) => ({
  type: 'ADD_CART',
  payload,
});
