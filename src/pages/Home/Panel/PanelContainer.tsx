import React from "react";
import { Container } from "@mui/system";
import SearchField from "./SearchField";
import SortPanel from "./SortPanel";
const PanelContainer = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: "100%",
        padding: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "2px solid black",
      }}
    >
      <SearchField></SearchField>
      <SortPanel></SortPanel>
    </Container>
  );
};

export default PanelContainer;
