
import { useGetBooksQuery } from '@/redux/features/books/bookApi';
import { useAppDispatch } from '@/redux/hooks';
import { IBook } from '@/types/globalTypes';
import { useState } from 'react';
import { Input } from './ui/input'

export default function Search() {
  const [searchItem, setSearchItem] = useState("");
  const { data, isLoading } =useGetBooksQuery(undefined);
    const dispatch = useAppDispatch();
    const bookData = data?.data;
    bookData?.map((book:IBook) =>{
      console.log(book);
    })
    // const filteredPersons = details.filter(
    //   person => {
    //     return (
    //       person
    //       .name
    //       .toLowerCase()
    //       .includes(searchField.toLowerCase()) ||
    //       person
    //       .email
    //       .toLowerCase()
    //       .includes(searchField.toLowerCase())
    //     );
    //   }
    // );
  return (
    <div>
      <input type="email"
        className="w-3/4 form-input px-2 py-3 ms-5 my-5 rounded-full border-2 border-solid border-current"
        placeholder='Search through title, author, or genre'
        onInput={(e) => {
          setSearchItem(e.target.value);
        }}
      />
    </div>
  )
}
