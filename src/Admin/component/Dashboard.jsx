import { Grid } from "@mui/material";
import React from "react";
import Achivement from "./Achivement";
import MonthalyOverview from "./monthalyOverView";
import ProductTableView from "../view/ProductTableView";
import OrderTableView from "../view/OrderTableView";

const Dashboard = () => {
  return (
    <div className="p-8">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className="shadow-lg shadow-gray-700">
            <Achivement />
          </div>
        </Grid>

        <Grid item xs={12} md={8}>
          <div className="shadow-lg shadow-gray-700">
            <MonthalyOverview />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-700">
            <OrderTableView/>
          </div>
          {/* <ProductTable/> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-700">
            <ProductTableView />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
