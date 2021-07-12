import { Router } from 'express'
import findUserController from '../UseCases/find/FindUserController'
import createUserController from '../UseCases/create/CreateUserController'
import updateUserController from '../UseCases/update/UpdateUserController'
import deleteUserController from '../UseCases/delete/DeleteUserController'

const router = Router()

router.get('/users/:user_id?',    findUserController.handle)

router.post('/users',             createUserController.handle)
 
router.delete('/users/:user_id?', deleteUserController.handle)

router.put('/users/:user_id',     updateUserController.handle)

export { router }