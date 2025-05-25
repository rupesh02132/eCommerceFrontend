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
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { confirmOrder } from "../../State/Admin/Order/Action";
import { shipOrder } from "../../State/Admin/Order/Action";
import { deliverOrder } from "../../State/Admin/Order/Action";
import { cancelOrder } from "../../State/Admin/Order/Action";
import { deleteOrder } from "../../State/Admin/Order/Action";



const OrderTable = () => {
  const { adminOrder } = useSelector((store) => store);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, [adminOrder.deleteOrder,adminOrder.confirmedOrder,adminOrder.shipped,adminOrder.deliveredOrder,adminOrder.cancelledOrder]);

  const handlleConfirem = (orderId) => {
    dispatch(confirmOrder(orderId));
    handleClose();
  };
  const handleShipped = (orderId) => {
    dispatch(shipOrder(orderId));
    handleClose();
  };
  const handleDeliver = (orderId) => {
    dispatch(deliverOrder(orderId));
    handleClose();
  };
  const handleCancel = (orderId) => {
    dispatch(cancelOrder(orderId));
    handleClose();
  };

  const handleDelete = (orderId) => {
    dispatch(deleteOrder(orderId)); 
  }
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
        <CardHeader title=" All Orders" />
        <TableContainer sx={{ maxHeight: 1000 }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="product table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center"> Price</TableCell>
                <TableCell align="center"> Update</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">delete</TableCell>
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

                  <TableCell align="center">
                    <Button onClick={(e) => handleClick(e,index)}>
                      <MoreVertIcon />
                    </Button>

                    <Menu
                      anchorEl={anchorEl[index]}
                      id={`basic-menu ${item._id}`}
                      open={Boolean(anchorEl[index])}
                      onClose={() => handleClose(index)}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                    <MenuItem  onClick={() => handlleConfirem(item._id) }>Confirmed  </MenuItem>
                    <MenuItem  onClick={() => handleShipped (item._id)}>Shipped  </MenuItem>
                    <MenuItem  onClick={() => handleDeliver (item._id)}>Delivered  </MenuItem>
                    <MenuItem  onClick={() => handleCancel (item._id)}>Cancelled  </MenuItem>

                    </Menu>
                  </TableCell>

                  <TableCell align="center">
                    <Button variant="contained" onClick={() => handleDelete(item._id)}>delete</Button>
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

export default OrderTable;
