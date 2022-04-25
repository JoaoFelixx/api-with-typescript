import { userRepository } from "../../repositories";
import { User } from "../../entities";
import { UserRegistered } from "../../interfaces";

export async function updateUser(user: UserRegistered): Promise<void | Error> {
  const result = await userRepository.update(user)

  if (result instanceof Error)
    return new Error(result.message);

  return
}