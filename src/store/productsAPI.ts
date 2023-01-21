import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
}
export const productsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (build) => ({
    getProducts: build.query<Product, void>({
      query: () => "/products",
      //transformResponse:
    }),
  }),
});

export const { useGetProductsQuery } = productsAPI;
