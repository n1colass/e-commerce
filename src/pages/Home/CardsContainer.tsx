import React from "react";
import { Container } from "@mui/material";
import { useGetProductsQuery } from "../../store/productsAPI";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../types/product";
import Loading from "../../components/Loading";
const CardsContainer = () => {
  const { data, isSuccess, error } = useGetProductsQuery();
  if (isSuccess) console.log(data, isSuccess);
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
        padding: "0",
        border: "3px solid blue",
      }}
    >
      {data ? (
        data.map((item: Product) => {
          return <ProductCard key={item.id} {...item} />;
        })
      ) : (
        <Loading></Loading>
      )}
    </Container>
  );
};

export default CardsContainer;
