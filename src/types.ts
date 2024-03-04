export interface Ibook {
    id: number;
    title: string;
    description: string;
    genre: string;
    publicationDate: string; 
    author: Iauthor;
    reviews: Ireview[];
}

export interface IBookCardProps {
    book: Ibook;
}

export interface IBooks {
    books: Ibook[];
}

export interface Iauthor {
    id: number;
    firstName: string;
    lastName: string;
    bibliography: string;
    books?: Ibook[]; 
}

export interface Ireview {
    id: number; 
    fullName: string; 
    email: string; 
    comment: string; 
    creationDate: string; 
    book: Ibook;
}