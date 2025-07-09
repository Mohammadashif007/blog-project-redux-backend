import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1" }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts",
        }),
        createPosts: builder.mutation({
            query: (newPost) => ({
                url: "/posts",
                method: "POST",
                body: newPost,
            }),
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `/posts/${id}`,
                method: "DELETE",
            }),
        }),
        updatePost: builder.mutation({
            query: ({ id, payload }) => ({
                url: `/post/${id}`,
                method: "PATCH",
                body: payload,
            }),
        }),
    }),
});

export const {
    useGetPostsQuery,
    useCreatePostsMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
} = blogApi;
