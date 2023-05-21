import styled from "@emotion/styled";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

export const ReviewInput = styled(TextField)(() => ({
  width: "100%",
  marginBottom: "20px",
  color: "black",
  borderRadius: "5px",
}));

export const ReviewContainer = styled(Box)(() => ({
  margin: "50px 24px",
  width: "100%",
}));

export const Review = styled(Box)(() => ({
  boxSizing: "border-box",
  width: "100%",
  padding: "20px 10px",
  margin: "20px 0",
  wordBreak: "break-all",
  backgroundColor: "#E5E7E9 ",
  textAlign: "left",
  fontSize: "14pt",
  borderRadius: "5px",
}));
