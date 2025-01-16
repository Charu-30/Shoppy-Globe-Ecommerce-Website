import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {lazy,Suspense} from 'react';

//Routing configuration
const HomePage= lazy(()=>import("./components/HomePage.jsx"));
const ProductList=lazy(()=>import("./components/ProductList.jsx"));
const ProductDetail=lazy(()=>import("./components/ProductDetail.jsx"));
const Cart=lazy(()=>import("./components/Cart.jsx"));
const Checkout=lazy(()=>import("./components/Checkout.jsx"));
const PageNotFound=lazy(()=>import("./components/PageNotFound.jsx"));
const appRouter= createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element:  <Suspense fallback={<div>Loading..</div>}>
                    <HomePage/>
                  </Suspense>
      },
      {
        path: "/productlist",
        element:  <Suspense fallback={<div>Loading..</div>}>
                    <ProductList/>
                  </Suspense>
      },
      {
        path: "/productlist/:category",
        element:  <Suspense fallback={<div>Loading..</div>}>
                    <ProductList/>
                  </Suspense>
      },
      {
        path: "/product/:id",
        element:  <Suspense fallback={<div>Loading..</div>}>
                    <ProductDetail/>
                  </Suspense>
      },
      {
        path: "/cart",
        element:  <Suspense fallback={<div>Loading..</div>}>
                    <Cart/>
                  </Suspense>
      },
      {
        path: "/checkout",
        element:  <Suspense fallback={<div>Loading..</div>}>
                    <Checkout/>
                  </Suspense>
      }
    ],
    errorElement: <Suspense fallback={<div>Loading..</div>}>
                    <PageNotFound/>
                  </Suspense>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
