import Book, { IBook } from "../models/book.model";
import { IReview } from "../models/review.model";

const add = async (req: any, res: any)=>{
    try {
      const book = new Book(req.body);
      await book.save();
      res.status(201).send(book);
    } catch (error) {
      res.status(400).send(error);
    }
  };

const list = async (req: any, res: any)=>{ 
    try {
      const books = await Book.find().populate('reviewId');
      for(let i = 0; i < books.length; i++){
        average(books[i])
      }
      res.status(200).send(books);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
const get = async (req: any, res: any)=>{ 
    try {
      const book = await Book.findById(req.params.id).populate('reviewId');
      if (!book) {
        return res.status(404).send();
      }
      average(book);
      res.status(200).send(book);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
const update = async (req: any, res: any)=>{ 
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!book) {
        return res.status(404).send();
      }
      res.status(200).send(book);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
const deleteBook = async (req: any, res: any)=>{ 
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      if (!book) {
        return res.status(404).send();
      }
      res.status(200).send(book);
    } catch (error) {
      res.status(500).send(error);
    }
};

export { 
	add, 
	list,
  get,
  update, 
  deleteBook
}

function average(book : IBook) {
  const reviews = book.reviewId as unknown as IReview[];
  let sum = 0;
      for(let i = 0; i < reviews.length; i++){
        sum += reviews[i].score;
      }  
      book.rating = sum / reviews.length;
}