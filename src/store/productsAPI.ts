import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../types/product";
export const productsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_MAIN_URL }),
  endpoints: (build) => ({
    sendCategory: build.mutation<Product[], string[]>({
      query: (category) => ({
        url: "/category",
        method: "POST",
        body: category,
      }),
    }),
  }),
});

export const { useSendCategoryMutation } = productsAPI;
