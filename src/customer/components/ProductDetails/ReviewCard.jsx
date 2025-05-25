import React from "react";
import { Box, Grid, Rating } from "@mui/material";
import Avtar from "@mui/material/Avatar";

function ReviewCard() {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avtar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              R
            </Avtar>
          </Box>
          </Grid>
          <Grid item xs={9}>
            <div className="space-y-2">
              <div>
                <p className="font-semibold text-lg">Ram</p>
                <p className="opacity-70">April</p>
              </div>
            </div>
            <Rating value={4.5} name="half-rating" readOnly precision={0.5} />
            <p>nide product , i love you</p>
          </Grid>
        </Grid>
      
    </div>
  );
}

export default ReviewCard;
