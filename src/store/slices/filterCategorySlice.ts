import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/product";

type state = {
  sort: string;
  status: string;
  products: Product[];
};
const initialState: state = {
  sort: "",
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
      state.sort = "";
    },
    setLoadingStatus: (state) => {
      state.status = "loading";
    },
    sortData: (state, action: PayloadAction<string>) => {
      if (action.payload === "Lower price") {
        state.sort = action.payload;
        state.products.sort((a, b) => a.price - b.price);
      }
      if (action.payload === "Higher price") {
        state.sort = action.payload;
        state.products.sort((a, b) => b.price - a.price);
      }
      if (action.payload === "Category") {
        state.sort = action.payload;
        state.products.sort((a, b) =>
          a.category > b.category ? 1 : b.category > a.category ? -1 : 0
        );
      }
    },
  },
});

export const { setData, sortData, setLoadingStatus } =
  filterCategorySlice.actions;
export default filterCategorySlice.reducer;
