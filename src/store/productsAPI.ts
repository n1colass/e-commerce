import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../types/product";
export const productsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_MAIN_URL }),
  endpoints: (build) => ({
    sendCategory: build.mutation<Product[], string[]>({
      query: (category) => ({
        url: "/products/category",
        method: "POST",
        body: category,
      }),
    }),
    sendSearch: build.mutation<Product[], string>({
      query: (search) => ({
        url: "/products/search",
        method: "POST",
        body: { search: search },
      }),
    }),
    getProductById: build.query<Product, string>({
      query: (id: string) => `/products/${id}`,
    }),
  }),
});

export const {
  useSendCategoryMutation,
  useSendSearchMutation,
  useGetProductByIdQuery,
} = productsAPI;
