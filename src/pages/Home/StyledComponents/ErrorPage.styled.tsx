import styled from "@emotion/styled";
import { Container } from "@mui/material";
import useWindowHeight from "../../../hooks/useWindowsHeight";

export const ContainerError = styled(Container)(({}) => {
  const screenHeight = useWindowHeight(); // dymamic to control height of main container
  const minHeight = screenHeight - 148;

  return {
    minHeight,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    padding: "0px 30px 0px 30px",
    maxWidth: "1600px",
  };
});
