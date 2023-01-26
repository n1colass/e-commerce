import React from "react";
import { Box, typography } from "@mui/system";
import { Typography } from "@mui/material";
import FilterList from "./Filter/FilterList";

const FilterContainer = () => {
  return (
    <Box sx={{ width: "15%", padding: "10px", border: "3px solid black" }}>
      <Typography align="left" variant="h6">
        Choose parameters
      </Typography>
      <FilterList></FilterList>
    </Box>
  );
};

export default FilterContainer;
