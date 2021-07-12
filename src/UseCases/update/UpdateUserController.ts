import validator from "../../services/Validator";
import { Request, Response } from "express";
import updateUser from "./UpdateUser";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    if (!request.body.email || !request.body.password || !request.params.user_id)
      return response.sendStatus(400);

    const { email, password } = request.body;

    validator.userValidate(email, password)
      .then(async () => {
        await updateUser.edit(request.params.user_id, email, password)
          .then(() => { return response.sendStatus(202) })
          .catch((err) => { return response.status(404).json({error: "User not a found"}) })
      })
      .catch((messages) => { return response.status(400).json(messages) })
  }
}

export default new UpdateUserController()