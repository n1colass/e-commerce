import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/product";

type state = {
  status: string;
  products: Product[];
};
const initialState: state = {
  status: "empty",
  products: [],
};
const filterCategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.status = "fullfied";
    },
    sortData: (state, action: PayloadAction<string>) => {
      if (action.payload === "Lower price") {
        state.products.sort((a, b) => a.price - b.price);
      }
      if (action.payload === "Higher price") {
        state.products.sort((a, b) => b.price - a.price);
      }
      if (action.payload === "Category") {
        state.products.sort((a, b) =>
          a.category > b.category ? 1 : b.category > a.category ? -1 : 0
        );
      }
    },
  },
});

export const { setData, sortData } = filterCategorySlice.actions;
export default filterCategorySlice.reducer;
