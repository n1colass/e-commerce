import React from "react";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography, Badge } from "@mui/material";

const Header = () => {
  return (
    <>
      <AppBar color="default" position="static">
        <Toolbar>
          <Typography variant="h5" align="center" sx={{ flexGrow: 1 }}>
            Future Shop
          </Typography>
          <IconButton aria-label="cart" color="inherit">
            <Badge badgeContent={0} color="default">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
