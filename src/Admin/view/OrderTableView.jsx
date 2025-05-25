import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../State/Admin/Order/Action";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { AvatarGroup } from "@mui/material";
import { Avatar } from "@mui/material";




const OrderTableView = () => {
  const { adminOrder } = useSelector((store) => store);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, [adminOrder.deleteOrder,adminOrder.confirmedOrder,adminOrder.shipped,adminOrder.deliveredOrder,adminOrder.cancelledOrder]);

 
  const [anchorEl, setAnchorEl] = useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (e, index) => {
  
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = e.currentTarget;
    setAnchorEl(newAnchorElArray);
  };
  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null;
    setAnchorEl(newAnchorElArray);
   

  };

  return (
    <div className="p-5">
      <Card className="mt-2">
        <CardHeader title=" All Products" />
        <TableContainer sx={{ maxHeight: 1000 }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="product table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center"> Price</TableCell>
                <TableCell align="center"> Update</TableCell>
                <TableCell align="center">Status</TableCell>
              
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.map((item, index) => (
                <TableRow
                  // key={item._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="">
                    <AvatarGroup
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      {item.orderItems.map((orderItem) => (
                        <Avatar
                          alt="Remy Sharp"
                          src={orderItem.product?.imageUrl}
                        />
                      ))}
                    </AvatarGroup>
                  </TableCell>

                  <TableCell align="center">
                    {item.orderItems.map(
                      (orderItem) => orderItem.product?.title
                    )}
                  </TableCell>

                  <TableCell align="center">
                    ₹{item.totalDiscountedPrice}
                  </TableCell>

                  <TableCell align="center">
                    <span
                      className={`text-black py-2 px-5 rounded-full 
      ${item.orderStatus === "confirmed" ? "bg-green-600":
      item.orderStatus === "shipped" ? "bg-blue-600":
      item.orderStatus === "delivered" ?"bg-purple-600":
      item.orderStatus === "pending" ? "bg-[#417a96]":
      item.orderStatus === "cancelled" ? "bg-red-600":""}`}>
                    
                    {item.orderStatus}
                    </span>  
                  </TableCell>

                  

                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrderTableView;
