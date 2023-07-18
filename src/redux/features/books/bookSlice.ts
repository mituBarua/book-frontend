import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "@/types/globalTypes";
interface BookState {
  books: IBook[];
  searchQuery: string;
}

const initialState: BookState = {
  books: [],
  searchQuery: '',
};
const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setSearchResults(state, action: PayloadAction<IBook[]>) {
      state.books = action.payload;
    },
  },
});
export const { setSearchQuery, setSearchResults } = bookSlice.actions;

export default bookSlice.reducer;