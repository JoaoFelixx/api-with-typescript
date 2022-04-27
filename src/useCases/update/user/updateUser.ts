import { userService } from "../../../services";
import { UserRegistered } from "../../../interfaces";

export async function updateUser(user: UserRegistered): Promise<UserRegistered | Error> {
  const result = await userService.update(user)

  if (result instanceof Error)
    return new Error(result.message);

  return result
}