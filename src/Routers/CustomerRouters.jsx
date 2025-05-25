import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/Pages/HomePages/HomePage'
import Navbar from '../customer/components/Navigations/Navbar'
import Footer from '../customer/components/Footer/footer'
import Cart from '../customer/components/Cart/Cart'
import Product from '../customer/components/product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/CheckOut/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import PaymentSuccess from '../customer/components/Payment/PaymentSuccess'
const CustomerRouters = () => {
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <Routes>
        <Route path="/login" element={<HomePage/>}></Route>
        <Route path="/register" element={<HomePage/>}></Route>

        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product/>}></Route>
        <Route path="/product/:productId" element={<ProductDetails/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/account/order" element={<Order/>}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/payment/:orderId" element={<PaymentSuccess/>}></Route>

      </Routes>

{/* <PaymentSuccess/> */}
   
 
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRouters
