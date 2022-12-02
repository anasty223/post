import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6385cfca875ca3273d463ccb.mockapi.io/posts",
    tagTypes: ["POST"],
  }),

  endpoints: (builder) => ({
    getPost: builder.query({
      query: (page=1) => `posts?page=${page}&limit=5`,
      providesTags: ["POST"],
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: "/posts",
        method: "POST",
        body: {
          title: newPost.title,
          author: newPost.author,
          comments:newPost.comments,
        },
      }),
      invalidatesTags: ["POST"],
    }),
    deletePost: builder.mutation({
      query: (postsId) => ({
        url: `/posts/${postsId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["POST"],
    }),
    updatePost: builder.mutation({
      query: data => {
        const { id, ...body } = data;
        return {
          url: `posts/${id}`,
          method: 'PUT',
          body,
        };
      },
      invalidatesTags: ['POST'],
    }),
  }),
});
console.log("postApi", postApi);
export const {
  useGetPostQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postApi;
