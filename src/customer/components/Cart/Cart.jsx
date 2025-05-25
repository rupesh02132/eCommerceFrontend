import React, { useEffect } from "react";
// import { useEffect } from "react";
import CartItem from "./CartItem";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCart } from "../../../State/Cart/Action";
import { useSelector } from "react-redux";






const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {cart}=useSelector(store=>store)
 
  const handleCheckout = () => {
    navigate("/checkout?step=2");
  }
useEffect(() => {
  dispatch(getCart());
}, [cart.updateCartItem,cart.deleteCartItem]);

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
        {cart.cart && cart.cart?.cartItems?.map((item)=><CartItem item={item}/>)} 
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-55 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-8">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{cart.cart?.totalPrice}</span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">₹{cart.cart?.discount}</span>
              </div>

              <div className="flex justify-between pt-3 ">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">₹{cart.cart?.totalDiscountedPrice}</span>
              </div>
            </div>
          </div>
          <Button
            onClick={handleCheckout}
            className="w-full"
            variant="contained"
            sx={{ px: "2rem", py: "0.7rem", bgcolor: "#9155fd" }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
