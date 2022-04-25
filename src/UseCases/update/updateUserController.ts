import { User } from "../../entities";
import { Request, Response } from "express";
import { updateUser } from "./updateUser";

async function updateUserController(request: Request, response: Response) {
  try {
    if (!request.body.email || !request.body.password)
      return response.sendStatus(400);

    const { email, password, createdAt } = request.body;
    const { user_id: _id } = request.params;

    const user = new User(_id, email, password, createdAt);

    const result = await updateUser(user);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    return response.sendStatus(202);

  } catch (error) {
    return response.sendStatus(409)
  }
}

export default updateUserController;