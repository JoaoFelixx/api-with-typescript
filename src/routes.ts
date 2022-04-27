import { Router } from 'express';
import { middlewareJwt } from './middleware';
import { 
  authUserController,
  createUserController,
  deleteUserController,
  updateUserController,
} from './useCases';

const routes = Router()

routes.post('/users', createUserController);
routes.post('/auth', authUserController);

routes.use(middlewareJwt);

routes.get('/data/', (req, res) => res.status(200).json('OK'));

routes.put('/users/:user_id', updateUserController);

routes.delete('/users/:user_id?', deleteUserController);

export{ routes };