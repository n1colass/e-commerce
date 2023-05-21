import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../StyledComponents/SearchField.styled";
import { useSendSearchMutation } from "../../../store/productsAPI";
import { Button, Box } from "@mui/material";
import {
  setData,
  setLoadingStatus,
} from "../../../store/slices/filterCategorySlice";
import { useAppDispatch } from "../../../hooks/redux";
import { Product } from "../../../types/product";

const SearchField = () => {
  const [input, setInput] = React.useState<string>("");
  const [sendSearch, { data, isSuccess }] = useSendSearchMutation();
  const dispatch = useAppDispatch();
  const sendRequest = async () => {
    if (input) {
      dispatch(setLoadingStatus());
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
