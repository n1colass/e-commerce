import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import FilterList from "../Filter/FilterList";

const FilterContainer = () => {
  return (
    <Box
      sx={{
        width: "15%",
        padding: "10px",
        border: "0px solid black",
        //marginTop: "30px",
      }}
    >
      <Typography align="left" variant="h6">
        Choose parameters
      </Typography>
      <FilterList></FilterList>
    </Box>
  );
};

export default FilterContainer;
