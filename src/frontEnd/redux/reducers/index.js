const reducer = (state, action) => {
  switch (action.type) {
    case '@@INIT': {
      const { cookie } = document;
      const output = {};
      if (cookie) {
        cookie.split(/\s*;\s*/).forEach((pair) => {
          // eslint-disable-next-line no-param-reassign
          pair = pair.split(/\s*=\s*/);
          output[pair[0]] = pair.splice(1).join('=');
        });
      }
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
    default:
      return state;
  }
};

export default reducer;
