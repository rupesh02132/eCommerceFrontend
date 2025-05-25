import React, { useEffect } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUser, register } from "../../State/Auth/Action";
import { API_BASE_URL } from "../../config/apiConfig";  


const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt =localStorage.getItem("jwt");
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (jwt && !auth.user) {  // ✅ Prevent unnecessary API calls
      dispatch(getUser(jwt));
    }
  }, [jwt]);
 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const Data = new FormData(e.currentTarget);
    const userData = {
      firstname: Data.get("firstName"),
      lastname: Data.get("lastName"),
      email: Data.get("email"),
      password: Data.get("password"),
    };

    dispatch(register(userData));
    console.log("userData", userData);
    console.log("API Base URL:", API_BASE_URL);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField required id="firstName" name="firstName" label="First Name" autoComplete="given-name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required id="lastName" name="lastName" label="Last Name" autoComplete="family-name" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField required id="email" name="email" label="Email Address" autoComplete="email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField required id="password" name="password" label="Password" type="password" autoComplete="new-password" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" className="bg-[#9155FD] w-full" variant="contained" size="large" fullWidth sx={{ bgcolor: "#9155FD" }}>
              Register
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="flex justify-center flex-col items-center">
        <div className="flex items-center py-3">
          <p>Already have an account?</p>
          <Button onClick={() => navigate("/login")} className="ml-5" size="small">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
