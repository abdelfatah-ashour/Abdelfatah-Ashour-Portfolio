import React from "react";
import { MainNavbar } from "../Components/Navs/MainNavbar";
import { Container, Grid, Typography } from "@mui/material";
import styles from "styles/Home.module.sass";

export function MainLayout({ children, ...props }: any) {
  return (
    <Container maxWidth="lg" {...props}>
      <MainNavbar />
      <Grid container>
        <Grid item xs={11}>
          {children}
        </Grid>
        <Grid item xs={1}>
          <Grid className={styles.portfolio_right_bar} display="grid" rowGap={4}>
            <Typography className={styles.portfolio_text_right_nav} variant="caption" fontSize={18} fontWeight="700">
              ABOUT
            </Typography>
            <Typography className={styles.portfolio_text_right_nav} variant="caption" fontSize={18} fontWeight="700">
              PROJECTS
            </Typography>
            <Typography className={styles.portfolio_text_right_nav} variant="caption" fontSize={18} fontWeight="700">
              CONTACT
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
