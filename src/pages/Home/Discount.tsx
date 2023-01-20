import React from "react";
import { Container, Typography, Stack } from "@mui/material";

const Discount = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        width: "100vw",
        padding: " 0",
        backgroundColor: "#10F1F1 ",
      }}
    >
      <Stack
        direction="row"
        spacing={10}
        sx={{
          textTransform: "uppercase",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ fontWeight: 700, letterSpacing: "5px", color: "#FE4DE6" }}
          variant="h6"
        >
          The Biggest Winter Sales up to 60%
        </Typography>
      </Stack>
    </Container>
  );
};

export default Discount;
