import React from "react";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import { Box, Typography, Icon } from "@mui/material";

const NotMatch = () => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Icon color="error" sx={{ fontSize: 50, marginTop: "30px" }}>
        <DoNotDisturbAltIcon sx={{ fontSize: 50 }} />
      </Icon>
      <Typography
        variant="h4"
        sx={{
          textTransform: "uppercase",
          color: "#696969",
          margin: "30px 0",
        }}
      >
        We did not match any products by your search!
      </Typography>
    </Box>
  );
};

export default NotMatch;
