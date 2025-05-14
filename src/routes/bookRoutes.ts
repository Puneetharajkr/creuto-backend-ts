import express, { Request, Response, NextFunction } from "express";
import multer from "multer";
import * as bookController from "../controllers/bookController";
import * as importController from "../controllers/importController";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Book CRUD Routes
router.get("/books", bookController.getBooks);
router.get("/books/:id", bookController.getBook);
router.post("/books", bookController.createBook);
router.put("/books/:id", bookController.updateBook);
router.delete("/books/:id", bookController.deleteBook);

// Import Books (CSV)
router.post("/books/import", upload.single("file"), importController.importBooks);
export default router;
