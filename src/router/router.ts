import { Router } from 'express';
import { findUserController   } from '../UseCases/find/FindUserController';
import { createUserController } from '../UseCases/create/CreateUserController';
import { updateUserController } from '../UseCases/update/UpdateUserController';
import { deleteUserController } from '../UseCases/delete/DeleteUserController';

const router = Router()

router.get('/api/v1/users/:user_id?',    findUserController);

router.post('/api/v1/users',             createUserController);
 
router.delete('/api/v1/users/:user_id?', deleteUserController);

router.put('/api/v1/users/:user_id',     updateUserController);

export { router };