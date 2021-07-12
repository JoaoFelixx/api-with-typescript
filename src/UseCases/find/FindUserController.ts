import findUser from "./FindUser"; 
import { Request, Response } from 'express'

class FindUserController {
  async handle(request: Request, response: Response) {
    await findUser.find(request.params.user_id) 
      .then(users  => { return response.status(200).json(users) })
      .catch((err) => { return response.status(404).json({ error: "User not a found" })})
  }
}

export default new FindUserController()