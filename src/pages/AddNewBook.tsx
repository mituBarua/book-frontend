import React from 'react'
import { toast } from '../components/ui/use-toast';


import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '@/redux/hooks';
import { usePostBookMutation } from '@/redux/features/books/bookApi';
import { useNavigate } from 'react-router-dom';
type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface AddNewFormInputs {
    Img: string;
    Title: string;
    Author: string;
    Genre: string;
    PublicationDate: string
}


export default function AddNewBook({ className, ...props }: UserAuthFormProps) {
    const [postBook, { isLoading, isError, isSuccess }] = usePostBookMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddNewFormInputs>();

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onSubmit = (data: AddNewFormInputs) => {

        postBook({ data });
        toast({
            description: 'Book Added',
        });
        navigate("/");
    };
    return (
        <div>
            <div className={cn(className)} {...props}>
                <form onSubmit={handleSubmit(onSubmit)}>
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

                                {...register('Img', { required: 'Book Image is required' })}
                            />
                            {errors.Title && <p>{errors.Title.message}</p>}
                            <Label className="sr-only" htmlFor="title">
                                Title
                            </Label>
                            <Input
                                id="title"
                                placeholder="Book Title"
                                type="text"
                                autoCapitalize="none"

                                {...register('Title', { required: 'Title is required' })}
                            />
                            {errors.Title && <p>{errors.Title.message}</p>}
                            <Label className="sr-only" htmlFor="title">
                                Author
                            </Label>
                            <Input
                                id="author"
                                placeholder="Book Author"
                                type="text"

                                {...register('Author', { required: 'Author is required' })}
                            />
                            {errors.Author && <p>{errors.Author.message}</p>}
                            <Label className="sr-only" htmlFor="title">
                                Genre
                            </Label>
                            <Input
                                id="title"
                                placeholder="Book Genre"
                                type="text"
                                autoCapitalize="none"

                                {...register('Genre', { required: 'Genre is required' })}
                            />
                            {errors.Genre && <p>{errors.Genre.message}</p>}
                            <Label className="sr-only" htmlFor="title">
                                Publication Date
                            </Label>
                            <Input
                                id="publicationDate"
                                placeholder="Book Publication Date"
                                type="text"
                                autoCapitalize="none"

                                {...register('PublicationDate', { required: 'Publication Date is required' })}
                            />
                            {errors.PublicationDate && <p>{errors.PublicationDate.message}</p>}
                        </div>
                        <Button>Create Book</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
