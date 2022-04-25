import { User } from "../../entities";
import { userRepository } from "../../repositories";
import { UserRegistered, } from '../../interfaces';

async function createUser(email: string, password: string): Promise<UserRegistered | Error> {
  const user = new User('', email, password, new Date());

  const result = user.userIsValid();

  if (result instanceof Error)
    return new Error(result.message.toString())

  await userRepository.save(user);

  return user;
}

export default createUser;