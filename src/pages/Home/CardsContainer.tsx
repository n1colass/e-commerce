import React from "react";
import { Container } from "@mui/material";
import ProductCard from "../../components/ProductCard";

const CardsContainer = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "20px 0",
      }}
    >
      <ProductCard />
    </Container>
  );
};

export default CardsContainer;
