import { Request, Response } from "express";
import createUser from "./createUser";

async function createUserController(request: Request, response: Response): Promise<Response> {
  try {

    if (!request.body.email || !request.body.password)
      return response.sendStatus(400);

    const { email, password } = request.body;

    const result = await createUser(email, password)

    if (result instanceof Error)
      return response.status(400).json(result.message);

    delete result.password;

    return response.status(201).json(result);

  } catch (err) {
    response.sendStatus(409);
  }
}

export default createUserController;