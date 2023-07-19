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
        updateBook: builder.mutation({
            query: (updatedBook) => ({
              url: `/book/${updatedBook.id}`,
              method: "PUT",
              body: updatedBook,
            }),
            
          }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/book/${id}`,
                method: 'DELETE',
              }), 
        }),
      
    }), 
})
export const { useGetBooksQuery, 
    useGetSingleBookQuery,usePostBookMutation,useUpdateBookMutation,useDeleteBookMutation } = bookApi;