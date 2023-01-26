import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/product";

const initialState: Product[] = [];

const filterCategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setFilterCategory(state, action: PayloadAction<Product[]>) {
      state.concat(action.payload);
    },
  },
});

export const { setFilterCategory } = filterCategorySlice.actions;
export default filterCategorySlice.reducer;
