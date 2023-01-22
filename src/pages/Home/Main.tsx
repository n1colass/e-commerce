import React from "react";
import Discount from "./Discount";
import { Container } from "@mui/material";
import { useGetProductsQuery } from "../../store/productsAPI";
import CardsContainer from "./CardsContainer";

const Main = () => {
  const { data, isSuccess, error } = useGetProductsQuery();
  if (isSuccess) console.log(data, isSuccess);
  return (
    <>
      {error}
      <Container disableGutters maxWidth={false} sx={{ padding: 0 }}>
        <Discount />
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <CardsContainer />
        </Container>
      </Container>
    </>
  );
};

export default Main;
