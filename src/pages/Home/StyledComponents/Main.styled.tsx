import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const ContainerSides = styled(Container)(({}) => {
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
