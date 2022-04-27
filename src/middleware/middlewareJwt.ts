import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export async function middlewareJwt(req: Request, res: Response, next: NextFunction) {
  try {
    const { authorization } = req.headers;

    if (!authorization)
      return res.sendStatus(401);

    const token = authorization.replace('Bearer', '').trim();

    if (jwt.verify(token, process.env.SECRET_KEY_FOR_JWT))
      return next();

    throw new Error();

  } catch (error) {
    return res.sendStatus(401);
  }
}