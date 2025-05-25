import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTraker";
import { Grid, Box } from "@mui/material";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import { useLocation } from "react-router-dom";

const OrderDetails = () => {
  const location = useLocation();
  const { order } = location.state || {};

  console.log("Order received:", order);

  if (!order) {
    return <div>No Order Found</div>; // fallback if no order
  }

  return (
    <>
      {/* Delivery Address Section */}
      <div className="px-5 lg:px-20">
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        {/* Pass shipping address dynamically */}
        <AddressCard shipAddress={order?.shippingAddress} />

      </div>

      {/* Order Tracking Section */}
      <div className="py-20">
        <OrderTracker activeStep={order?.orderStatus === "delivered" ? 3 : 2} />
      </div>

      {/* Order Summary Section */}
      <Grid container spacing={3} className="px-5 lg:px-20 gap-y-5">
        {order?.orderItems?.map((item, index) => (
          <Grid
            key={index}
            item
            xs={12}
            className="shadow-xl rounded-md p-4 border hover:shadow-2xl transition-shadow duration-300"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
            container
          >
            {/* Product Details */}
            <Grid item xs={6}>
              <div className="flex cursor-pointer items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item?.product?.imageUrl || "https://via.placeholder.com/150"}
                  alt={item?.product?.title || "Product Image"}
                />
                <div className="space-y-2">
                  <p className="font-medium">{item?.product?.title || "Product Name"}</p>
                  <p className="text-gray-600 space-x-3">
                    <span>Color: {item?.color || "-"}</span>
                    <span>Size: {item?.size || "-"}</span>
                  </p>
                  <p className="text-gray-500">Seller: {item?.product?.brand || "Unknown"}</p>
                  <p className="font-bold text-lg text-indigo-600">₹{item?.price}</p>
                </div>
              </div>
            </Grid>

            {/* Rate & Review Section */}
            <Grid item xs={6}>
              <Box className="flex items-center justify-end space-x-2 text-indigo-600 cursor-pointer hover:text-indigo-800">
                <StarBorderPurple500Icon sx={{ fontSize: "2rem" }} />
                <span className="font-medium">Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default OrderDetails;
