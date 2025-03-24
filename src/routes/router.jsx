import { createBrowserRouter } from 'react-router';
import { Home } from '../features/home/pages/home';
import { AccessAuthenticated } from './AccessAuthenticated';
import { Auth } from '../features/auth/pages/auth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AccessAuthenticated element={<Home />} />,

    errorElement: <h1>404</h1>,
    children: [
      {
        path: '/',
        element: <AccessAuthenticated element={<Home />} />,
      },
    ],
  },
  {
    path: '/auth',
    element: <Auth />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: '/auth',
        element: <Auth />,
      },
    ],
  },
]);
