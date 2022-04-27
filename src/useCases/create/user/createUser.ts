import { User } from "../../../entities";
import { userService } from "../../../services";
import { UserRegistered, UserStarting } from '../../../interfaces';

export async function createUser(data: UserStarting): Promise<UserRegistered | Error> {
  const user = new User(data);

  const result = await userService.save(user);

  if (result instanceof Error)
    return new Error(result.message);

  return result;
}