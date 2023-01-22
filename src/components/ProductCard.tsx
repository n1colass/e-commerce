import React from "react";
import { Container, Box, Typography, Stack } from "@mui/material";
import { assignIcon } from "../utils/assignIcon";

const ProductCard = () => {
  const { icon, colorBg } = assignIcon("Desserts");
  return (
    <Container
      disableGutters
      sx={{
        width: "200px",
        height: "250px",
        padding: "0 15px",
        boxShadow: 5,
        borderRadius: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "170px",
          height: "120px",
          margin: "15px 0 15px 0",
          backgroundColor: `${colorBg}`,
          borderRadius: 3,
        }}
      >
        {icon}
      </Box>
      <Stack spacing={1} sx={{ textAlign: "left" }}>
        <Typography variant="body2"> Apple pie </Typography>
        <Typography variant="body1" sx={{ fontWeight: "700" }}>
          1$
        </Typography>
      </Stack>
    </Container>
  );
};

export default ProductCard;
