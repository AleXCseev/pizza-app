/* eslint-disable react-refresh/only-export-components */
import React, { Suspense, lazy } from 'react'
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Cart } from './pages/Cart/Cart'
import { Error } from './pages/Error/Error'
import { Layout } from './layout/LayoutMenu/Layout'
import { Product } from './pages/Product/Product'
import { PREFIX } from './helpers/API'
import axios from 'axios'

const Menu = lazy(() => import('./pages/Menu/Menu'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<>Loading...</>}><Menu/></Suspense>
      },
      {
        path: '/cart',
        element: <Cart/>
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
    path: '*',
    element: <Error/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
      {/* <App /> */}
  </React.StrictMode>,
)
