import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

export const CardContainer = styled(Container)(({ theme }) => ({
  width: "175px",
  height: "250px",
  padding: "0 10px",
  margin: "20px 10px 0 10px",
  //boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.2)",
  //borderRadius: "15px",
  border: "1px solid #dfdcdc",
  [theme.breakpoints.up("lg")]: {
    //margin: "20px 10px 0 10px",
  },
}));

export const LinkProduct = styled(Link)(({}) => ({
  color: "black",
  textDecoration: "none",
  "&:hover": {
    color: "#E74C3C",
    textDecoration: "underline",
  },
}));
