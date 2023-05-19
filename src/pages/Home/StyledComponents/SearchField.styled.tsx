import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const Search = styled("div")(({ theme }) => ({
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
    width: "60%",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
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
