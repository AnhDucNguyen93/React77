import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import FormUser from './component/formUserComponent.jsx';
import HomePage from './component/homePage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/userList',
        element: <App />,
      },
      {
        path: '/editUser/:id',
        element: <FormUser />,
      },
      {
        path: '/addUser',
        element: <FormUser />,
      },
    ],
  },
]);
export const ThemeContext = createContext(null);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
