import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath : 'productApi',
    baseQuery : fetchBaseQuery({baseUrl : 'https://example-data.draftbit.com/products'}),
    tagTypes: ["Product"],
    endpoints : (builder) => ({
        getProducts : builder.query({
            query : () => '?_limit=40',
            providesTags : ["Product"],
        }),
        getSingleProduct : builder.query({
            query : (id) => `/${id}`,
            providesTags : ["Product"]
        })
    })

})

export const { useGetProductsQuery, useGetSingleProductQuery } = productApi