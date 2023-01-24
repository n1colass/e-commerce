import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
const Loading = () => {
  return (
    <Box sx={{ margin: "300px" }}>
      <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
        Please wait. Products is loading...
      </Typography>
    </Box>
  );
};

export default Loading;
