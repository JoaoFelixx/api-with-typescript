import { Router } from 'express';
import { 
  findUserController,
  createUserController,
  deleteUserController,
  updateUserController,
} from './UseCases';

const routes = Router()

routes.get('/api/v1/users/:user_id?',    findUserController);

routes.post('/api/v1/users',             createUserController);
 
routes.delete('/api/v1/users/:user_id?', deleteUserController);

routes.put('/api/v1/users/:user_id',     updateUserController);

export default routes;