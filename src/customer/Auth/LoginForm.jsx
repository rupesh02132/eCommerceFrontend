import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; 
import { login } from "../../State/Auth/Action";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const Data = new FormData(e.currentTarget);
    const userData = {
      email: Data.get("email"),
      password: Data.get("password"),
    };

    dispatch(login(userData)); 
    console.log("userData", userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField required id="email" name="email" label="Email Address" autoComplete="email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField required id="password" name="password" label="Password" type="password" autoComplete="new-password" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" size="large" fullWidth sx={{ color: "white", bgcolor: "#9155FD" }}>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="flex items-center py-3">
          <p>Don't have an account?</p>
          <Button onClick={() => navigate("/register")} className="ml-5" size="small">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm; 
