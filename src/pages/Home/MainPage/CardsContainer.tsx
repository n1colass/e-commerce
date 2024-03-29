import React from "react";
import { Container } from "@mui/material";
import ProductCard from "../ProductView/ProductCard";
import { Product } from "../../../types/product";
import Loading from "../../../components/Loading";
import NotMatch from "../../../components/NotMatch";
import { useAppSelector } from "../../../hooks/redux";
import PanelContainer from "../Panel/PanelContainer";

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
        height: "fit-content",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "0",
        padding: "0 20px 20px 20px",
        border: "0px solid blue",
      }}
    >
      <PanelContainer></PanelContainer>
      {data.status === "fullfied" ? (
        data.products.length ? (
          data.products.map((item: Product) => {
            return <ProductCard key={item._id} {...item} />;
          })
        ) : (
          <NotMatch />
        )
      ) : (
        <Loading></Loading>
      )}
    </Container>
  );
};

export default CardsContainer;
