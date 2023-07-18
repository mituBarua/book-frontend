import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { IBook } from "@/types/globalTypes";




interface IBookStore {
  books: IBook[];
  filteredBooks: IBook[]
}
const initialState: IBookStore = {
  books: [],
  filteredBooks: []
}
const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    allBook: (state, action: PayloadAction<IBook[]>) => {
      state.books = action.payload;

      // state.filteredBooks = action.payload;

    },
   
    removeSearch: (state) => {
      state.filteredBooks = [];
    },
    searchBook: (state, action: PayloadAction<string>) => {
      let newSearchBooks: WritableDraft<IBook>[] = [];
      state.books.map((book) => {
        if (book.Title!.search(action.payload) >= 0 
          || book.Genre!.search(action.payload) >= 0
          || book.Author!.search(action.payload) >= 0) {
          newSearchBooks.push(book);
        }
      })
      state.filteredBooks = newSearchBooks;
    
    },
    filterGenre:(state, action: PayloadAction<string>) => {
      const Genre = action.payload;
      console.log('genre',Genre)
      state.filteredBooks = state.books.filter((book) => book.Genre === Genre);
      console.log('genre',state.filteredBooks)
    }
  },
});
export const { searchBook, allBook,removeSearch,filterGenre } = bookSlice.actions;

export default bookSlice.reducer;