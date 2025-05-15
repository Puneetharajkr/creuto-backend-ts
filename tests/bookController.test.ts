import request from 'supertest';
import app from '../src/app';
import * as bookService from '../src/services/bookService';

// Type definitions for Jest
import { describe, expect, it, beforeEach, jest } from '@jest/globals';

describe('Book API', () => {
  beforeEach(() => {
    jest.restoreAllMocks(); // Cleaner than clearAllMocks
  });

  describe('GET /books', () => {
    it('should return an empty array when no books exist', async () => {
      jest.spyOn(bookService, 'getAllBooks').mockReturnValueOnce([]);
      
      const response = await request(app).get('/books');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });

    it('should return all books', async () => {
      const mockBooks = [
        { id: '1', title: 'Book 1', author: 'Author 1', publishedYear: 2021 },
        { id: '2', title: 'Book 2', author: 'Author 2', publishedYear: 2022 }
      ];
      jest.spyOn(bookService, 'getAllBooks').mockReturnValueOnce(mockBooks);

      const response = await request(app).get('/books');
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockBooks);
    });
  });

  describe('POST /books', () => {
    it('should create a new book', async () => {
      const newBook = {
        title: 'New Book',
        author: 'New Author',
        publishedYear: 2023
      };

      jest.spyOn(bookService, 'addBook').mockImplementationOnce(() => ({
        id: '123',
        ...newBook
      }));

      const response = await request(app)
        .post('/books')
        .send(newBook);

      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        id: '123',
        ...newBook
      });
    });

    it('should return 400 if required fields are missing', async () => {
      const response = await request(app)
        .post('/books')
        .send({ title: 'Incomplete Book' });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('message', 'Missing required fields');
    });
  });
});