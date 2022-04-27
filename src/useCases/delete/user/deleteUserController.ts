import { Request, Response } from 'express';
import { deleteUser } from './deleteUser';

export async function deleteUserController(request: Request, response: Response) {
  try {
    await deleteUser(request.params.user_id)

    return response.sendStatus(204);

  } catch (error) {
    return response.status(404).json("User not a found");
  }
}