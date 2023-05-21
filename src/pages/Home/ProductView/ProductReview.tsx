import React from "react";
import {
  ReviewInput,
  ReviewContainer,
  Review,
} from "../StyledComponents/ProductReview.styled";
import { Typography } from "@mui/material";

const ProductReview = () => {
  const [input, setInput] = React.useState<string>("");
  const [reviews, setReviews] = React.useState<string[]>([]);
  const addReview = () => {
    if (input) {
      setReviews(() => [...reviews, input]);
      setInput("");
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") addReview();
  };

  return (
    <ReviewContainer>
      <ReviewInput
        minRows={2}
        label="Review"
        variant="filled"
        value={input}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInput(e.target.value);
        }}
      />
      <Typography align="left">Reviews: {reviews.length}</Typography>
      {reviews ? (
        reviews.map((el) => {
          return <Review>{el}</Review>;
        })
      ) : (
        <></>
      )}
    </ReviewContainer>
  );
};

export default ProductReview;
