import styled from "@emotion/styled";
import { Container, Box } from "@mui/material";
import useWindowHeight from "../../../hooks/useWindowsHeight";

export const ContainerProduct = styled(Container)(() => {
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

export const ProductInfoContaier = styled(Container)(() => ({
  height: "250px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  marginTop: "50px",
}));

export const ProductAvatar = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "30%",
  borderRadius: 1,
}));

export const ProductInfo = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  flexDirection: "column",
  height: "100%",
  width: "70%",
}));
