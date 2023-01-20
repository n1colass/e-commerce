import React from "react";
import Discount from "./Discount";
import { Container } from "@mui/material";
import { useGetProductsQuery } from "../../store/productsAPI";

const Main = () => {
  const { data } = useGetProductsQuery("");
  console.log(data);
  return (
    <Container disableGutters maxWidth={false} sx={{ padding: 0 }}>
      <Discount />
    </Container>
  );
};

export default Main;
