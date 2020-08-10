import Home from '../page/Home';
import Deskboard from '../Page/Deskboard';
import ProductsofCategory from '../Page/ProductsofCategory';
import ProductsofSubcategory from '../Page/ProductsofSubcategory';
import Login from '../Page/Login';
import Register from '../Page/Register';
import FormProducts from '../Page/formProducts';

const serverRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/deskboard',
    component: Deskboard,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    exact: true,
  },
  {
    path: '/category/:id',
    component: ProductsofCategory,
    exact: true,
  },
  {
    path: '/subcategory/:id/:title',
    component: ProductsofSubcategory,
    exact: true,
  },
  {
    path: 'deskboard/:id/:action',
    component: FormProducts,
    exact: true,
  },
];

module.exports = serverRoutes;
