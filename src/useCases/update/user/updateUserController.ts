import { Request, Response } from "express";
import { User } from "../../../entities";
import { updateUser } from "./updateUser";
import { userIsValid } from "../../../utils";

export async function updateUserController(request: Request, response: Response) {
  try {
    const isValid = userIsValid(request.body);

    if (isValid instanceof Error)
      return response.status(400).json(isValid.message);

    request.body._id = request.params.user_id

    const user = new User(request.body);

    const result = await updateUser(user);
    
    if (result instanceof Error)
      return response.status(400).json(result.message);

    return response.status(202).json(result);

  } catch (error) {
    return response.sendStatus(409)
  }
}