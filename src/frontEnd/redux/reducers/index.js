const getCookie = () => {
  const nameEQ = 'kairos=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return JSON.parse(c.substring(nameEQ.length, c.length));
  }
  return null;
};

const reducer = (state, action) => {
  switch (action.type) {
    case '@@INIT': {
      const output = getCookie();
      return {
        ...state,
        user: output,
      };
    }
    case 'GET_CATEGORIES': {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case 'GET_PRODUCTS_CATEGORY': {
      const { products } = state.productsOfCategories.find((item) => item.categoryId === Number(action.payload)) || [];
      const category = state.categories.find((item) => item.id === Number(action.payload)) || [];
      const { subcategories = [] } = category;
      for (let i = 0; i < subcategories.length; i++) {
        const p = products.filter((p) => p.subcategoryId === subcategories[i].id) || [];
        subcategories[i].products = p;
      }
      // eslint-disable-next-line no-param-reassign
      state.productsOfCategory = category;
      return {
        ...state,
      };
    }
    case 'GET_PRODUCTS_SUBCATEGORY': {
      return {
        ...state,
        productsOfSubcategory: action.payload,
      };
    }
    case 'GET_PRODUCTS': {
      return {
        ...state,
        products: action.payload,
      };
    }
    case 'ADD_CART': {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGIN_REQUEST':
      document.cookie = `kairos=${JSON.stringify(action.payload)}; max-age=3600; path=/`;
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
