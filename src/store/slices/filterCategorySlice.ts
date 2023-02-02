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
  },
});

export const { setData } = filterCategorySlice.actions;
export default filterCategorySlice.reducer;
