import { Request, Response } from "express";
import createUser from "./CreateUser";
import validator from "../../services/Validator";

class CreateUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    if (!request.body.email || !request.body.password) return response.sendStatus(400)

    const { email, password } = request.body;

    validator.userValidate(email, password)
      .then(async () => { 
        await createUser.execute(email, password)
          .then(() => { return response.sendStatus(201) })
          .catch(() => { return response.status(409).json({ error: "email is already registered" }) })
      })
      .catch((messages) => { return response.status(400).json(messages) })
  }
}

export default new CreateUserController() 