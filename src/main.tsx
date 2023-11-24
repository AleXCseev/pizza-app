/* eslint-disable react-refresh/only-export-components */
import React, { Suspense, lazy } from 'react'
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Cart } from './pages/Cart/Cart'
import { Error } from './pages/Error/Error'
import { Layout } from './layout/LayoutMenu/Layout'
import { AuthLayout } from './layout/Auth/AuthLayout'
import { Product } from './pages/Product/Product'
import { PREFIX } from './helpers/API'
import axios from 'axios'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'
import { RequireAuth } from './helpers/RequireAuth'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Success } from './pages/Success/Success'
import { ErrorBoundary } from "react-error-boundary";

const Menu = lazy(() => import('./pages/Menu/Menu'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <RequireAuth><Layout/></RequireAuth>,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<>Loading...</>}><Menu/></Suspense>
      },
      {
        path: '/cart',
        element: <Cart/>,
        errorElement: <>Error</>,
      },
      {
        path: '/success',
        element: <Success/>
      },
      {
        path: '/product/:id',
        element: <Product/>,
        errorElement: <>Error</>,
        loader: async ({ params }) => {
          return defer({
            data: axios.get(`${PREFIX}/products/${params.id}`).then(data => data)
          })
        }
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout/>,
    children: [
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      }
    ]
  },
  {
    path: '*',
    element: <Error/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
)
