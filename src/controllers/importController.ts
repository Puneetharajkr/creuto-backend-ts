import { Request, Response } from "express";
import fs from "fs";
import readline from "readline";
import { v4 as uuidv4 } from "uuid";
import * as bookService from "../services/bookService";

export const importBooks = async (
  req: Request,
  res: Response
): Promise<void> => {
  const file = req.file as Express.Multer.File | undefined;

  if (!file) {
    res.status(400).json({ message: "CSV file required" });
    return;
  }

  const filePath = file.path;
  const stream = fs.createReadStream(filePath);
  const rl = readline.createInterface({ input: stream });

  let addedBooksCount = 0;
  const errorRows: string[] = [];
  let lineNumber = 0;

  for await (const line of rl) {
    lineNumber++;
    if (lineNumber === 1) continue; // skip header

    const [title, author, year] = line.split(",");
    if (!title || !author || !year || isNaN(Number(year))) {
      errorRows.push(`Row ${lineNumber}: Invalid data`);
      continue;
    }

    const book = {
      id: uuidv4(),
      title: title.trim(),
      author: author.trim(),
      publishedYear: Number(year.trim()),
    };

    bookService.addBook(book);
    addedBooksCount++;
  }

  res.status(200).json({ addedBooksCount, errorRows });
};
