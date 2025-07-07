import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1" }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts",
        }),
    }),
});

export const { useGetPostsQuery } = blogApi;
