import Home from '../page/Home';
import Deskboard from '../container/Deskboard';

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
];

export default serverRoutes;
