import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
}
export const productsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "../data" }),
  endpoints: (build) => ({
    getProducts: build.query<Product, string>({
      query: () => "/products.json",
      //transformResponse: (response) => {},
    }),
  }),
});

export const { useGetProductsQuery } = productsAPI;
