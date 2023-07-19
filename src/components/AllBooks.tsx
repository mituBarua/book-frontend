import { useGetBooksQuery } from '@/redux/features/books/bookApi';
import { allBook, setFilterGenre, removeSearch, searchBook } from '@/redux/features/books/bookSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IBook } from '@/types/globalTypes';
import React, { useEffect, useState } from 'react';
import AllBook from './AllBook';


export default function AllBooks() {
  const [searchQuery, setSearchQuery] = useState('');
  const { data } = useGetBooksQuery(undefined);
  const dispatch = useAppDispatch();
  const bookData = data?.data;
  const { filteredBooks, books } = useAppSelector(state => state.book)

  dispatch(allBook(bookData));

  const filterGenre = useAppSelector((state) => state.book.filterGenre);

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchBook(searchQuery));
  };
  const handleRemoveSearch = () => {
    dispatch(removeSearch());
  }
  const handleChange = (event) => {
    const selectedGenre = event.target.value;
    dispatch(setFilterGenre(selectedGenre));

  }


  return (
    <div>
      <div>

        <input
          className="w-1/2 form-input px-2 py-3 ms-5 my-5 rounded-full border-2 border-solid border-current"
          type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by book name" />
        <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded' onClick={handleSearch}>Search</button>
        <button className='mx-4' onClick={handleRemoveSearch}>X</button>


        <select className='py-2 px-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg' value={filterGenre} onChange={handleChange}>
          <option value="">Choose Genre ..</option>
          <option value='Drama'>Drama</option>
          <option value='Self Dependent'>Self Dependent</option>
          <option value='Motivational'>Motivational</option>
          <option value='Fantasy'>Fantasy</option>
          <option value='Psychological'>Psychological</option>
          <option value='Mystery'>Mystery</option>

        </select>

      </div>
      <div className="grid grid-cols-4 gap-2">

        {filteredBooks && filteredBooks?.map((book: IBook) => (
          <div>
            <AllBook
              key={book._id}
              book={book}
            ></AllBook>
          </div>
        ))
        }
        {filteredBooks.length == 0 && books && books?.map((book: IBook) => (
          <div>
            <AllBook
              key={book._id}
              book={book}
            ></AllBook>
          </div>
        ))
        }
      </div>
    </div>
  )
}
