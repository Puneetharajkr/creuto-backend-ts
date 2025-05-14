import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import * as bookService from "../services/bookService";

export const getBooks = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const books = bookService.getAllBooks();
    res.json(books);
  } catch (error) {
    next(error);
  }
};

export const getBook = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const book = bookService.getBookById(req.params.id);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
    } else {
      res.json(book);
    }
  } catch (error) {
    next(error);
  }
};

export const createBook = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const { title, author, publishedYear } = req.body;
    if (!title || !author || !publishedYear) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const newBook = {
      id: uuidv4(),
      title,
      author,
      publishedYear: Number(publishedYear),
    };

    const createdBook = bookService.addBook(newBook);
    res.status(201).json(createdBook);
  } catch (error) {
    next(error);
  }
};

export const updateBook = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const updated = bookService.updateBook(req.params.id, req.body);
    if (!updated) {
      res.status(404).json({ message: "Book not found" });
    } else {
      res.json(updated);
    }
  } catch (error) {
    next(error);
  }
};

export const deleteBook = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const success = bookService.deleteBook(req.params.id);
    if (!success) {
      res.status(404).json({ message: "Book not found" });
    } else {
      res.json({ message: "Book deleted successfully" });
    }
  } catch (error) {
    next(error);
  }
};
