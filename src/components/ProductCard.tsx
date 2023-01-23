import React from "react";
import { Container, Box, Typography, Stack } from "@mui/material";
import { assignIcon } from "../utils/assignIcon";
import { Product } from "../types/product";

const ProductCard = ({ id, category, title, price }: Product) => {
  const { icon, colorBg } = assignIcon(`${category}`);
  return (
    <Container
      disableGutters
      sx={{
        width: "175px",
        height: "250px",
        padding: "0 10px",
        margin: "10px",
        boxShadow: 5,
        borderRadius: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "155px",
          height: "120px",
          margin: "15px 0 15px 0",
          backgroundColor: `${colorBg}`,
          borderRadius: 3,
        }}
      >
        {icon}
      </Box>
      <Stack spacing={1} sx={{ textAlign: "left" }}>
        <Typography variant="body2"> {title} </Typography>
        <Typography variant="body1" sx={{ fontWeight: "700" }}>
          {price}$
        </Typography>
      </Stack>
    </Container>
  );
};

export default ProductCard;
