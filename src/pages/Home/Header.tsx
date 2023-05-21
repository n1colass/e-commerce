import React from "react";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography, Badge } from "@mui/material";
import { Button } from "@mui/material";
import ModalRegistration from "./ModalRegistration";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AppBar
      color="default"
      position="static"
      sx={{ display: "flex", alignItems: "center", padding: 0 }}
    >
      <Toolbar sx={{ maxWidth: "1600px", width: "100%" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ flexGrow: 1, textTransform: "uppercase", fontWeight: 700 }}
        >
          Future Shop
        </Typography>
        <IconButton
          aria-label="cart"
          color="inherit"
          sx={{ margin: "auto 16px" }}
        >
          <Badge badgeContent={0} color="default">
            <ShoppingCartOutlined />
          </Badge>
        </IconButton>
        <Button variant="contained" color="inherit" onClick={handleOpen}>
          Sign In
        </Button>
        <ModalRegistration open={open} handleClose={handleClose} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
