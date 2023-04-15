import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { sortData } from "../../../store/slices/filterCategorySlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

const SortPanel = () => {
  const sort = useAppSelector((state) => state.category.sort);
  const dispatch = useAppDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    dispatch(sortData(event.target.value as string));
  };
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Sort by</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={sort}
          label="Sort by"
          onChange={handleChange}
        >
          <MenuItem value="Category">Category</MenuItem>
          <MenuItem value="Lower price">Lower price</MenuItem>
          <MenuItem value="Higher price">Higher price</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default SortPanel;
