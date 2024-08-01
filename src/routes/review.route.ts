import { Router } from "express";
import auth from "../auth";
import { add, list, update, deleteReview } from "../controlles/review.controller"

export const reviewRouter = Router(); 
 
reviewRouter.post('/books/:bookId/reviews', auth, add);
reviewRouter.get('/books/:bookId/reviews', list); 
reviewRouter.patch('/reviews/:id', auth, update);
reviewRouter.delete('/reviews/:id', auth, deleteReview);

module.exports = reviewRouter;