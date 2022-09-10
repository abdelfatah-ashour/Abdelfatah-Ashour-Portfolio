import React from "react";
import { Grid, Typography } from "@mui/material";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "styles/Home.module.sass";

export function SocialMediaFooterNavbar() {
  return (
    <Grid
      display="flex"
      alignItems="flex-end"
      sx={{
        justifyContent: {
          xs: "space-around",
          md: "flex-end",
        },
      }}
      rowGap={2}
      flex={1}>
      <Typography variant="overline" fontSize={22} fontWeight="700" className={styles.portfolio_links_social_media}>
        <a href="https://github.com/abdelfatah-ashour" target="_blank" referrerPolicy="no-referrer">
          <FaLinkedinIn />
        </a>
      </Typography>
      <Typography variant="overline" fontSize={22} fontWeight="700" className={styles.portfolio_links_social_media}>
        <a href="https://github.com/abdelfatah-ashour" target="_blank" referrerPolicy="no-referrer">
          <FaGithub />
        </a>
      </Typography>
      <Typography variant="overline" fontSize={22} fontWeight="700" className={styles.portfolio_links_social_media}>
        <a href="https://github.com/abdelfatah-ashour" target="_blank" referrerPolicy="no-referrer">
          <FaFacebookF />
        </a>
      </Typography>
      <Typography variant="overline" fontSize={22} fontWeight="700" className={styles.portfolio_links_social_media}>
        <a href="https://github.com/abdelfatah-ashour" target="_blank" referrerPolicy="no-referrer">
          <FaInstagram />
        </a>
      </Typography>
      <Typography variant="overline" fontSize={22} fontWeight="700" className={styles.portfolio_links_social_media}>
        <a href="https://github.com/abdelfatah-ashour" target="_blank" referrerPolicy="no-referrer">
          <FaTwitter />
        </a>
      </Typography>
    </Grid>
  );
}
