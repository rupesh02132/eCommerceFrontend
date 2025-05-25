import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Delivery Address', 'Order summary', 'Payment'];

export default function HorizontalLinearStepper() {
  const location = useLocation();
  const navigate = useNavigate();
  const querySearch = new URLSearchParams(location.search);
  const step = querySearch.get("step");
  const stepIndex = step ? parseInt(step, 10) : 0;
  const [activeStep, setActiveStep] = React.useState(stepIndex);

  React.useEffect(() => {
    setActiveStep(stepIndex);
  }, [stepIndex]);

  const updateStepInUrl = (newStep) => {
    navigate(`?step=${newStep}`, { replace: true });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      const newStep = Math.min(prevActiveStep + 1, steps.length);
      updateStepInUrl(newStep);
      return newStep;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      const newStep = Math.max(prevActiveStep - 1, 0);
      updateStepInUrl(newStep);
      return newStep;
    });
  };

  return (

    <div className='lg:px-20 px-10 '>
 <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
      
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button> */}
           
          </Box>
          <div className='mt-10'>
            {step==2?<DeliveryAddressForm/>:<OrderSummary/>}
          </div>
        </React.Fragment>
      )}
    </Box>
    </div>
   
  );
}