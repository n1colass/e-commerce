import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import {
  CardContainer,
  LinkProduct,
} from "../StyledComponents/ProductCard.styled";
import { assignIcon } from "../../../utils/assignIcon";
import { Product } from "../../../types/product";

const ProductCard = ({ category, title, price, _id }: Product) => {
  const { icon, colorBg } = assignIcon(`${category}`);
  return (
    <CardContainer disableGutters sx={{}}>
      <LinkProduct to={`products/${_id}`}>
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
      </LinkProduct>
    </CardContainer>
  );
};

export default ProductCard;
