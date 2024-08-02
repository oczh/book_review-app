import { Router } from "express";
import auth from "../auth";
import  {register, login, me } from '../controlles/user.controller'

export const userRouter = Router(); 

// @Router("user")
userRouter.post('/', register);

// @Router("user")
userRouter.post('/login', login);

// @Router("user")
userRouter.get('/me', auth, me);
