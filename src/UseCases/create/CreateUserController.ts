import { Request, Response } from "express";
import { createUser } from "./CreateUser";
import { userIsValid } from "../../services/Validator";

export async function createUserController(request: Request, response: Response): Promise<Response> {
  if (!request.body.email || !request.body.password)
    return response.sendStatus(400);

  const { email, password } = request.body;

  userIsValid(email, password)
    .then(async () => {

      await createUser(email, password)
        .then(() => { return response.sendStatus(201) })
        .catch(() => {
          return response
            .status(409)
            .json({ error: "email is already registered" });
        });

    })
    .catch((messages) => {
      return response.status(400).json(messages);
    });
}