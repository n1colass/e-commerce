import React from "react";
import { Typography } from "@mui/material";
import {
  ContainerProduct,
  ProductAvatar,
  ProductInfo,
  ProductInfoContaier,
} from "../StyledComponents/SingleProduct.styled";
import ProductReview from "./ProductReview";
import { useGetProductByIdQuery } from "../../../store/productsAPI";
import { useParams } from "react-router-dom";
import { assignIcon } from "../../../utils/assignIcon";

const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isSuccess, error } = useGetProductByIdQuery(id as string);
  console.log(data, isSuccess, error);
  const { icon, colorBg } = assignIcon(`${data?.category}`);

  return (
    <ContainerProduct>
      <ProductInfoContaier>
        <ProductAvatar sx={{ backgroundColor: colorBg }}>{icon}</ProductAvatar>
        <ProductInfo>
          <Typography variant="h5"> Title: {data?.title} </Typography>
          <Typography variant="h6" sx={{ fontWeight: "700" }}>
            Price: {data?.price}$
          </Typography>
        </ProductInfo>
      </ProductInfoContaier>
      <ProductReview />
    </ContainerProduct>
  );
};

export default SingleProduct;
