import { Button } from '@/components/ui/button';
import { useDeleteBookMutation, useGetSingleBookQuery } from '@/redux/features/books/bookApi';
import { useAppDispatch } from '@/redux/hooks'
import React from 'react'

import { Link,  useNavigate, useParams } from 'react-router-dom';

export default function BookDetails() {
    const { id } = useParams();
    const { data: book, isLoading, error } = useGetSingleBookQuery(id);
   const [deleteBook, {  isError }] = useDeleteBookMutation();
   const navigate = useNavigate();
    const handleDelete = () => {
        window.confirm("Are you sure want to delete?");
        deleteBook(id);
        navigate("/");
        window.location.reload();
    }
    return (
        <div className="mt-6 flex max-w-5xl mx-auto items-center">
            <div className="w-[50%]">
                <img src={book?.Img} alt="" />
            </div>
            <div className="w-[50%] space-y-3">
                <h1 className="text-3xl font-semibold">Title : {book?.Title}</h1>
                <p>Author:  {book?.Author}</p>
                <p>Genre:  {book?.Gennre}</p>
                <p>Publications Date : {book?.PublicationDate}</p>
                <p className="text-xl">Rating: {book?.reviews}</p>
                <div> 
                    <Link to={`/edit-book/${id}`}>
                    <Button className='mr-4'>Edit</Button>
                    </Link>

                    <Button onClick={handleDelete}>Delete</Button>
                </div>

            </div>
        </div>
    )
}
