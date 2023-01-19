import React from "react";
import { Container, Typography, Stack } from "@mui/material";
import { keyframes } from "@mui/system";

const discount = keyframes`
from {
  margin-left: 85%;
}
to {
  margin-left: 0%;
}
`;

const Discount = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ width: "100vw", padding: "10px 0", boxShadow: 2 }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          animation: `3s ease-in 0s infinite running ${discount}`,
          textTransform: "uppercase",
        }}
      >
        <Typography sx={{ fontWeight: 700 }}>Product -25%</Typography>
      </Stack>
    </Container>
  );
};

export default Discount;
