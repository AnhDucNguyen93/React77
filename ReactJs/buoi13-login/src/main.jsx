import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import FormUser from './component/formUserComponent.jsx';
import HomePage from './component/homePage.jsx';


// import config store from redux
import { Provider } from 'react-redux';
import store from './store/store.js';
import DemoCustomhook from './component/demoComponentHook.jsx';

import RootLayout from './routes/rootLayout.jsx'
import IndexPage from './routes/index.jsx'
import SignInPage from './auth/signIn.jsx'
import SignUpPage from './auth/signOut.jsx'
import DashboardLayout from './routes/dashboard-layout.jsx';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/contact", element: <RootLayout /> },
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: "admin",
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/admin',
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
              {
                path: 'homepage',
                element: <HomePage />,
              },
              {
                path: 'userList',
                element: <App />,
              },
              {
                path: '/admin/editUser/:id',
                element: <FormUser />,
              },
              {
                path: '/admin/addUser',
                element: <FormUser />,
              },
              {
                path: '/admin/customHook',
                element: <DemoCustomhook />,
              },
            ],
          },]
      }
    ]
  }
]);


export const ThemeContext = createContext(null);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
