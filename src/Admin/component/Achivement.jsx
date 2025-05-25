import {
  Button,
  Card,
  CardContent,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';

const TringleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute',
});

const TrophyImg = styled('img')({
  right: 30,
  bottom: 20,
  height: 90,
  position: 'absolute',
});

const Achivement = () => {
  return (
    <Card
      sx={{
        position: 'relative',
        bgcolor: '#242B2E',
        color: 'white',
        p: 3,
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <CardContent sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h6" sx={{ letterSpacing: '.25px' }}>
          Shop with Rupesh
        </Typography>
        <Typography sx={{ letterSpacing: '.25px' }}>
          Congratulations
        </Typography>
        <Typography variant="h4" sx={{ my: 2 }}>
          420.7k
        </Typography>
        <Button variant="contained" size="small" sx={{ mt: 2 }}>
          View Sales
        </Button>
      </CardContent>

      {/* Background decoration images */}
      <TringleImg src="\src\Admin\img\rain.svg" alt="Triangle Decoration" />
      <TrophyImg src="\src\Admin\img\trop.png" alt="Trophy" sx={{ height: 100,ml: 2 ,width: 100}} />
    </Card>
  );
};

export default Achivement;
