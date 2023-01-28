import { configureStore } from "@reduxjs/toolkit";
import { productsAPI } from "./productsAPI";
import filterCategorySlice from "./slices/filterCategorySlice";

export const store = configureStore({
  reducer: {
    category: filterCategorySlice,
    [productsAPI.reducerPath]: productsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(productsAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
