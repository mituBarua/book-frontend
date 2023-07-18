export interface IProduct {
  _id: number;
  name: string;
  image: string;
  price: number;
  features: string[];
  status: boolean;
  rating: number;
  quantity?: number;
}
export interface IBook {
  _id: number;
  Title:string;
  Img:string;
  Author:string;
  Genre:string;
  PublicationDate: string;
  reviews:string;
}