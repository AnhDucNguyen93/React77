import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './error-page'
import Home from './componet/home'
import App from './componet/app'
import FormUser from './componet/formUser'
import DetailUser from './componet/tailwindCss'
import { Provider } from 'react-redux'
import store from './store/store'
import FormTaiWind from './componet/formTailWind'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/userlist",
        element: <App />,
      },
      {
        path: "/formUser/:id",
        element: <FormUser />,
      },
      {
        path: "/addUser",
        element: <FormUser />,
      },
      {
        path: "/detailUser",
        element: <DetailUser />,
      },
      {
        path: "/editTailWind",
        element: <FormTaiWind />,
      },
    ]
  },
])

export const BgContext = createContext(null);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
