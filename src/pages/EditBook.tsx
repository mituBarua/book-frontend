
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '@/redux/hooks';
import { useGetSingleBookQuery, usePostBookMutation, useUpdateBookMutation } from '@/redux/features/books/bookApi';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { useEffect, useState } from 'react';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface AddUpdatedFormInputs {
    Img: string;
    Title: string;
    Author: string;
    Genre: string;
    PublicationDate: string
}

export default function EditBook({ className, ...props }: UserAuthFormProps) {
    const { id } = useParams();

    const { data: book, isLoading, isError } = useGetSingleBookQuery(id);

    const dispatch = useAppDispatch();
    const [updateBook] = useUpdateBookMutation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Title: "",
        Author: "",
        Img: "",
        Genre: "",
        PublicationDate: ""
        // Other form fields
    });
    useEffect(() => {
        if (book) {
            setFormData({
                Title: book.Title,
                Author: book.Author,
                Genre: book.Genre,
                Img: book.Img,
                PublicationDate: book.PublicationDate
                // Other form fields
            });
        }
    }, [book]);
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        console.log(event.target.value)
    };
    const handleUpdate = (event, data: AddUpdatedFormInputs) => {
        const updatedBookData = {
            id: book.id,
            ...formData,
        };
        updateBook(updatedBookData)
            .unwrap()
            .then(() => {
                // Handle update success
                console.log("Book updated successfully");
            })
            .catch((error) => {
                // Handle update error
                console.error("Error updating book:", error);
            });
        toast({
            description: 'Book Updated',
        });
        navigate("/");
    };
    return (
        <div>
            <div className={cn(className)} {...props}>
                <form onSubmit={handleUpdate}>
                    <div className="grid gap-2">
                        <div className="grid gap-1">
                            <Label className="sr-only" htmlFor="title">
                                Book Image
                            </Label>
                            <Input
                                id="img"
                                placeholder="Book Image"
                                type="text"
                                autoCapitalize="none"
                                onChange={handleInputChange}
                                value={formData.Img}
                            // {...register('Img', { required: 'Book Image is required' })}
                            />
                            {/* {errors.Title && <p>{errors.Title.message}</p>} */}
                            <Label className="sr-only" htmlFor="title">
                                Title
                            </Label>
                            <Input
                                id="title"
                                placeholder="Book Title"
                                type="text"
                                autoCapitalize="none"
                                onChange={handleInputChange}
                                value={formData.Title}
                            // {...register('Title', { required: 'Title is required' })}
                            />
                            {/* {errors.Title && <p>{errors.Title.message}</p>} */}
                            <Label className="sr-only" htmlFor="title">
                                Author
                            </Label>
                            <Input
                                id="author"
                                placeholder="Book Author"
                                type="text"
                                onChange={handleInputChange}
                                value={formData.Author}
                            // {...register('Author', { required: 'Author is required' })}
                            />
                            {/* {errors.Author && <p>{errors.Author.message}</p>} */}
                            <Label className="sr-only" htmlFor="title">
                                Genre
                            </Label>
                            <Input
                                id="title"
                                placeholder="Book Genre"
                                type="text"
                                autoCapitalize="none"
                                onChange={handleInputChange}
                                value={formData.Genre}
                            // {...register('Genre', { required: 'Genre is required' })}
                            />
                            {/* {errors.Genre && <p>{errors.Genre.message}</p>} */}
                            <Label className="sr-only" htmlFor="title">
                                Publication Date
                            </Label>
                            <Input
                                id="publicationDate"
                                placeholder="Book Publication Date"
                                type="text"
                                autoCapitalize="none"
                                onChange={handleInputChange}
                                value={formData.PublicationDate}
                            // {...register('PublicationDate', { required: 'Publication Date is required' })}
                            />
                            {/* {errors.PublicationDate && <p>{errors.PublicationDate.message}</p>} */}
                        </div>
                        <Button>Update Book</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
