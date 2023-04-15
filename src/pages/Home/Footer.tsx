import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      color="default"
      position="static"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 0 0 0",
      }}
    >
      <Toolbar sx={{ maxWidth: "1600px", width: "100%" }}>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ fontWeight: 600, margin: "0 auto" }}
        >
          © 2023 FUTURE, Inc. All Rights Reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
