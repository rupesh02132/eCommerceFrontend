import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = ({ order }) => {
 
  const navigate = useNavigate();

  const item = order.orderItems?.[1]; // picking the first product for now
  const product = item?.product;

  return (
    <div
      onClick={() => navigate(`/account/order/${order._id}`)}
      className="p-5 shadow-md hover:shadow-2xl cursor-pointer"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex">
            <img
              className="w-[5rem] h-[5rem] object-cover rounded-md"
              src={product?.imageUrl}
              alt={product?.title || "Product Image"}
            />
            <div className="ml-5 space-y-2">
              <p className="font-semibold">{product?.title || "Product Title"}</p>
              <p className="opacity-40 text-xs font-semibold">
                Size: {item?.size || "-"}
              </p>
              <p className="opacity-40 text-xs font-semibold">
                Color: {product?.color?.[0] || "-"}
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹{order?.totalDiscountedPrice || "0"}</p>
        </Grid>

        <Grid item xs={4}>
          {order.orderStatus === "delivered" ? (
            <div>
              <p className="flex items-center">
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2"
                />
                <span>Delivered on {order.deliveredAt?.substring(0, 10) || "-"}</span>
              </p>
              <p className="text-xs text-green-700">Your item has been delivered</p>
            </div>
          ) : (
            <div>
              <p className="flex items-center">
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-yellow-600 mr-2"
                />
                <span>Expected Delivery on {order.expectedDeliveryDate?.substring(0, 10) || "-"}</span>
              </p>
              <p className="text-xs text-yellow-700">Your order is {order.orderStatus}</p>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
