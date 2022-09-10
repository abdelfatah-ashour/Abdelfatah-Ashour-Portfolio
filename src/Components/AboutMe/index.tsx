import React from "react";
import { Grid, Box, Typography } from "@mui/material";

export function AboutMe() {
  return (
    <Grid
      id="#about-me"
      width="100%"
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="flex-start"
      alignItems="flex-start">
      <Box
        display="flex"
        sx={{
          justifyContent: {
            xs: "center",
            md: "flex-start",
          },
        }}>
        <Typography variant="overline">about me</Typography>
      </Box>
      <Grid container>
        <Grid
          item
          md={6}
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}>
          img
        </Grid>
        <Grid item md={6} xs={12}>
          information
        </Grid>
      </Grid>
    </Grid>
  );
}
