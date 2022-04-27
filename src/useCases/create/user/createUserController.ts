import { Request, Response } from "express";
import { userIsValid } from "../../../utils";
import { createUser } from "./createUser";

export async function createUserController(request: Request, response: Response) {
  try {
    const isValid = userIsValid(request.body);

    if (isValid instanceof Error)
      return response.status(400).json(isValid.message);

    const result = await createUser(request.body)

    if (result instanceof Error)
      return response.status(400).json(result.message);

    delete result.password;

    return response.status(201).json(result);

  } catch (err) {
    response.sendStatus(409);
  }
}