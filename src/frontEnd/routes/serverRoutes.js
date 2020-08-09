import Home from '../page/Home';
import Deskboard from '../container/Deskboard';
import ProductsofCategory from '../Page/ProductsofCategory';

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
    path: '/category/:id',
    component: ProductsofCategory,
    exact: true,
  },
];

export default serverRoutes;
