import { Request, Response } from 'express'
import { DeleteUser } from './DeleteUser'
import Validator from '../../services/validator/Validator'
import { DeleteUserDTO } from './DeleteUserDTO';


export class DeleteUserController {
  constructor(
    private deleteUser: DeleteUser
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const user: DeleteUserDTO = request.body;
    
    if (Validator.valideIdAndPassword(user))
      return response.sendStatus(400)
    
    return response.sendStatus(200)
  }
}