import React from "react";
import { Container } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { sortData } from "../../store/slices/filterCategorySlice";
import { useAppDispatch } from "../../hooks/redux";

const SortPanel = () => {
  const [sort, setSort] = React.useState("");
  const dispatch = useAppDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };
  React.useEffect(() => {
    console.log(sort);
    dispatch(sortData(sort));
  }, [sort]);
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: "100%",
        padding: "0",
        display: "flex",
        justifyContent: "center",
        borderBottom: "2px solid black",
      }}
    >
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
    </Container>
  );
};

export default SortPanel;
