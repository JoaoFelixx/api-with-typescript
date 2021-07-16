import { userIsValid } from "../../services/Validator";
import { Request, Response } from "express";
import { updateUser } from "./UpdateUser";

export async function updateUserController(request: Request, response: Response) {

  if (!request.body.email || !request.body.password || !request.params.user_id)
    return response.sendStatus(400);

  const { email, password } = request.body;

  userIsValid(email, password)
    .then(async () => {

      await updateUser(request.params.user_id, email, password)
        .then(() => { return response.sendStatus(202) })
        .catch(() => { return response.status(404).json({error: "User not a found"}) });
      })
      .catch((messages) => { return response.status(400).json(messages) });
}