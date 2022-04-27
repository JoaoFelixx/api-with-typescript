import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { authUser } from './authUser';
import { UserStarting } from '../../../interfaces';

export async function authUserController(request: Request, response: Response) {
  try {
    const { email, password } = request.body as UserStarting;

    const result = await authUser(email);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    const passwordsIsCorrect = bcrypt.compare(password, result.password)

    if (!passwordsIsCorrect)
      return response.status(400).json('Email and/or password is incorrect');

    const token = jwt.sign({ _id: result._id }, process.env.SECRET_KEY_FOR_JWT, { expiresIn: '1d' })

    return response.status(201).json({ _id: result._id, email: result.email, token })

  } catch (err) {
    console.log(err)
    return response.sendStatus(409);
  }
} 