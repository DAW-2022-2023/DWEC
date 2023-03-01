import express from 'express';
import Book from '../models/book.js'

const router = express.Router();

router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json({
    error: null,
    data: books
  });
})

export default router