import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../State/product/Action";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
  TextField,
  InputLabel,
  Grid,
  Alert,
} from "@mui/material";

const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
];

const CreateProductsForm = () => {
  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: 0,
    price: 0,
    discountPresent: 0,
    sizes: initialSizes, 
    quantity: 0,
    topLevelCategory: "", 
    secondLevelCategory: "",
    thirdLevelCategory: "",
    description: "",
  });
  

  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSizeChange = (e, index) => {
    const { name, value } = e.target;
    const updatedSizes = [...productData.sizes];
    updatedSizes[index][name === "size_quantity" ? "quantity" : name] = value;
    setProductData((prevData) => ({
      ...prevData,
      sizes: updatedSizes,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("prod", productData);
    dispatch(createProduct(productData));
    setSuccess(true);
   
  };

  return (
    <div className="p-10">
      <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }}>
        Add New Product
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
              label="Image URL"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              name="brand"
              value={productData.brand}
              onChange={handleChange}
              label="Brand"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              name="title"
              value={productData.title}
              onChange={handleChange}
              label="Title"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              name="color"
              value={productData.color}
              onChange={handleChange}
              label="Color"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              label="Quantity"
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              name="price"
              value={productData.price}
              onChange={handleChange}
              label="Price"
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              label="Discounted Price"
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              name="discountPresent"
              value={productData.discountPresent}
              onChange={handleChange}
              label="Discount Percent"
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLevelCategory"
                value={productData.topLevelCategory}
                onChange={handleChange}
                label="Top Level Category"
              >
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
                <MenuItem value="kids">Kids</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name="secondLevelCategory"
                value={productData.secondLevelCategory}
                onChange={handleChange}
                label="Second Level Category"
              >
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
                <MenuItem value="brands">Brands</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name="thirdLevelCategory"
                value={productData.thirdLevelCategory}
                onChange={handleChange}
                label="Third Level Category"
              >
                <MenuItem value="top">Top</MenuItem>
                <MenuItem value="women_dress">Women Dress</MenuItem>
                <MenuItem value="t_shirt">T-shirt</MenuItem>
                <MenuItem value="saree">Saree</MenuItem>
                <MenuItem value="mens_kurta">Mens Kurta</MenuItem>
                <MenuItem value="lengha_choli">Lehenga Choli</MenuItem>

              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              multiline
              rows={4}
              name="description"
              value={productData.description}
              onChange={handleChange}
              label="Description"
            />
          </Grid>

          {productData.sizes.map((size, index) => (
            <Grid container spacing={2} key={index} sx={{ pl: 2 ,py:1}}>
              <Grid item xs={6}>
                <TextField
                  label="Size Name"
                  name="name"
                  value={size.name}
                  onChange={(e) => handleSizeChange(e, index)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Quantity"
                  name="size_quantity"
                  value={size.quantity}
                  onChange={(e) => handleSizeChange(e, index)}
                  fullWidth
                  required
                  type="number"
                />
              </Grid>
            </Grid>
          ))}

          <Grid item xs={12}>
            <Button variant="contained" fullWidth type="submit" sx={{ py: 1.5 }}>
              Add New Product
            </Button>
          </Grid>

          {success && (
            <Grid item xs={12}>
              <Alert severity="success">Product added successfully!</Alert>
            </Grid>
          )}
        </Grid>
      </form>
    </div>
  );
};

export default CreateProductsForm;
