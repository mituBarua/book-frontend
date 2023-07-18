import { useGetBooksQuery } from '@/redux/features/books/bookApi';
// import { searchState } from '@/redux/features/books/bookSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IBook } from '@/types/globalTypes';
import React, { useState } from 'react';
import AllBook from './AllBook';
import Books from './AllBook'

export default function AllBooks() {
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isLoading } = useGetBooksQuery(undefined);

  const dispatch = useAppDispatch();
  const bookData = data?.data;
 
  // const handleSearch = (query: string) => {
   
  //   dispatch(searchBooks(query));

  // };

  return (
    <div>
      {/* <form onSubmit={handleSearch}>
        <input
          className="w-3/4 form-input px-2 py-3 ms-5 my-5 rounded-full border-2 border-solid border-current"
          type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by book name" />
        <button type="submit">Search</button>
      </form> */}
      {/* <input type="email"
        className="w-3/4 form-input px-2 py-3 ms-5 my-5 rounded-full border-2 border-solid border-current"
        placeholder='Search through title, author, or genre'
       
      />
       <button
              className="submit-search"
              type="button"
              onClick={handleSearch}
            ></button> */}
      <div className="grid grid-cols-4 gap-2">
        {bookData?.map((book: IBook) => (
          <div>
            <AllBook
              key={book._id}
              book={book}
            ></AllBook>
          </div>
        ))}
      </div>
    </div>
  )
}
