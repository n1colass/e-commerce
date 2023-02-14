import React from "react";
import { Container } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../types/product";
import Loading from "../../components/Loading";
import SortPanel from "./SortPanel";

import { useAppSelector } from "../../hooks/redux";

const CardsContainer = () => {
  const data = useAppSelector((state) => state.category);
  console.log(data);
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        width: "85%",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "0",
        padding: "0 30px",
        border: "3px solid blue",
      }}
    >
      <SortPanel></SortPanel>
      {data.status === "fullfied" ? (
        data.products.map((item: Product) => {
          return <ProductCard key={item._id} {...item} />;
        })
      ) : (
        <Loading></Loading>
      )}
    </Container>
  );
};

export default CardsContainer;
