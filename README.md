# Book Management API

A simple REST API for managing books with CRUD operations and CSV import functionality.

## Features

- CRUD operations for books
- Bulk import from CSV
- TypeScript support
- Error handling middleware
- Request logging with Morgan
- Unit tests with Jest

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file (optional, defaults to PORT=3000)

## Running the API

- Development: `npm run dev`
- Production: `npm run build` then `npm start`

## Testing

Run tests: `npm test`

## API Endpoints

- `GET api/books` - Get all books
- `GET api/books/:id` - Get a specific book
- `POST api/books` - Add a new book
- `PUT api/books/:id` - Update a book
- `DELETE api/books/:id` - Delete a book
- `POST api/books/import` - Import books from CSV

## Sample Requests

See the Postman collection for example requests.
