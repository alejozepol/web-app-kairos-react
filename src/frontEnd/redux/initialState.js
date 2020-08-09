const initialState = {
  categories: [
    {
      'id': 1,
      'active': true,
      'title': 'Bebés',
      'urlImage': null,
      'deleted': false,
      'createdAt': '2020-07-13T05:11:27.771Z',
      'updatedAt': '2020-07-13T05:11:27.771Z',
      'subcategories': [
        {
          'id': 2,
          'categoryId': 1,
          'active': true,
          'title': 'Comida para bebés',
          'urlImage': null,
          'deleted': false,
          'createdAt': '2020-07-13T05:11:27.923Z',
          'updatedAt': '2020-07-13T05:11:27.923Z',
        },
        {
          'id': 4,
          'categoryId': 1,
          'active': true,
          'title': 'Accesorios para bebé',
          'urlImage': null,
          'deleted': false,
          'createdAt': '2020-07-13T05:11:27.923Z',
          'updatedAt': '2020-07-13T05:11:27.923Z',
        },
        {
          'id': 1,
          'categoryId': 1,
          'active': true,
          'title': 'Pañales y toallitas',
          'urlImage': null,
          'deleted': false,
          'createdAt': '2020-07-13T05:11:27.923Z',
          'updatedAt': '2020-07-13T05:11:27.923Z',
        },
      ],
    },
    {
      'id': 4,
      'active': true,
      'title': 'Bebidas',
      'urlImage': null,
      'deleted': false,
      'createdAt': '2020-07-13T05:11:27.771Z',
      'updatedAt': '2020-07-13T05:11:27.771Z',
      'subcategories': [
        {
          'id': 15,
          'categoryId': 4,
          'active': true,
          'title': 'Jugos y néctares',
          'urlImage': null,
          'deleted': false,
          'createdAt': '2020-07-13T05:11:27.923Z',
          'updatedAt': '2020-07-13T05:11:27.923Z',
        },
        {
          'id': 16,
          'categoryId': 4,
          'active': true,
          'title': 'Cafe',
          'urlImage': null,
          'deleted': false,
          'createdAt': '2020-07-13T05:11:27.923Z',
          'updatedAt': '2020-07-13T05:11:27.923Z',
        },
      ],
    },
  ],
  productsOfCategories: [
    {
      categoryId: 1,
      title: 'Bebes',
      products: [
        {
          'id': 17,
          'active': true,
          'deleted': false,
          'title': 'Aggi · Desinfectante con plata coloidal',
          'description': 'Desinfectante de juguetes y superficies para bebé.',
          'urlImage': 'https://s.cornershopapp.com/product-images/1948038.jpg?versionId=c50zag25yd7c9brs6XS2.BklEQ4VMfvB',
          'measureId': 7,
          'categoryId': 1,
          'subcategoryId': 4,
          'quantity': '60',
          'createdAt': '2020-07-11T21:21:07.890Z',
          'updatedAt': '2020-07-11T21:21:07.890Z',
          'measure': {
            'id': 7,
            'active': true,
            'measure': 'ml',
            'deleted': false,
            'createdAt': '2020-07-11T21:21:07.345Z',
            'updatedAt': '2020-07-11T21:21:07.345Z',
          },
        },
      ],
    },
  ],
  productsOfCategory: [
    {
      categoryId: 1,
      title: 'Bebes',
      products: [
        {
          'id': 17,
          'active': true,
          'deleted': false,
          'title': 'Aggi · Desinfectante con plata coloidal',
          'description': 'Desinfectante de juguetes y superficies para bebé.',
          'urlImage': 'https://s.cornershopapp.com/product-images/1948038.jpg?versionId=c50zag25yd7c9brs6XS2.BklEQ4VMfvB',
          'measureId': 7,
          'categoryId': 1,
          'subcategoryId': 4,
          'quantity': '60',
          'createdAt': '2020-07-11T21:21:07.890Z',
          'updatedAt': '2020-07-11T21:21:07.890Z',
          'measure': {
            'id': 7,
            'active': true,
            'measure': 'ml',
            'deleted': false,
            'createdAt': '2020-07-11T21:21:07.345Z',
            'updatedAt': '2020-07-11T21:21:07.345Z',
          },
        },
      ],
    },
  ],
  productsOfSubcategory: [],
  cart: [],
};

export default initialState;
