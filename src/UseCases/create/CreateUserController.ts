import { Request, Response } from "express";
import { CreateUser } from "./CreateUser";
import Validator from "../../services/validator/Validator";
import { User } from "../../entities/User";

export class CreateUserController {
  constructor(
    private createUser: CreateUser
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const user: User = request.body;

    if (!Validator.userValidate(user)) return response.sendStatus(400);

    await this.createUser.execute(user);

    return response.sendStatus(201);
  }
}
