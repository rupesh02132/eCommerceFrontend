// import React, { useState } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import { useLocation } from 'react-router-dom';

const steps = {
  "picked": 0,
  "confirmed": 1,
  "shipped": 2,
  "out_for_delivery": 3,
  "delivered": 4
};
const OrderTracker = () => {

  const location = useLocation();
const { order } = location.state || {};

const activeStep = steps[order?.orderStatus?.toLowerCase()] || 0;

  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {Object.keys(steps).map((label, index) => (
          <Step key={index}>
            <StepLabel sx={{ color: "#9155fd", fontSize: "16px" }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;
