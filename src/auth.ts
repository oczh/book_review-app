import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from './models/user.model';

interface AuthRequest extends Request {
  user?: any;
  token?: string;
}

const auth = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      throw new Error();
    }

    const secret = process.env.JWT_SECRET as string;
    const decoded = jwt.verify(token, secret);
    const user = await User.findOne({ _id: (decoded as any)._id, 'tokens.token': token });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

export default auth;