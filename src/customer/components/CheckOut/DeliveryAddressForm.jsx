import React from "react";
import { Grid, Button, TextField } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import { useSelector } from "react-redux";
import AuthAddress from "../AddressCard/AuthAddress";


const DeliveryAddressForm = () => {
const dispatch=useDispatch();
const navigate=useNavigate();

const {order}=useSelector(store=>store)
console.log("order...",order);

  const handleSubmit = (event) => {
    event.preventDefault();
   

    
const data=new FormData(event.currentTarget);
const address={
  firstname:data.get("firstName"),
  lastname:data.get("lastName"),
  streetAddress:data.get("address"),
  city:data.get("city"),
  state:data.get("state"),
  zipcode:data.get("zip"),
  mobile:data.get("phone"),
  country:data.get("country")
}
const OrderData={address,navigate}
dispatch(createOrder(OrderData))
console.log("address...",address,OrderData);
  }
  const handle=()=>{
  dispatch(createOrder({navigate,address:order?.order?.shippingAddress}))
  }
  return (
    <div>
      <Grid container spacing={4}>
        {/* Left Section: Address Card */}
        <Grid item xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
          <div className="p-5 py-7 border-b cursor-pointer">
            <AuthAddress AuthAddr={order?.order?.shippingAddress} />

{/* <AddressCard/> */}
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145, 85, 253)", color: "white" }}
              size="large"
              variant="contained"
              onClick={handle}
            >
              Delivery Here
            </Button>
          </div>
        </Grid>

        {/* Right Section: Form */}
        <Grid item xs={12} lg={7}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete="street-address"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="address-level2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="state"
                  name="state"
                  label="State"
                  fullWidth
                  autoComplete="address-level1"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="country"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip Code"
                  fullWidth
                  autoComplete="postal-code"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="phone"
                  name="phone"
                  label="Phone Number"
                  fullWidth
                  autoComplete="tel"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  sx={{ mt: 2, bgcolor: "RGB(145, 85, 253)", color: "white" }}
                  size="large"
                  variant="contained"
                  type="submit"
                >
                  Save Address
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;