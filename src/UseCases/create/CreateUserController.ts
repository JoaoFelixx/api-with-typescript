import { Request, Response } from 'express'
import { CreateUser } from './CreateUser';


export class CreateUserController {

  constructor(
    private createUser: CreateUser
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body
    
    try {
      await this.createUser.execute({
        name,
        email,
        password
      })

      return response.sendStatus(201)

    } catch(err) {
      return response.sendStatus(400)
    } 
  }
}