import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../types/product";
export const productsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_MAIN_URL }),
  endpoints: (build) => ({
    getProducts: build.query<Product[], void>({
      query: () => "/",
    }),
  }),
});

export const { useGetProductsQuery } = productsAPI;
