import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./baseUrl";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getCategoriesAll: build.query({
      query: () => "categories/all",
    }),

    getProductsAll: build.query({
      query: () => "products/all ",
    }),

    getProductsFromCategories: build.query({
      query: (id) => `categories/${id}`,
    }),

    getProduct: build.query({
      query: (id) => `products/${id}`,
    }),

    sendRequestCoupon: build.mutation({
      query: (body) => ({
        url: "sale/send",
        method: "POST",
        body,
      }),
    }),

    sendOrder: build.mutation({
      query: (body) => ({
        url: "order/send",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetCategoriesAllQuery,
  useGetProductsAllQuery,
  useGetProductQuery,
  useGetProductsFromCategoriesQuery,
  useSendOrderMutation,
  useSendRequestCouponMutation,
} = productApi;
