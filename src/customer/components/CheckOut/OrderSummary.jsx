import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import AddressCard from '../AddressCard/AddressCard';
import CartItem from '../Cart/CartItem';
import { getOrderById } from '../../../State/Order/Action';
import { createPayment } from '../../../State/Payment/Action';

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // Extract order state from Redux
  const { order } = useSelector((store) => store);

  // Get the order ID from URL query parameter
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get('order_Id');


  // Fetch order details on component mount
  useEffect(() => {
    if (orderId) {
      console.log('Fetching order with ID:', orderId);
      dispatch(getOrderById(orderId));
    }
  }, [orderId]);
  
  

  const handlePayment = () => {
    console.log('Payment created for order ID:', orderId);
    if (orderId) {
      dispatch(createPayment(orderId));
    
    }
  };


  return (
    <div className="p-4 shadow-lg rounded-md border">
      {/* Shipping Address */}
      <AddressCard shipAddress={order.order?.shippingAddress} />

      {/* Main Content Grid */}
      <div className="lg:grid grid-cols-3 mt-6 gap-4">
        {/* Left: Order Items */}
        <div className="col-span-2 space-y-4">
          {order.order?.orderItems?.map((item)=> (
             <CartItem item={item} />
          )
          )}
        </div>

        {/* Right: Price Summary */}
        <div className="px-5 sticky top-0 h-full">
          <div className="border p-4">
            <p className="uppercase font-bold text-gray-500 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-8 pt-4">
              <div className="flex justify-between text-black">
                <span>Price</span>
                <span>{order.order?.totalPrice}</span>
              </div>
              <div className="flex justify-between text-black">
                <span>Discount</span>
                <span className="text-green-600">{order.order?.discount}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">{order?.order?.totalDiscountedPrice}</span>
              </div>
            </div>
          </div>

          <Button
            onClick={handlePayment}
            className="w-full mt-4"
            variant="contained"
            sx={{ px: '2rem', py: '0.7rem', bgcolor: '#9155fd' }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
