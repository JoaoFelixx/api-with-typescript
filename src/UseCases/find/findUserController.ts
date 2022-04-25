import { Request, Response } from 'express';
import findUser from "./findUser";

async function findUserController(request: Request, response: Response) {
  try {

    const result = await findUser(request.params.user_id);

    if (!result) 
      return response.sendStatus(204)

    return response.json(result);

  } catch (error) {
    response.sendStatus(404);
  }
}

export default findUserController;