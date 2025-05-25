import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { findProducts,deleteProduct} from "../../State/product/Action.js";
import { useSelector } from "react-redux";
import { Avatar, Button, CardHeader } from "@mui/material";
import Card from "@mui/material/Card";





const ProductTable = () => {
  const dispatch = useDispatch();
  const { productS } = useSelector((store) => store);
  console.log("products", productS);

  const handleDeleteProduct = (productId) => {

    dispatch(deleteProduct(productId));
    console.log("clicked", productId);
  };

  useEffect(() => {
    const data = {
      Category: "",
      color: [],
      sizes: [],
      minPrice: null,
      maxPrice: null,
      minDiscount: null,
      sort: "price_low",
      pageNumber: 1,
      pageSize: 5,
      stock: "",
    };

    dispatch(findProducts(data));
  }, []);

  return (
    <div className="p-5">
      <Card className='mt-2'>
      <CardHeader title=" All Products" />
        <TableContainer sx={{ maxHeight: 440 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="product table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Brand</TableCell>
              <TableCell align="center"> Price</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Color</TableCell>
              <TableCell align="center">quantity</TableCell>
              <TableCell align="center">delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productS.products.content?.map((item) => (
              <TableRow
                key={item._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <Avatar alt="Remy Sharp" src={item.imageUrl} />
                </TableCell>
                <TableCell align="center">{item.title}</TableCell>
                <TableCell align="center">{item.brand}</TableCell>

                <TableCell align="center">₹{item.discountedPrice}</TableCell>
                <TableCell align="center">{item.category?.name}</TableCell>
                <TableCell align="center">{item.color?.join(", ")}</TableCell>
                <TableCell align="center">{item.quantity}</TableCell>
                <TableCell align="center"><Button onClick={() => handleDeleteProduct(item._id)}  variant="contained">delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Card >
      
    </div>
  );
};

export default ProductTable;
