import { Router } from "express";
import auth from "../auth";
import { add, list, update, deleteReview } from "../controlles/review.controller"

export const reviewRouter = Router(); 
 
reviewRouter.post('/:bookId', auth, add);
reviewRouter.get('/:bookId', list); 
reviewRouter.patch('/:id', auth, update);
reviewRouter.delete('/:id', auth, deleteReview);
