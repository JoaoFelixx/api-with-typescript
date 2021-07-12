import { Request, Response } from 'express'
import deleteUser from './DeleteUser'

export class DeleteUserController {

  async handle(request: Request, response: Response): Promise<void> {
    
    await deleteUser.exclude(request.params.user_id)
      .then(() => { return response.sendStatus(202) })
      .catch((err) => { return response.status(404).json({error: "User not a found" }) })
  }
}

export default new DeleteUserController()