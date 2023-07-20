
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useGetSingleBookQuery, useUpdateBookMutation } from '@/redux/features/books/bookApi';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { useEffect, useState } from 'react';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

export default function EditBook({ className, ...props }: UserAuthFormProps) {
    const { id } = useParams();

    const { data: book } = useGetSingleBookQuery(id);
    const [updateBook] = useUpdateBookMutation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Title: "",
        Author: "",
        Img: "",
        Genre: "",
        PublicationDate: "",
        reviews:""
      
    });
    useEffect(() => {
        if (book) {

            setFormData({
                Title: book.Title,
                Author: book.Author,
                Genre: book.Genre,
                Img: book.Img,
                PublicationDate: book.PublicationDate,
               reviews:book.reviews
            });
        }
    }, [book]);

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));

    };
    const handleUpdate = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const updatedBookData = {
            ...formData,
            id:book._id
        }
        updateBook( updatedBookData );
        toast({
            description: 'Book Updated',
        });
        navigate("/");
        window.location.reload();

    };
    return (
        <div>
            <div className='flex align-center justify-center mt-4' {...props}>
                <form className='w-1/2' onSubmit={handleUpdate}>
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
                                name="Img"

                            />

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
                                name="Title"

                            />

                            <Label className="sr-only" htmlFor="title">
                                Author
                            </Label>
                            <Input
                                id="author"
                                placeholder="Book Author"
                                type="text"
                                onChange={handleInputChange}
                                name="Author"
                                value={formData.Author}

                            />

                            <Label className="sr-only" htmlFor="title">
                                Genre
                            </Label>
                            <Input
                                id="title"
                                placeholder="Book Genre"
                                type="text"
                                autoCapitalize="none"
                                onChange={handleInputChange}
                                name="Genre"
                                value={formData.Genre}

                            />

                            <Label className="sr-only" htmlFor="title">
                                Publication Date
                            </Label>
                            <Input
                                id="publicationDate"
                                placeholder="Book Publication Date"
                                type="text"
                                autoCapitalize="none"
                                onChange={handleInputChange}
                                name="PublicationDate"
                                value={formData.PublicationDate}
                            />
                             <Label className="sr-only" htmlFor="title">
                               Reviews
                            </Label>
                            <Input
                                id="reviews"
                                placeholder="Reviews"
                                type="text"
                                autoCapitalize="none"
                                onChange={handleInputChange}
                                name="reviews"
                                value={formData.reviews}
                            />

                        </div>
                        <Button>Update Book</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
