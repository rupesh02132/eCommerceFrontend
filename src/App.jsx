import React from 'react'
import Navbar from './customer/components/Navigations/Navbar'
import HomePage from './customer/Pages/HomePages/HomePage'

import Product from './customer/components/product/Product'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import Cart from './customer/components/Cart/Cart'
import Checkout from './customer/components/CheckOut/Checkout'
import Order from './customer/components/Order/Order'
import OrderDetails from './customer/components/Order/OrderDetails'
import CustomerRouters from './Routers/CustomerRouters'
import { Route, Routes } from 'react-router-dom'
import AdminRouter from './Routers/AdminRouter'
export default function App() {
  return (
   <>
  
   <div>
<Routes>
  <Route path="/*" element={<CustomerRouters/>}></Route>
  <Route path='admin/*' element={<AdminRouter/>}></Route>

  
</Routes>

   </div>
   </>
  )
}