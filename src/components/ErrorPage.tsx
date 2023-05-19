import React from "react";
import { useRouteError } from "react-router-dom";
import { ContainerError } from "../pages/Home/StyledComponents/ErrorPage.styled";
import { Typography } from "@mui/material";

const ErrorPage = () => {
  const error: any = useRouteError();
  return (
    <ContainerError>
      <Typography variant="h4" sx={{ marginTop: "50px" }}>
        Oops!
      </Typography>
      <Typography variant="h2">Something went wrong</Typography>
      <Typography variant="h2">
        <i>{error?.statusText || error?.message}</i>
      </Typography>
    </ContainerError>
  );
};

export default ErrorPage;
