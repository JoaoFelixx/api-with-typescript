import { Router } from 'express'
import { Request, Response } from 'express'
import { createUserCOntroller } from '../UseCases/create'

const router = Router()

router.post('/users', (req: Request, res: Response) => {
  return createUserCOntroller.handle(req, res)
})

export { router }