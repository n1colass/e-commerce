import React from "react";
import Discount from "./Discount";
import { Container } from "@mui/material";
const Main = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ padding: 0 }}>
      <Discount />
    </Container>
  );
};

export default Main;
