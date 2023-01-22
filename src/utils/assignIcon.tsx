import AppleIcon from "@mui/icons-material/Apple";
import CookieIcon from "@mui/icons-material/Cookie";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export const assignIcon = (category: string) => {
  switch (category) {
    case "Fruits":
      return {
        icon: (
          <AppleIcon sx={{ color: "#2ECC71", width: "75px", height: "75px" }} />
        ),
        colorBg: "#229954",
      };
    case "Desserts":
      return {
        icon: (
          <CookieIcon
            sx={{ color: "#F1C40F", width: "75px", height: "75px" }}
          />
        ),
        colorBg: "#6E2C00 ",
      };
    case "Fast food":
      return {
        icon: (
          <FastfoodIcon
            sx={{ color: "#F7DC6F ", width: "75px", height: "75px" }}
          />
        ),
        colorBg: "#9A7D0A",
      };
    case "Drinks":
      return {
        icon: (
          <LocalDrinkIcon
            sx={{ color: "#AED6F1", width: "75px", height: "75px" }}
          />
        ),
        colorBg: "#21618C",
      };
    case "Electronics":
      return {
        icon: (
          <DeveloperBoardIcon
            sx={{ color: "#EAECEE", width: "75px", height: "75px" }}
          />
        ),
        colorBg: "#145A32",
      };
    case "Furniture":
      return {
        icon: (
          <TableRestaurantIcon
            sx={{ color: "#6E2C00", width: "75px", height: "75px" }}
          />
        ),
        colorBg: "#E59866",
      };
    default:
      return {
        icon: <QuestionMarkIcon />,
        colorBg: "#D0D3D4",
        width: "75px",
        height: "75px",
      };
  }
};
