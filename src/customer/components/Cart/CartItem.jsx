import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {updateItemInCart,removeItemFromCart} from "../../../State/Cart/Action";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton,Button } from "@mui/material";
import { useDispatch } from "react-redux";


const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const handleUpdateCartItem = (num) => {
    const data={data:{quantity:item.quantity+num},cartItemId:item?._id}
    dispatch(updateItemInCart(data));
  }
  const handleRemoveCartItem = () => {
    dispatch(removeItemFromCart(item?._id));
  }
  return (
    <div className="p-5 shadow-lg rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item.product?.imageUrl}
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.product?.title}</p>
          <p className="opacity-40">color: {item.product?.color}, size: {item.size}</p>
          <p className="opacity-60 mt-2">seller: {item.product?.brand}</p>
          <div className="flex space-x-5 items-center  text-gray-900 pt-4">
            <p className="font-semibold">₹{item.product?.discountedPrice}</p>{" "}
            <p className="line-through opacity-60">₹{item.product?.price}</p>{" "}
            <p className="text-green-600">{item.product?.discountPresent}% off</p>
          </div>
        </div>
        </div>

     <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
<IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1}>
    <RemoveCircleOutlineIcon/>
</IconButton>
<span className="py-1 px-7 border rounded-sm">{item.quantity}</span>
<IconButton sx={{color:"RGB(145 85 253)"}} onClick={()=>handleUpdateCartItem(1)}>
    <AddCircleOutlineIcon/>
</IconButton>
<div>
    <Button sx={{color:"RGB(145 85 253)"}} onClick={handleRemoveCartItem} >Remove</Button>
</div>
        </div>
        
     </div>
    </div>
  );
};

export default CartItem;
