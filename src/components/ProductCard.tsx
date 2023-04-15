import React from "react";
import { styled } from "@mui/material/styles";
import { Container, Box, Typography, Stack } from "@mui/material";
import { assignIcon } from "../utils/assignIcon";
import { Product } from "../types/product";
import { theme } from "../pages/Home";

const CardContainer = styled(Container)(({ theme }) => ({
  width: "175px",
  height: "250px",
  padding: "0 10px",
  margin: "20px 10px 0 10px",
  //boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.2)",
  //borderRadius: "15px",
  border: "1px solid #dfdcdc",
  [theme.breakpoints.up("lg")]: {
    //margin: "20px 10px 0 10px",
  },
}));

const ProductCard = ({ category, title, price }: Product) => {
  const { icon, colorBg } = assignIcon(`${category}`);
  return (
    <CardContainer disableGutters sx={{}}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "155px",
          height: "120px",
          margin: "15px 0 15px 0",
          backgroundColor: `${colorBg}`,
          borderRadius: 1,
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
    </CardContainer>
  );
};

export default ProductCard;
