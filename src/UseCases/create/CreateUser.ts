import { v4 } from 'uuid';
import { UserCreate } from "../../entities/User";
import createHash from '../../services/createHash'
import userRepositoryFile from '../../repositories/UserRepositoryFile';

class CreateUser {

  async execute(email: string, password: string) {
    const id = await v4() 
    const hashPassowrd = await createHash(password)

    const user: UserCreate = {
      _id: id,
      email: email.toLocaleLowerCase(),
      password: hashPassowrd.toString()
    }

    return await userRepositoryFile.save(user)
  }
}

export default new CreateUser()