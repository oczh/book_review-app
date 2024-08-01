import { Router } from "express";
import auth from "../auth";
import  {register, login, me } from '../controlles/user.controller'

export const userRouter = Router(); 
 
userRouter.post('/', register);
userRouter.post('/login', login); 
userRouter.get('/me', auth, me);

module.exports = userRouter;