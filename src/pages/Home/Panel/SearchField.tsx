import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useSendSearchMutation } from "../../../store/productsAPI";
import { Button, Box } from "@mui/material";
import { setData } from "../../../store/slices/filterCategorySlice";
import { useAppDispatch } from "../../../hooks/redux";
import { Product } from "../../../types/product";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid lightgrey",
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  margin: "0 auto",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  "&:focus-within": {
    border: "2px solid #1976d2",
  },
  justifyContent: "space-between",
  [theme.breakpoints.up("sm")]: {
    width: "40%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  flexGrow: 1,
  "& .MuiInputBase-input": {
    padding: theme.spacing(0, 1, 0, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    /* [theme.breakpoints.up("sm")]: {
      width: "100%",
    }, */
  },
}));

const SearchField = () => {
  const [input, setInput] = React.useState<string>("");
  const [sendSearch, { data, isSuccess }] = useSendSearchMutation();
  const dispatch = useAppDispatch();
  const sendRequest = async () => {
    if (input) {
      await sendSearch(input);
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") sendRequest();
  };
  React.useEffect(() => {
    console.log(data, isSuccess);
    if (isSuccess === true) {
      dispatch(setData(data as Product[]));
    }
  }, [data, isSuccess]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          key="search"
          name="Search"
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={input}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);
          }}
        />
        <Button
          size="medium"
          variant="contained"
          color="success"
          onClick={sendRequest}
          sx={{
            margin: "auto 0",
            boxShadow: "none",
            borderRadius: "0",
          }}
        >
          Search
        </Button>
      </Search>
    </Box>
  );
};

export default SearchField;
