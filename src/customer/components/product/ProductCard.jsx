import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate=useNavigate();
  return (
    <div onClick={() => navigate(`/product/${product?._id}`)} className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="textPart bg-white p-3">
        <p className="font-bold opacity-60">{product.brand}</p>
        <p className="text-sm text-gray-500">{product.title}</p>

        <div className="flex items-center space-x-2">
          <p className="font-semibold">₹{product.discountedPrice}</p>
          <p className="line-through opacity-50">₹{product.price}</p>
          <p className="text-red-500 font-semibold">{product.discountPersent} off</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
