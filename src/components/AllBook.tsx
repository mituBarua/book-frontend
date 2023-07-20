import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IBook } from "@/types/globalTypes";
import { Link } from "react-router-dom";

interface IProps {
  book: IBook;
}

export default function AllBook({ book }: IProps) {
  const { _id, Title, Author, Genre, Img, PublicationDate } = book;

  return (
    <Card className="w-[350px]">

      <CardHeader>
        <img className="h-[350px]" src={Img} />
        <CardTitle>{Title}</CardTitle>
        <CardDescription>{Author}</CardDescription>
      </CardHeader>
      <CardContent>

        <div className="grid w-full items-center gap-4">
          <p>Genre: {Genre}</p>
          <p>Publication Date: {PublicationDate}</p>
        </div>

      </CardContent>
      <CardFooter className="flex justify-between">
        <Link to={`/book-details/${_id}`}>
          <Button>Details</Button>
        </Link>

      </CardFooter>
    </Card>
  )
}
