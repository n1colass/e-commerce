import React from "react";
import Discount from "./Discount";
import { Container } from "@mui/material";
import CardsContainer from "./CardsContainer";
import FilterContainer from "./FilterContainer";
import styled from "@emotion/styled";

const ContainerSides = styled(Container)(({ theme }) => {
  const screenHeight = window.innerHeight; // dymamic to control height of main container
  const minHeight = screenHeight - 180;

  return {
    minHeight,
    width: "100%",
    padding: "0px 30px 0px 30px",
    display: "flex",
    justifyContent: "center",
    maxWidth: "1600px",
  };
});

const Main = () => {
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          padding: 0,
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Discount />

        <ContainerSides
          maxWidth={false}
          disableGutters
          sx={{
            minHeight: "1000px",
          }}
        >
          <FilterContainer />
          <CardsContainer />
        </ContainerSides>
      </Container>
    </>
  );
};

export default Main;
