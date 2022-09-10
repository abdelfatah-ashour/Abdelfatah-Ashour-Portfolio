import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

export function MainNavbar() {
  return (
    <nav>
      <Grid container padding={1}>
        <Grid item xs={6}>
          <Grid height="120px" overflow="hidden" display="flex">
            <img src="/Triple A-logos.png" alt="Triple A" />
          </Grid>
        </Grid>
        <Grid item xs={6} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-end">
          <Typography variant="h2" fontSize={24} fontWeight="500" color="primary">
            Abdelfatah
          </Typography>
          <Typography variant="h2" fontSize={24} fontWeight="500" color="primary">
            Ashour
          </Typography>
        </Grid>
      </Grid>
    </nav>
  );
}
