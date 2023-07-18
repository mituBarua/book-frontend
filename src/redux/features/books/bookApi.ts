import { api } from "@/redux/api/apiSlice";

const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/books',
        }),
        getSingleBook: builder.query({
            query: (id) => ({ url: `/book/${id}` }),
        }),
        postBook: builder.mutation({
            query: ({ data }) => ({
                url: '/book',
                method: 'POST',
                body: data,
            }),
          
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/book/${id}`,
                method: 'DELETE',
              }), 
        }),
        postComment: builder.mutation({
            query: ({ id, data }) => ({
                url: `/comment/${id}`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags:['comments'],
        }),
        getComment: builder.query({
            query:(id) => `/comment/${id}`,
            providesTags:['comments'],
        }),
    }), 
})
export const { useGetBooksQuery, 
    useGetSingleBookQuery,usePostBookMutation,useDeleteBookMutation,
    usePostCommentMutation,useGetCommentQuery } = bookApi;