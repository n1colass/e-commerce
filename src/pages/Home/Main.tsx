import React from "react";
import Discount from "./Discount";
import { Container } from "@mui/material";
import CardsContainer from "./CardsContainer";
import FilterContainer from "./FilterContainer";
import { setData } from "../../store/slices/filterCategorySlice";
import { useGetProductsQuery } from "../../store/productsAPI";
import { useAppDispatch } from "../../hooks/redux";

const Main = () => {
  const { data, isSuccess } = useGetProductsQuery();
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    if (isSuccess === true) {
      dispatch(setData(data));
      console.log(data);
    }
  }, [dispatch, isSuccess]);
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{ padding: 0, overflowX: "hidden" }}
      >
        <Discount />
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            width: "100%",
            padding: "25px 30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FilterContainer></FilterContainer>
          <CardsContainer />
        </Container>
      </Container>
    </>
  );
};

export default Main;
