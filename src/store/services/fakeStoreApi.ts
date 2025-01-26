import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../middlewares/baseQuery';
import { Product } from './types';

export const PRODUCTS_PER_PAGE = 6;
export const MAX_PAGES = 10;

export const fakeStoreApi = createApi({
  reducerPath: 'fakeStoreApi',
  baseQuery,
  tagTypes: ['Products', 'Categories'],
  endpoints: builder => ({
    getProducts: builder.query<{ products: Product[] }, void>({
      query: () => 'products',
      transformResponse: (response: Product[]) => ({
        products: response,
      }),
    }),

    getProduct: builder.query<Product, number>({
      query: (id: number) => `products/${id}`,
      transformResponse: (response: Product) => response,
    }),

    getCategories: builder.query<string[], void>({
      query: () => 'products/categories',
    }),

    getProductsByCategory: builder.query<{ products: Product[] }, string>({
      query: (category: string) => `products/category/${category}`,
      transformResponse: (response: Product[]) => ({
        products: response,
      }),
    }),

    getLimitedProducts: builder.query<Product[], number>({
      query: (limit: number) => `products?limit=${limit}`,
      transformResponse: (response: Product[]) => response,
      providesTags: ['Products'],
    }),

    addProduct: builder.mutation<Product, Partial<Product>>({
      query: (product: Partial<Product>) => ({
        url: 'products',
        method: 'POST',
        body: product,
      }),
      invalidatesTags: ['Products'],
    }),

    updateProduct: builder.mutation<
      Product,
      { id: number; product: Partial<Product> }
    >({
      query: ({ id, product }: { id: number; product: Partial<Product> }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body: product,
      }),
      invalidatesTags: ['Products'],
    }),

    deleteProduct: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetLimitedProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = fakeStoreApi;
