import { Book } from "../models/bookModel";
const books: Book[] = [];

export const getAllBooks = () => books;

export const getBookById = (id: string) => books.find(book => book.id === id);

export const addBook = (book: Book) => {
  books.push(book);
  return book;
};

export const updateBook = (id: string, data: Partial<Book>) => {
  const index = books.findIndex(book => book.id === id);
  if (index === -1) return null;
  books[index] = { ...books[index], ...data };
  return books[index];
};

export const deleteBook = (id: string) => {
  const index = books.findIndex(book => book.id === id);
  if (index === -1) return false;
  books.splice(index, 1);
  return true;
};
