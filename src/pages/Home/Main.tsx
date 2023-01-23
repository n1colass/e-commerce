import React from "react";
import Discount from "./Discount";
import { Container } from "@mui/material";

import CardsContainer from "./CardsContainer";

const Main = () => {
  return (
    <>
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
