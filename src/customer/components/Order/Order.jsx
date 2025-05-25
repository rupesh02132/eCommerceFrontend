import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../../State/Admin/Order/Action";
import { Link } from "react-router-dom";

const orderStatus = [
  { label: "Order placed", value: "placed" },
  { label: "Order Confirmed", value: "confirmed" },
  { label: "Order Shipped", value: "shipped" },
  { label: "Order Delivered", value: "delivered" },
  { label: "Order Cancelled", value: "cancelled" },
];

const Order = () => {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);


  const [selectedStatus, setSelectedStatus] = useState([]); 

  useEffect(() => {
    dispatch(getAllOrders());
  }, [
    adminOrder.deleteOrder,
    adminOrder.confirmedOrder,
    adminOrder.shipped,
    adminOrder.deliveredOrder,
    adminOrder.cancelledOrder,
  ]);

  const handleStatusChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedStatus((prev) => [...prev, value]);
    } else {
      setSelectedStatus((prev) => prev.filter((item) => item !== value));
    }
  };

  const filteredOrders = selectedStatus.length
    ? adminOrder.orders?.filter((order) => selectedStatus.includes(order.orderStatus))
    : adminOrder.orders;

  return (
    
    <div className="px-5 lg:px-20">

      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="text-lg font-semibold">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="text-lg font-semibold">Order status</h1>
              {orderStatus.map((option) => (
                <div className="flex items-center" key={option.value}>
                  <input
                    onChange={handleStatusChange}
                    value={option.value}
                    checked={selectedStatus.includes(option.value)}
                    id={option.value}
                    type="checkbox"
                    className="w-5 h-5 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    className="ml-2 text-sm font-medium text-gray-900"
                    htmlFor={option.value}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-5">
            {filteredOrders?.map((item) => (
               <Link 
               to={`/account/order/${item._id}`}
               state={{ order: item }} 
               key={item._id}
               className="block" 
             >
               <OrderCard order={item} />
             </Link>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
