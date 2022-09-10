import * as React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../src/Layout/MainLayout";
import { Grid, Typography, Box } from "@mui/material";
import styles from "styles/Home.module.sass";
import Link from "next/link";
import { SocialMediaFooterNavbar } from "src/Components/Navs/SocialMediaFooterNavbar";
import Image from "next/image";
import { AboutMe } from "src/Components/AboutMe";

const Home: NextPage = () => {
  return (
    <MainLayout className={styles.portfolio_landing_page}>
      <Grid className={styles.portfolio_landing_page_image}>
        <Grid container display="flex" justifyContent="center" alignItems="flex-end">
          <Grid item xs={11} md={4} className={styles.portfolio_wrapper_avatar}>
            <Box className={styles.portfolio_landing_page_image_avatar}>
              <img src="/abdelfatah_ashour_avatar.png" alt="Abdelfatah Ashour" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="caption" fontSize={14}>
            Frontend Developer
          </Typography>
          <Typography>
            <Typography variant="caption" fontSize={14}>
              From
            </Typography>
            <Typography variant="overline" color="primary" fontWeight="700" fontSize={16} paddingX={2}>
              Alexandria, Egypt
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <SocialMediaFooterNavbar />
        </Grid>
      </Grid>
      <AboutMe />
    </MainLayout>
  );
};

export default Home;
