import React from "react";
import { Container } from "@mui/material";
import { useGetProductsQuery } from "../../store/productsAPI";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../types/product";

const CardsContainer = () => {
  const { data, isSuccess, error } = useGetProductsQuery();
  if (isSuccess) console.log(data, isSuccess);
  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "0",
        padding: "0",
      }}
    >
      {data ? (
        data.map((item: Product) => {
          return <ProductCard key={item.id} {...item} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
};

export default CardsContainer;
