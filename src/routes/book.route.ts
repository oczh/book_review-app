import { Router } from "express";
import auth from "../auth";
import { add, list, get, update, deleteBook } from "../controlles/book.controller"

export const bookRouter = Router(); 

bookRouter.post('/', auth, add);
bookRouter.get('/', list); 
bookRouter.get('/:id', get);
bookRouter.patch('/:id', auth, update);
bookRouter.delete('/:id', auth, deleteBook);