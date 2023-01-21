import React from "react";
import Discount from "./Discount";
import { Container } from "@mui/material";
import { useGetProductsQuery } from "../../store/productsAPI";

const Main = () => {
  const { data, isSuccess, error } = useGetProductsQuery();
  if (isSuccess) console.log(data, isSuccess);
  return (
    <>
      {error}
      <Container disableGutters maxWidth={false} sx={{ padding: 0 }}>
        <Discount />
      </Container>
    </>
  );
};

export default Main;
