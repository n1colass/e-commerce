import React from "react";
import Discount from "../Discount";
import { Container } from "@mui/material";
import CardsContainer from "./CardsContainer";
import FilterContainer from "./FilterContainer";
import { ContainerSides } from "../StyledComponents/Main.styled";

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
