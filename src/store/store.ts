import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { productsAPI } from "./productsAPI";
import filterCategorySlice from "./slices/filterCategorySlice";

export const store = configureStore({
  reducer: {
    //category: filterCategorySlice.reducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(productsAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
