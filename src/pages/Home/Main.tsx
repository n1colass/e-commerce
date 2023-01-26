import React from "react";
import Discount from "./Discount";
import { Container } from "@mui/material";
import CardsContainer from "./CardsContainer";
import FilterContainer from "./FilterContainer";

const Main = () => {
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{ padding: 0, overflowX: "hidden" }}
      >
        <Discount />
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            width: "100%",
            padding: "25px 30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FilterContainer></FilterContainer>
          <CardsContainer />
        </Container>
      </Container>
    </>
  );
};

export default Main;
