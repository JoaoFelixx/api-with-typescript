import { findUser } from "./FindUser"; 
import { Request, Response } from 'express';

export async function findUserController(request: Request, response: Response) { 
  
    await findUser(request.params.user_id) 
      .then(users  => { return response.status(200).json(users) })
      .catch((err) => { return response.status(404).json({ error: "User not a found" })});
}