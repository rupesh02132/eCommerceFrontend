import React from "react";
import { Button, Grid, Typography } from "@mui/material";

function footer() {
  return (
    <>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py:3}}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h5" gutterBottom>
            company
          </Typography>
          <div> <Button className="pb-5" variant="h6" gutterBottom>About</Button>  </div>
          <div> <Button className="pb-5" variant="h6" gutterBottom>Blog</Button>  </div>
          <div> <Button className="pb-5" variant="h6" gutterBottom>Press</Button>  </div>
          <div> <Button className="pb-5" variant="h6" gutterBottom>Jobs</Button>  </div>
          <div> <Button className="pb-5" variant="h6" gutterBottom>Partners</Button>  </div>
          </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h5" gutterBottom>
            Solution
          </Typography>
          <div> <Button className="pb-5" variant="h6" gutterBottom>Marketing</Button>  </div>
          <div> <Button className="pb-5" variant="h6" gutterBottom>Analytics</Button>  </div>
          <div> <Button className="pb-5" variant="h6" gutterBottom>Commerce</Button>  </div>
          <div> <Button className="pb-5" variant="h6" gutterBottom>Insights</Button>  </div>
          <div> <Button className="pb-5" variant="h6" gutterBottom>Supports</Button>  </div>
          </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h5" gutterBottom>
            Documention
          </Typography>
          <div> <Button className="pb-5" variant="h6" gutterBottom>GUIDES</Button>  </div>
          <div> <Button className="pb-5" variant="h6" gutterBottom>API STATUS</Button>  </div>
         
          </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h5" gutterBottom>
            legal
          </Typography>
          <div> <Button className="pb-5" variant="h6" gutterBottom>claim</Button>  </div>
          <div> <Button className="pb-5" variant="h6" gutterBottom>privacy</Button>  </div>
          <div> <Button className="pb-5" variant="h6" gutterBottom>terms</Button>  </div>
          <div> <Button className="pb-5" variant="h6" gutterBottom>rule</Button>  </div>
        
          </Grid>
          <Grid className="pt-20"item xs={12}>
            <Typography variant="body2" component="p" align="center">
&copy;2025 My Company All rights reserved.
            </Typography>
            <Typography variant="body2" component="p" align="center">
&copy;Made by Rupesh kumar
            </Typography>

          </Grid>
      </Grid>
    </>
  );
}

export default footer;
