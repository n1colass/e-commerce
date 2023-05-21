import styled from "@emotion/styled";
import { Container, TextField } from "@mui/material";

export const ModalContainer = styled(Container)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  height: "100%",
}));

export const ModalInput = styled(TextField)(() => ({
  width: "100%",
}));

export const FormContainer = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  backgroundColor: "lightgrey",
  borderRadius: "5px",
  margin: "auto",
  padding: "30px",
  gap: "10px",
}));
